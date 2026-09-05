// Based on https://www.overleaf.com/latex/templates/autocv/scfvqfpxncwb and https://www.overleaf.com/latex/templates/faangpath-simple-template/npsfpdqnxmbc

// Shared spacing keeps every entry and section consistent.
#let entry_space = 0.9em
#let body_space = 0.5em

// Format start and end dates.
#let format_date(start_date: none, end_date: none) = {
  let date = {
    if end_date == none {
        start_date
      } else if start_date == none {
        end_date
      } else {
        start_date + " – " + end_date
      }
  }

  if date != none { date }
}

// Format locations.
#let format_location(location) = {
  emph(location)
}

// Only the entry heading shares a row with dates and locations.
// Descriptions and bullets are placed below this grid at full width.
#let cv_entry(left_content: none, right_content: none) = {
    grid(
    columns: (1fr, auto),
    column-gutter: 0.7cm,
    {
      set align(left)
      left_content
    },
    {
      set align(right)
      right_content
    }
  )
}

// Entry for education.
#let education_entry(degree, university, degree_title: none, description: none, start_date: none, end_date: none, location: none) = {
  block(above: entry_space, below: entry_space, breakable: false)[
    #cv_entry(
      left_content: [
        *#if degree_title != none { degree_title + " " }#degree* \
        #university
      ],
      right_content: [
        #format_date(start_date: start_date, end_date: end_date)
        #if location != none { [\ #format_location(location)] }
      ],
    )
    #if description != none {
      block(above: body_space, below: 0pt)[#description]
    }
  ]
}

// Entry for work.
#let work_entry(role, company, department: none, tasks: none, start_date: none, end_date: none, location: none) = {
  block(above: entry_space, below: entry_space, breakable: false)[
    #cv_entry(
      left_content: [
        *#role*
        #if company != none { [\ #company] }
      ],
      right_content: [
        #format_date(start_date: start_date, end_date: end_date)
        #if location != none { [\ #format_location(location)] }
      ],
    )
    #if department != none { [#department] }
    #if tasks != none {
      block(above: body_space, below: 0pt)[#list(..tasks)]
    }
  ]
}

// Entry for skills
#let skill_entry(category, skills) = {
  [== #category]

  let cell = rect.with(radius: 5pt, inset: (top: 4pt, bottom: 4pt, left: 5pt, right: 5pt))
  let boxes = for skill in skills {(box(cell(skill)),)}

  {boxes.join("  ")}
}

// Set name and contact data and format headings
#let template(name, contact_data, color, doc) = {
  set document(title: name + " - Academic CV", author: name)
  set page(paper: "a4", margin: 1.5cm)
  set text(11pt, hyphenate: false)
  set par(justify: false, leading: 0.45em, spacing: body_space)
  set list(indent: 0pt, body-indent: 0.8em, spacing: 0.6em)
  align(center, stack(
    dir: ttb,
    spacing: 0.45em,
    smallcaps(text(size: 26pt, fill: color)[#name]),
    text(size: 10.5pt)[#{
      if contact_data != none and contact_data.len() > 0 {
        let elements = for el in contact_data {
          (if el.link == none { box(el.icon) + " " + el.display } else { link(el.link)[#{box(el.icon) + " " + el.display}] },)
        }
        elements.join(" | ")
      }
    }],
  ))

  show heading.where(level: 1): i => {
    set align(left)
    let title = smallcaps(i.body)

    block(above: 1.1em, below: 0.65em, sticky: true)[
      #set text(weight: "regular", size: 12.5pt, fill: color)
      #stack(
        dir: ttb,
        spacing: 1.2mm,
        title,
        line(length: 100%, stroke: color + 0.5pt),
      )
    ]
  }

  show heading.where(level: 2): i => {
    set align(left)
    let title = smallcaps(i.body)
    set block(above: 0.8em)
    set text(weight: "light", size: 1.1em, fill: color)
    title
  }

  doc
}
