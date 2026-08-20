# Design System

## Direction

The website is a content-neutral personal adaptation of the Svelte Agentation reference: one centered reading column, compact controls, precise rules, quiet surfaces, and restrained motion. Simon's research content replaces the original product identity.

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
- Violet is reserved for an optional CV action; green is used for research tags.

## Typography

- Source Sans Pro is self-hosted in Regular and Semibold weights from `assets/fonts/`.
- Geist Mono is self-hosted for code from `assets/fonts/GeistMono-Variable.woff2`.
- Desktop page title: 31.2px, 600 weight, 46.8px line height, `-0.025em` tracking.
- Mobile page title: 28.8px, 600 weight, 43.2px line height.
- Introductory copy: 15.2px on desktop and 14px on mobile, with a 24px line height.
- Section heading: 19.2px, 600 weight, 28.8px line height.
- Buttons: 12px, 600 weight, 16px line height.
- Project metadata uses Source Sans Pro with slightly increased letter spacing.

## Layout

- The outer content column is exactly 42rem (672px) wide.
- Page gutters are 24px horizontally and 40px vertically on desktop, 20px horizontally and 32px vertically below 640px.
- The sticky header uses three columns with equal 16px gaps: introduction, portrait, and controls. The portrait is 112px square on desktop and 80px square on mobile.
- Headers, actions, dividers, sections, and project rows share the same column width.
- The action row starts 28px below the introduction. Dividers use 32px vertical margins.

## Components

- Buttons: 32px secondary, outline, and optional violet variants with 6px radii.
- Profile portrait: the current published square photograph, presented with the same quiet border and radius as the surrounding interface.
- Favicon: Lucide's `brain-circuit` mark in off-white on a rounded charcoal square.
- Header controls: stacked 32px circular theme and GitHub icon buttons, kept visible while the page scrolls.
- Research focus: unboxed title-and-description rows without rules or repeated introductory copy.
- Project entry: title and summary followed by a bordered metadata and links panel.
- Detail page: the same reading column with a compact back link and prose body.
- Floating control: a 48px circular back-to-top button.

## Motion

Secondary-button hover uses the reference 150ms `cubic-bezier(0.4, 0, 0.2, 1)` transition and an 80% OKLab mix with transparency. Copy feedback keeps its label and dimensions fixed while only the 14px icon changes, entering from 85% scale over 500ms. Reduced-motion preferences collapse animations to effectively zero duration.
