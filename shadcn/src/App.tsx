import {
  ArrowUpIcon,
  CodeIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GraduationCapIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react"
import type { ReactNode } from "react"
import { profile, projects, publications } from "virtual:site"

import { useTheme } from "@/components/theme-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const sections = [
  ["about", "About"],
  ["focus", "Research Focus"],
  ["publications", "Publications"],
  ["research", "Research Software"],
]

// Lucide has no brand marks; this is the mark the Jekyll site vendors in _includes/icon.html.
function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1024 1024" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M512 0C229.2 0 0 229.2 0 512c0 226.3 146.7 418.1 350.1 485.8 25.6 4.7 35-11.1 35-24.6 0-12.1-.5-52.6-.7-95.4-142.4 31-172.5-60.4-172.5-60.4-23.3-59.2-56.9-74.9-56.9-74.9-46.5-31.8 3.5-31.1 3.5-31.1 51.4 3.6 78.5 52.8 78.5 52.8 45.7 78.3 119.9 55.7 149.1 42.6 4.6-33.1 17.9-55.7 32.5-68.5-113.7-12.9-233.2-56.9-233.2-253.1 0-55.9 20-101.6 52.7-137.4-5.3-12.9-22.8-65 5-135.6 0 0 43-13.8 140.8 52.5A490.7 490.7 0 0 1 512 237.1c43.5.2 87.4 5.9 128.4 17.3 97.7-66.3 140.7-52.5 140.7-52.5 27.9 70.6 10.4 122.7 5.1 135.6 32.8 35.8 52.6 81.5 52.6 137.4 0 196.7-119.7 240-233.7 252.7 18.4 15.9 34.7 47 34.7 94.8 0 68.5-.6 123.6-.6 140.5 0 13.6 9.2 29.5 35.2 24.5C877.4 929.5 1024 737.6 1024 512 1024 229.2 794.8 0 512 0Z"
      />
    </svg>
  )
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            nativeButton={false}
            render={
              <a href={href} target="_blank" rel="noreferrer" aria-label={label} />
            }
          />
        }
      >
        {children}
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const dark =
    theme === "dark" ||
    (theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches)
  const label = `Switch to ${dark ? "light" : "dark"} mode`
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label={label}
            onClick={() => setTheme(dark ? "light" : "dark")}
          />
        }
      >
        {dark ? <SunIcon /> : <MoonIcon />}
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="flex scroll-mt-20 flex-col gap-4"
    >
      <h2 id={`${id}-heading`} className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function App() {
  // Assembled at runtime so the address never appears whole in the page source.
  const { local, provider, tld } = profile.email_parts
  const email = `${local}@${provider}.${tld}`

  return (
    <>
      <Button
        variant="outline"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
        nativeButton={false}
        render={<a href="#main-content" />}
      >
        Skip to content
      </Button>

      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-3xl items-center gap-2 px-4">
          <a href="#main-content" className="mr-2 text-sm font-semibold">
            {profile.name}
          </a>
          <nav aria-label="Sections" className="hidden items-center gap-1 md:flex">
            {sections.map(([id, label]) => (
              <Button
                key={id}
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={<a href={`#${id}`} />}
              >
                {label}
              </Button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-1">
            <IconLink href={profile.github_url} label="GitHub profile">
              <GithubIcon />
            </IconLink>
            <IconLink href={profile.scholar_url} label="Google Scholar profile">
              <GraduationCapIcon />
            </IconLink>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto flex max-w-3xl flex-col gap-12 px-4 py-10 outline-none"
      >
        <section
          aria-label="Introduction"
          className="flex flex-col gap-6 sm:flex-row sm:items-center"
        >
          <Avatar className="size-24">
            <AvatarImage src={profile.photo} alt={profile.photo_alt} />
            <AvatarFallback>
              {profile.name.split(" ").map((word) => word[0])}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {profile.name}
            </h1>
            <p className="text-lg text-muted-foreground">{profile.intro}</p>
            <div className="flex flex-wrap gap-2">
              <Button
                nativeButton={false}
                render={<a href={profile.cv_url} target="_blank" />}
              >
                <FileTextIcon data-icon="inline-start" />
                CV (PDF)
              </Button>
              <Button
                variant="outline"
                nativeButton={false}
                render={<a href={`mailto:${email}`} />}
              >
                <MailIcon data-icon="inline-start" />
                {email}
              </Button>
            </div>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="flex flex-col gap-3 text-muted-foreground">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="focus" title="Research Focus">
          <div className="grid gap-4 sm:grid-cols-3">
            {profile.focus.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  {item.description && (
                    <CardDescription>{item.description}</CardDescription>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="publications" title="Publications">
          <div className="flex flex-col gap-4">
            {publications.map((publication) => (
              <Card key={publication.title}>
                <CardHeader>
                  <CardTitle>
                    {publication.url ? (
                      <a
                        href={publication.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {publication.title}
                      </a>
                    ) : (
                      publication.title
                    )}
                  </CardTitle>
                  <CardDescription>{publication.authors}</CardDescription>
                  {publication.status && (
                    <CardAction>
                      <Badge variant="secondary">{publication.status}</Badge>
                    </CardAction>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
                    <Badge variant="outline">{publication.year}</Badge>
                    {publication.venue_short ?? publication.venue}
                    {publication.preprint_year &&
                      ` · Preprint ${publication.preprint_year}`}
                  </div>
                </CardContent>
                {(publication.pdf_url || publication.code_url) && (
                  <CardFooter className="gap-2">
                    {publication.pdf_url && (
                      <Button
                        variant="outline"
                        size="sm"
                        nativeButton={false}
                        render={
                          <a href={publication.pdf_url} target="_blank" rel="noreferrer" />
                        }
                      >
                        <FileTextIcon data-icon="inline-start" />
                        {publication.pdf_label ?? "PDF"}
                      </Button>
                    )}
                    {publication.code_url && (
                      <Button
                        variant="outline"
                        size="sm"
                        nativeButton={false}
                        render={
                          <a href={publication.code_url} target="_blank" rel="noreferrer" />
                        }
                      >
                        <CodeIcon data-icon="inline-start" />
                        Code
                      </Button>
                    )}
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </Section>

        <Section id="research" title="Research Software">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.summary}</CardDescription>
                {project.status && (
                  <CardAction>
                    <Badge variant="secondary">{project.status}</Badge>
                  </CardAction>
                )}
              </CardHeader>
              {project.tags && project.tags.length > 0 && (
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              )}
              <CardFooter className="gap-2">
                <Button
                  size="sm"
                  nativeButton={false}
                  render={<a href={project.url} target="_blank" rel="noreferrer" />}
                >
                  Details
                  <ExternalLinkIcon data-icon="inline-end" />
                </Button>
                {project.links?.map((link) => (
                  <Button
                    key={link.url}
                    variant="outline"
                    size="sm"
                    nativeButton={false}
                    render={<a href={link.url} target="_blank" rel="noreferrer" />}
                  >
                    {link.label}
                    <ExternalLinkIcon data-icon="inline-end" />
                  </Button>
                ))}
              </CardFooter>
            </Card>
          ))}
        </Section>
      </main>

      <Separator />
      <footer className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <Button
          variant="ghost"
          size="sm"
          nativeButton={false}
          render={<a href="#main-content" />}
        >
          <ArrowUpIcon data-icon="inline-start" />
          Back to top
        </Button>
      </footer>
    </>
  )
}
