declare module "virtual:site" {
  export const profile: {
    name: string
    intro: string
    photo: string
    photo_alt: string
    email_parts: { local: string; provider: string; tld: string }
    github_url: string
    cv_url: string
    scholar_url: string
    focus: { title: string; description?: string }[]
    about: string[]
  }

  export const publications: {
    year: number
    title: string
    authors: string
    venue: string
    venue_short?: string
    status?: string
    preprint_year?: number
    url?: string
    pdf_url?: string
    pdf_label?: string
    code_url?: string
  }[]

  export const projects: {
    title: string
    summary: string
    url: string
    year?: number
    status?: string
    tags?: string[]
    links?: { label: string; url: string }[]
  }[]
}
