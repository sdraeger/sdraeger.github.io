import { readdirSync, readFileSync } from "node:fs"
import { basename, resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"
import { parse } from "yaml"

// The Jekyll site stays the single source of content.
const site = resolve(import.meta.dirname, "..")
const read = (path: string) => parse(readFileSync(resolve(site, path), "utf8"))

// Exposes _data/*.yml and the featured _projects/*.md front matter as `virtual:site`.
function siteData(): Plugin {
  const id = "virtual:site"
  const config = read("_config.yml")
  return {
    name: "site-data",
    resolveId: (source) => (source === id ? `\0${id}` : undefined),
    load(source) {
      if (source !== `\0${id}`) return
      const profile = read("_data/profile.yml")
      const projects = readdirSync(resolve(site, "_projects"))
        .filter((file) => file.endsWith(".md"))
        .map((file) => ({
          ...parse(readFileSync(resolve(site, "_projects", file), "utf8").split(/^---$/m)[1]),
          url: config.url + config.collections.projects.permalink.replace(":name", basename(file, ".md")),
        }))
        .filter((project) => project.featured)
        .sort((a, b) => a.order - b.order)
      return [
        `import photo from ${JSON.stringify(site + profile.photo)}`,
        `export const profile = { ...${JSON.stringify(profile)}, photo, cv_url: ${JSON.stringify(`./${basename(profile.cv_url)}`)} }`,
        `export const publications = ${JSON.stringify(read("_data/publications.yml"))}`,
        `export const projects = ${JSON.stringify(projects)}`,
      ].join("\n")
    },
    transformIndexHtml: (html) =>
      html
        .replaceAll("%TITLE%", config.title)
        .replaceAll("%DESCRIPTION%", config.description)
        .replaceAll("%URL%", config.url),
  }
}

export default defineConfig({
  base: "./",
  // Copies the CV next to index.html: viteSingleFile would inline it as a data: URL, which browsers refuse to open.
  publicDir: resolve(site, "assets/pdf"),
  plugins: [react(), tailwindcss(), viteSingleFile(), siteData()],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },
})
