import { Fragment } from "react"

// Renders *word* in profile copy as <em>; everything else stays plain text.
export function emphasize(text: string) {
  return text.split(/\*([^*]+)\*/).map((part, i) =>
    i % 2 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>
  )
}
