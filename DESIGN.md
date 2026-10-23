---
name: Simon Dräger
description: A research homepage set as a Tufte-style handout, with one reading column and a margin of notes.
colors:
  accent-oxblood: "#7a1f1f"
  ink: "#111111"
  muted-graphite: "#55554f"
  ground-paper: "#fffff8"
  hairline: "color-mix(in oklch, #111111 14%, transparent)"
typography:
  display:
    fontFamily: "Source Sans 3 Variable, sans-serif"
    fontSize: "3.25rem"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Source Sans 3 Variable, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "Source Sans 3 Variable, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
  lead:
    fontFamily: "Source Sans 3 Variable, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Source Sans 3 Variable, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"onum\" 1, \"pnum\" 1"
  label:
    fontFamily: "Source Sans 3 Variable, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0px"
  focus: "2px"
spacing:
  stack: "0.9rem"
  entry: "1.6rem"
  section: "3.5rem"
  gutter: "3.5rem"
  column: "40rem"
  margin: "17rem"
components:
  link:
    textColor: "{colors.ink}"
  link-hover:
    textColor: "{colors.accent-oxblood}"
  margin-link:
    textColor: "{colors.accent-oxblood}"
    typography: "{typography.body}"
  margin-note:
    textColor: "{colors.muted-graphite}"
    typography: "{typography.label}"
    width: "{spacing.margin}"
  margin-note-active:
    textColor: "{colors.accent-oxblood}"
  entry-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  section-head:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
  portrait:
    rounded: "{rounded.none}"
    size: "10rem"
---

# Design System: Simon Dräger

Scope: this file describes the homepage handout (`homepage/index.html`, built from `homepage/src/`). Project detail pages (`_layouts/project.html`, `assets/css/portfolio.css`) still use the older Jekyll styles (Source Sans Pro, oklch neutrals, outlined buttons) and have not moved to this world.

## Overview

**Creative North Star: "The Handout"**

The page reads like a printed seminar handout in the Tufte manner. A single reading column carries the name, the abstract and every entry; a wide right margin carries the facts a reader checks beside them: venue, year, status, PDF and code links, the portrait and contact links. Each margin note sits level with the entry it annotates, so the eye moves sideways for evidence and down for reading.

The material is paper and ink. A warm off-white ground, near-black text, a graphite gray for secondary text and one deep oxblood red for links and the active note. Hierarchy comes from size, weight and italics within one sans family. There are no boxes, badges, shadows or icons; the only rule on the page is a hairline under the masthead.

Motion is limited to 150ms color changes. The signature interaction ties each entry to its note: hovering or focusing anywhere in an entry inks its margin note red.

**Key Characteristics:**
- One 40rem reading column plus a 17rem margin column, separated by a 3.5rem gutter.
- Margin notes in small graphite type, level with their entries.
- Italic section heads at a modest 1.75rem.
- Oldstyle proportional figures throughout running text.
- One accent color, used for links and the active note.

## Colors

A paper-and-ink palette with a single oxblood accent.

### Primary
- **Oxblood** (accent-oxblood): links in the masthead and margin, link hover color everywhere, the active margin note, the focus ring and the tint of selection and underlines. Contrast on the ground is 10.2:1.

### Neutral
- **Ink** (ink): name, headings, entry titles and body text (18.8:1 on the ground).
- **Graphite** (muted-graphite): role line, author lists, margin notes and the footer (7.5:1 on the ground).
- **Handout Paper** (ground-paper): the page ground, a barely warm off-white.
- **Hairline** (hairline): the single rule under the masthead.

Derived tints are mixed from the accent in OKLCH: link underlines use the accent at 45% over transparent, and text selection uses the accent at 18% over the ground.

### Named Rules
**The One Red Rule.** Oxblood is the only chromatic color. It marks things a reader can follow (links) and the note currently tied to the reader's focus. Add no second hue.

## Typography

**Display Font:** Source Sans 3 Variable (with sans-serif)
**Body Font:** Source Sans 3 Variable (with sans-serif)

**Character:** One humanist sans in regular, italic and semibold carries every role. The user chose Source Sans 3 over a handout serif, so the Tufte character comes from italics, oldstyle figures and margin placement.

### Hierarchy
- **Display** (400, 3.25rem, 1.05, -0.02em; 2.5rem below 62rem): the name only, balanced wrapping.
- **Headline** (400 italic, 1.75rem, 1.2): section heads such as Publications and Research focus.
- **Title** (600, 1.125rem, 1.4): paper and project titles, pretty wrapping.
- **Lead** (400, 1.25rem, 1.55): the one-sentence abstract under the name.
- **Role** (400 italic, 1.3rem, graphite): the position line under the name.
- **Body** (400, 1.125rem, 1.6, oldstyle proportional figures): running text, capped at 70ch. Research focus items open with a semibold run-in title ending in a period.
- **Label** (400, 0.875rem, 1.45, graphite): margin notes and the footer. Publication status is set in italic at this size.

### Named Rules
**The Italic Head Rule.** Section heads are italic at reading-adjacent size. They take no rules, caps, numbering or eyebrow labels.

**The One Family Rule.** Every role uses Source Sans 3; distinguish roles with size, weight and italics.

## Layout

The page is a centered container of column + gutter + margin (40rem + 3.5rem + 17rem) with 1.5rem side padding, 5rem top padding and 4rem bottom padding. Every block is a row: a reading cell of up to 40rem and an optional margin note of 17rem, top-aligned. Rows without a note leave the margin empty.

Vertical rhythm: 0.9rem between blocks inside a reading cell, 1.6rem between entries, 3.5rem between sections, 1.25rem below a section head, and 5rem before the footer. The masthead ends with 2rem of padding and the hairline.

Below 62rem the row collapses to one column and each note follows its entry with 0.35rem of space. The masthead note becomes a wrapping row: a 6rem portrait beside the link stack, with the education note on its own line below. Top padding drops to 2.5rem.

### Named Rules
**The Level Note Rule.** A margin note belongs to one entry and starts level with it. Put references, venues and links in the note and keep the reading cell for titles, authors and prose.

## Elevation & Depth

The system is flat. There are no shadows, layers or tinted surfaces; everything sits on the paper ground. Separation comes from whitespace and the one masthead hairline.

### Named Rules
**The Flat Paper Rule.** No shadows, cards or filled panels. Use space to separate content; the masthead hairline is the only drawn line.

## Shapes

Square corners throughout. The portrait is a 1:1 crop at 10rem (6rem on narrow screens) with no border or radius. The only rounding is the 2px corner on the focus outline.

## Components

### Links
Text links with a thin underline.
- **Default:** inherit the surrounding text color with a 1px underline in a 45% accent tint, offset 0.18em. In the masthead and margin notes the text itself is oxblood.
- **Hover:** text and underline turn oxblood over 150ms ease-out.
- **Focus:** 2px solid oxblood outline, 2px offset, 2px radius.
- **Title links:** entry titles link without a visible underline at rest; they turn oxblood on hover.
- External links open in a new tab.

### Entry Row (signature)
A paper or project: semibold title and graphite authors or summary in the reading cell, with a graphite margin note holding venue and year, optional italic status and a wrapping row of links (PDF, Code, Details, project links) spaced 0.9rem apart.
- **Active:** hovering or focusing anywhere in the row turns its margin note oxblood over 150ms.

### Masthead
Name, italic role line, lead abstract and the first about paragraph in the reading cell. The margin holds the portrait, a stacked list of links (CV, Google Scholar, GitHub, email) at 0.95rem and the education note. A hairline closes it.

### Footer
One graphite label line with the copyright and a Back to top link.

## Do's and Don'ts

### Do:
- **Do** put every venue, status and link for an entry in its margin note, level with the entry.
- **Do** use oxblood only for links, hover, focus, selection and the active note.
- **Do** set section heads in 1.75rem regular italic.
- **Do** keep transitions to 150ms color changes and keep smooth scrolling behind `prefers-reduced-motion: no-preference`.
- **Do** cap running text at 70ch.

### Don't:
- **Don't** add cards, boxes, badges, shadows or filled panels.
- **Don't** draw rules between sections or entries; the masthead hairline is the only one.
- **Don't** add icons; links are words.
- **Don't** introduce a second accent hue or a second type family.
- **Don't** round the portrait or other images.
