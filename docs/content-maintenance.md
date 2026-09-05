# Updating academic content

## Publications

Maintain `_data/publications.yml` newest venue year first. If a journal year has not
been assigned, use the first preprint year and show it explicitly in the metadata.
Keep accepted status separate from the venue. Link titles to the published version
when available, otherwise the arXiv record. Add PDF and code links only after
verifying them; label an earlier preprint PDF when its title differs from the
published paper.

Metadata was checked against the canonical academic CV and primary paper pages
on 2026-09-04. Causal Dynamic Resonance has six authors in its revised arXiv record.

## Public CV

`docs/cv/` contains a public derivative of the 2026-09-04 canonical Desktop
academic CV. Its only content change is the obfuscated contact address and removal
of the email hyperlink. Leave the canonical source unchanged when refreshing it.

Build from the repository root with Typst (New Computer Modern and Font Awesome 6
fonts must be installed):

```sh
typst compile docs/cv/simon_draeger_cv.typ assets/pdf/Simon_Draeger_CV.pdf
pdfinfo assets/pdf/Simon_Draeger_CV.pdf
pdfinfo -url assets/pdf/Simon_Draeger_CV.pdf
pdftotext -layout assets/pdf/Simon_Draeger_CV.pdf -
```

Render and inspect both pages before publishing. Check extracted text and link
annotations for a literal email or `mailto:` URL. Obfuscation deters simple email
harvesters but cannot guarantee that machines will not reconstruct an address.
The `docs/` directory is excluded from the generated website.

## DDALAB screenshot

`assets/img/ddalab-workspace.png` is a screenshot of the running
Python/PySide6 desktop application, captured on 2026-09-04. At Simon's request,
it displays `data/S04__05_02_screenprint.edf` from DDALAB: the first ten seconds of
channels LCIN1–LCIN8, sampled at 500 Hz. The library sidebar is hidden. The capture
tool's cursor and halo were removed using the matching region of a second capture;
the waveform and control area was verified identical between captures. Only the
screenshot is included in this repository, not the source EDF. Refresh the screenshot
and technology description together after significant application changes.

## Site checks

```sh
bundle exec jekyll build
node --check assets/js/portfolio.js
git diff --check
```

Check light and dark themes at desktop, 390px and 320px CSS widths. Verify section
buttons and incoming fragment URLs clear the sticky header, no horizontal overflow
appears, and Back to top is hidden initially and appears after scrolling.
