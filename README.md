# sdraeger.github.io

Simon Dräger's static research website, built with Jekyll and a compact visual system adapted from the local `sv-agentation-template`.

## Edit the site

Personal copy and links live in [`_data/profile.yml`](_data/profile.yml). The homepage layout is [`_layouts/portfolio.html`](_layouts/portfolio.html), and the shared visual system is [`assets/css/portfolio.css`](assets/css/portfolio.css).

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
