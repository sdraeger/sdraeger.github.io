# sdraeger.github.io

Simon Dräger's static research website, built with Jekyll and a compact visual system adapted from the local `sv-agentation-template`.

## Edit the site

Personal copy and links live in [`_data/profile.yml`](_data/profile.yml). The deployed homepage is the shadcn/ui app in [`shadcn/`](shadcn/), which reads the same data files; CI builds it after Jekyll and replaces Jekyll's `index.html`. Project detail pages still use [`_layouts/project.html`](_layouts/project.html) and [`assets/css/portfolio.css`](assets/css/portfolio.css).

## Add a research project

Each project is one Markdown file in `_projects/`. Copy the example in [`docs/adding-research-projects.md`](docs/adding-research-projects.md), change the front matter, and write any longer project description below it.

- `featured: true` includes the project on the homepage.
- `order` controls homepage order; lower numbers appear first.
- `links` accepts any number of labeled URLs, such as Paper, Code, Demo, or Data.
- The Markdown body becomes the project's detail page at `/research/<filename>/`.

## Preview locally

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. Pushes to `main` are built and deployed by GitHub Actions.
