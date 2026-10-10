# shadcn/ui version of the homepage

Reads content from the Jekyll site's `_config.yml`, `_data/`, and `_projects/`, and builds a single self-contained `dist/index.html` that opens directly from disk.

```sh
bun install
bun run build
open dist/index.html
```

Add components with `bunx --bun shadcn@latest add <component>`.
