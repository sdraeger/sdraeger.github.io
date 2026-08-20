# Adding research projects

Create one file per project under `_projects/`, for example `_projects/neural-dynamics.md`:

```markdown
---
title: Learning structure in neural dynamics
summary: A concise statement of the problem, approach, and result.
year: "2026"
status: Ongoing
order: 10
featured: true
tags:
  - Machine learning
  - Computational neuroscience
links:
  - label: Paper
    url: https://example.com/paper
  - label: Code
    url: https://github.com/username/repository
---

Use the Markdown body for a longer description of the project. Add figures,
methods, results, collaborators, or citations here. The detail page is generated
automatically at `/research/neural-dynamics/`.
```

Only files with `featured: true` appear on the homepage. Lower `order` values appear first. Remove a field when it is not relevant; `links` and `tags` can contain any number of entries.
