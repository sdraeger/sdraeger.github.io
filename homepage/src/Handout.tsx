import type { ReactNode } from "react"
import { profile, projects, publications } from "virtual:site"

import { emphasize } from "@/lib/emphasize"

// Each row pairs reading text with its margin note, so the note stays level with its entry.
function Row({ children, note }: { children: ReactNode; note?: ReactNode }) {
  return (
    <div className="row">
      <div className="main">{children}</div>
      {note && <aside className="note">{note}</aside>}
    </div>
  )
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default function Handout() {
  // Assembled at runtime so the address never appears whole in the page source.
  const { local, provider, tld } = profile.email_parts
  const email = `${local}@${provider}.${tld}`

  return (
    <main className="page" id="top">
      <header>
        <Row
          note={
            <>
              <img className="portrait" src={profile.photo} alt={profile.photo_alt} width={400} height={400} />
              <p className="links">
                <a href={profile.cv_url} target="_blank">CV (PDF)</a>
                <Ext href={profile.scholar_url}>Google Scholar</Ext>
                <Ext href={profile.github_url}>GitHub</Ext>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
              <p className="edu">{profile.education}</p>
            </>
          }
        >
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="lead">{profile.intro}</p>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{emphasize(paragraph)}</p>
          ))}
        </Row>
      </header>

      <section aria-labelledby="publications">
        <h2 id="publications">Publications</h2>
        {publications.map((p) => (
          <Row
            key={p.title}
            note={
              <>
                <p>
                  {p.venue_short ?? p.venue}
                  {!(p.venue_short ?? p.venue).includes(String(p.year)) &&
                    `${(p.venue_short ?? p.venue).includes(":") ? " · " : " "}${p.year}`}
                  {p.preprint_year && p.preprint_year !== p.year && `, preprint ${p.preprint_year}`}
                </p>
                {p.status && <p className="status">{p.status}</p>}
                {(p.pdf_url || p.code_url) && (
                  <p className="links">
                    {p.pdf_url && <Ext href={p.pdf_url}>{p.pdf_label ?? "PDF"}</Ext>}
                    {p.code_url && <Ext href={p.code_url}>Code</Ext>}
                  </p>
                )}
              </>
            }
          >
            <h3>{p.url ? <Ext href={p.url}>{p.title}</Ext> : p.title}</h3>
            <p className="authors">{p.authors}</p>
          </Row>
        ))}
      </section>

      <section aria-labelledby="focus">
        <h2 id="focus">Research focus</h2>
        {profile.focus.map((item) => (
          <Row key={item.title}>
            <p>
              <span className="runin">{item.title}.</span> {item.description}
            </p>
          </Row>
        ))}
      </section>

      <section aria-labelledby="software">
        <h2 id="software">Research software</h2>
        {projects.map((project) => (
          <Row
            key={project.title}
            note={
              <>
                {project.status && project.status !== "Research software" && <p>{project.status}</p>}
                {project.tags && <p>{project.tags.join(", ")}</p>}
                <p className="links">
                  <Ext href={project.url}>Details</Ext>
                  {project.links?.map((link) => (
                    <Ext key={link.url} href={link.url}>{link.label}</Ext>
                  ))}
                </p>
              </>
            }
          >
            <h3><Ext href={project.url}>{project.title}</Ext></h3>
            <p>{project.summary}</p>
          </Row>
        ))}
      </section>

      <footer>
        <Row>
          <p>
            © {new Date().getFullYear()} {profile.name} · <a href="#top">Back to top</a>
          </p>
        </Row>
      </footer>
    </main>
  )
}
