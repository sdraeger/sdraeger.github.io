#import "simplecv.typ": template, education_entry, work_entry

#set text(font: "New Computer Modern")
#set list(marker: [--])

#let extended = false

#let fa-symbol(font, code) = text(font: font, size: 8pt)[#code]
#let fa-envelope() = fa-symbol("Font Awesome 6 Free Solid", "\u{f0e0}")
#let fa-globe() = fa-symbol("Font Awesome 6 Free Solid", "\u{f0ac}")
#let fa-icon(name, fa-set: none) = {
  if name == "github" {
    fa-symbol("Font Awesome 6 Brands", "\u{f09b}")
  } else if name == "linkedin" {
    fa-symbol("Font Awesome 6 Brands", "\u{f08c}")
  }
}

#let color = black
#let name = "Simon Dräger"
#let email = "sfdraeger at gmail.com"
#let contact_data = (
  (
    "icon": fa-envelope(),
    "display": email,
    "link": none,
  ),
  (
    "icon": fa-icon("github", fa-set: "Brands"),
    "display": "sdraeger",
    "link": "https://github.com/sdraeger",
  ),
  (
    "icon": fa-symbol("Font Awesome 6 Free Solid", "\u{f19d}"),
    "display": "Google Scholar",
    "link": "https://scholar.google.com/citations?user=1BZNQv0AAAAJ&hl=en",
  ),
)

#if extended {
  contact_data.insert(
    1,
    (
      "icon": fa-globe(),
      "display": `snl.salk.edu/~sfdraeger`,
      "link": "https://snl.salk.edu/~sfdraeger/",
    ),
  )
}

#let UCD = "University of California, Davis"
#let Salk = "Salk Institute for Biological Studies"
#let HHU = "University of Düsseldorf"

#show: doc => template(name, contact_data, color, doc)

= Education

#education_entry(
  "Computer Science",
  UCD,
  degree_title: "M.S.",
  start_date: "Jan 2023",
  end_date: "Mar 2025",
  description: "GPA: 3.96/4.0. Research in machine learning and multimodal perception.",
  location: "Davis, CA, USA",
)

#education_entry(
  "Computer Science",
  HHU,
  degree_title: "B.Sc.",
  start_date: "Oct 2019",
  end_date: "Sep 2022",
  description: "Thesis grade: 1.0, highest possible grade.",
  location: "Düsseldorf, Germany",
)

= Selected Publications

- *S. Dräger.* #link("https://arxiv.org/abs/2606.18457")["Task-Restricted Symmetries in Recurrent Weight Space."] _ICML 2026 Workshop on Weight-Space Symmetries: from Foundations to Practical Applications._

- C. Lainscsek, P. Salami, *S. Dräger*, A. R. Bulsara, S. S. Cash, and T. J. Sejnowski. #link("https://arxiv.org/abs/2508.16733")["Causal Dynamic Resonance."] Accepted to the _Proceedings of the National Academy of Sciences (PNAS)_. Preprint: arXiv:2508.16733, 2025.

- X. Xiang, *S. Dräger*, and J. Zhang. #link("https://arxiv.org/abs/2311.03742")["3DifFusionDet: Diffusion Model for 3D Object Detection with Robust LiDAR-Camera Fusion."] _ICASSP 2026._

- X. Xiang, *S. Dräger*, and J. Zhang. #link("https://doi.org/10.1007/978-981-95-7084-3_31")["EffiPerception: A Plug-and-Play Efficiency Enhancement Framework for 2D and 3D Perception Models."] _PRICAI 2025._

- *S. Dräger* and J. Dunkelau. #link("https://arxiv.org/abs/2210.16003")["Evaluating the Impact of Loss Function Variation in Deep Learning for Classification."] Preprint: arXiv:2210.16003, 2022.

= Research Experience

#work_entry(
  "Jr Scientific Programmer",
  Salk,
  department: [Computational Neurobiology Laboratory, #box[Terrence Sejnowski]],
  start_date: "Apr 2025",
  end_date: "Present",
  tasks: (
    "Developed Schur-coordinate ablations of recurrent neural networks to identify which weight changes preserved memory and sequence generation across tasks and trained models. Authored the resulting ICML 2026 WSS workshop paper.",
    "Coauthored Causal Dynamic Resonance, accepted to PNAS, on identifying false causal links through noise perturbations, with evaluations on coupled dynamical systems and intracranial EEG.",
    "Led development of DDALAB, a Python/Qt/Rust application for nonlinear analysis of neurophysiological time series, integrating data import, analysis execution, interactive visualization, and reproducible analysis records.",
  ),
  location: "La Jolla, CA, USA",
)

#work_entry(
  "Visiting Scholar",
  Salk,
  department: [Computational Neurobiology Laboratory, #box[Terrence Sejnowski]],
  start_date: "Jun 2024",
  end_date: "Sep 2024",
  tasks: (
    "Built and presented the initial DDALAB prototype, turning analysis scripts into an application for data selection, computation, and visualization; refined the workflows through feedback from researchers.",
    "Mentored students in computational neurobiology, scientific programming, and data analysis.",
  ),
  location: "La Jolla, CA, USA",
)

#work_entry(
    "Graduate Student Researcher",
    UCD,
    department: "Supervisor: Jiawei Zhang",
    start_date: "Apr 2023",
    end_date: "Apr 2024",
    tasks: (
      "Developed training, evaluation, and ablation pipelines for diffusion-based 3D object detection and LiDAR-camera fusion in 3DifFusionDet (ICASSP 2026).",
      "Collaborated on model development and reproducible experiments for EffiPerception (PRICAI 2025), a framework for improving accuracy, speed, and memory trade-offs in 2D and 3D perception.",
    ),
    location: "Davis, CA, USA",
)

#pagebreak()

= Selected Research Software

#work_entry(
  [DDALAB],
  "Python, Qt, Rust",
  tasks: (
    [Developed a desktop application and command-line interface for Delay Differential Analysis (DDA), with electrophysiology file support, BIDS integration, waveform and result visualization, and analysis history. Integrated remote computation through the Neuroscience Gateway. #fa-icon("github") #link("https://github.com/sdraeger/DDALAB")[GitHub]],
  ),
)

#work_entry(
  "DelayDifferentialAnalysis.jl",
  "Julia",
  tasks: (
    [Developed a Julia package that exposes DDA through typed results and reusable analysis workflows. Implemented native CPU and CUDA-backed regression, interfaces to the established DDA binary, and resumable model and delay selection. #fa-icon("github") #link("https://github.com/sdraeger/DelayDifferentialAnalysis.jl")[GitHub]],
  ),
)

#work_entry(
  "dda-py",
  "Python",
  tasks: (
    [Developed a Python package for DDA on NumPy arrays and MNE recordings, with batch processing, BIDS workflows, pandas export, and plotting. Integrated native computation backends with Python result types and statistical comparisons. #fa-icon("github") #link("https://github.com/sdraeger/dda-py")[GitHub]],
  ),
)

= Teaching and Service

#work_entry(
  "Workshop Reviewer",
  "NeurIPS 2026",
  start_date: "2026",
  tasks: (
    "Interpretability as a Science; Interpretability for Discovery; Symmetry and Geometry in Neural Representations (NeurReps).",
  ),
)

#work_entry(
  "Workshop Organizer",
  "Delay Differential Analysis (DDA)",
  start_date: "Aug 2025",
  tasks: (
    [Organized a virtual workshop for 25 participants on DDA methods and software, and supported researchers learning DDALAB workflows. #link("https://snl.salk.edu/~claudia/DDALAB/workshop.html")[Workshop page]],
  ),
)

#work_entry(
  "Teaching Assistant",
  HHU,
  start_date: "Summer 2022",
  tasks: (
    "Developed course materials, exams, and problem sets for undergraduate Statistical Data Analysis; supported students through weekly office hours.",
  ),
  location: "Düsseldorf, Germany",
)

= Presentations

#work_entry(
  "Poster Presentation",
  "Dynamics Days",
  start_date: "2024",
  tasks: (
    "The Importance of Architecture Choice in Deep Learning for Climate Applications.",
  ),
  location: "Davis, CA, USA",
)

= Technical Skills

*Programming:* Python, Julia, Rust, C, TypeScript, JavaScript. \
*Scientific computing:* PyTorch, TensorFlow, scikit-learn, Hugging Face, NumPy, MNE; recurrent-network analysis, controlled ablations, nonlinear time-series analysis. \
*Research software:* Qt, FastAPI, Next.js, Docker, Git, SQLite, PostgreSQL, REST APIs, MinIO/S3-compatible storage.
