# Homepage

The handout-style homepage. It reads content from the Jekyll site's `_config.yml`, `_data/`, and `_projects/`, and builds a single self-contained `dist/index.html` that opens directly from disk. CI copies it over Jekyll's `index.html`.

```sh
bun install
bun run dev     # http://localhost:5173
bun run build
```
