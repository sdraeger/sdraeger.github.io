# Design System

## Direction

The website uses one centered reading column, compact controls, quiet surfaces, and restrained motion. Whitespace separates the research sections; rules are limited to the profile header, the introduction boundary, and project detail pages.

## Theme

The default light theme supports close reading. A dark theme preserves the same hierarchy and follows the visitor's system preference until an explicit choice is saved locally.

## Color

- Background and card: `oklch(1 0 0)`.
- Foreground: `oklch(0.145 0 0)`.
- Secondary and muted surface: `oklch(0.97 0 0)`.
- Muted foreground: `oklch(0.556 0 0)`.
- Border: `oklch(0.922 0 0)`.
- Dark background: `oklch(0.145 0 0)`.
- Dark foreground: `oklch(0.985 0 0)`.
- The CV action is neutral and outlined; green is used for research tags on detail pages.

## Typography

- Source Sans Pro is self-hosted in Regular and Semibold weights from `assets/fonts/`.
- Geist Mono is self-hosted for code from `assets/fonts/GeistMono-Variable.woff2`.
- Desktop page title: 31.2px, 600 weight, 46.8px line height, `-0.025em` tracking.
- Mobile page title: 28.8px, 600 weight, 43.2px line height; the profile name becomes 24px with a 31.2px line height below 400px.
- Homepage introductory and body copy: 16px with a 24px line height.
- Section heading: 19.2px, 600 weight, 28.8px line height.
- Focus labels, publication titles, and project titles: 16px, 600 weight, 24px line height.
- Publication authors and venue: 14px with a 22px line height.
- Section navigation: 14px, 600 weight, 20px line height.
- Buttons: 12px, 600 weight, 16px line height.
- Project metadata uses Source Sans Pro with slightly increased letter spacing.

## Layout

- The outer content column has a maximum width of 42rem (672px).
- Page gutters are 24px horizontally and 40px vertically on desktop, 20px horizontally and 32px vertically below 640px.
- The header uses three columns with equal 16px gaps: name and contact, portrait, and profile links. It scrolls away with the page. The introduction sits below it. The portrait is 112px square on desktop and 64px square on mobile, where column gaps become 12px.
- Headers, actions, dividers, sections, and project rows share the same column width.
- The action row starts 28px below the introduction. Dividers use 32px vertical margins.
- Adjacent homepage sections have a 48px gap. Publication entries have a 32px gap.

## Components

- Section navigation: plain text links with 32px minimum height and an underline on hover or keyboard focus. The outlined CV button sits at the right on desktop; links form two columns on mobile.
- Buttons: 32px high with 6px radii.
- Profile portrait: the current published square photograph, presented with the same quiet border and radius as the surrounding interface.
- Favicon: Lucide's `brain-circuit` mark in off-white on a rounded charcoal square.
- Header controls: GitHub above Google Scholar. Icons have borderless 32px targets and a subtle hover surface.
- Research focus: unboxed title-and-description rows without rules or repeated introductory copy.
- Publications: year, linked title, authors, compact venue and status, then PDF and optional code links. Full venue names stay in the data file.
- Project entry: title and summary followed by an unboxed metadata and links row.
- Detail page: the same reading column with a compact back link and prose body.
- Footer: copyright, GitHub, a Back to top text link, and the theme switch. No floating controls.

## Motion

Icon and outline-button hover transitions last 150ms. Section and Back to top links use native smooth scrolling. Reduced-motion preferences disable smooth scrolling and collapse animations to effectively zero duration.
