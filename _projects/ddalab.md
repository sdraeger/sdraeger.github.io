---
title: DDALAB
summary: A desktop application for neurophysiological data analysis using Delay Differential Analysis.
screenshot: /assets/img/ddalab-workspace.png
screenshot_alt: DDALAB waveform workspace showing eight channels from the screenprint EDF recording and channel-selection controls.
screenshot_caption: The Qt desktop interface displaying the screenprint EDF example, with channel selection and a ten-second waveform view.
order: 10
featured: true
status: Research software
tags:
  - Neurophysiology
  - Time-series analysis
links:
  - label: GitHub
    url: https://github.com/sdraeger/DDALAB
---

DDALAB brings data import, Delay Differential Analysis (DDA), and interactive visualization into a desktop workspace for neurophysiological time series. I led its development, from the initial prototype to the Python/Qt interface and Rust-backed analysis workflows, incorporating feedback from researchers at the Salk Institute.

Analysis runs locally by default. Researchers can explicitly submit jobs to the Neuroscience Gateway (NSG) when remote computation is needed.

## Features

- Import EDF, FIFF, ASCII/CSV, BrainVision, and EEGLAB recordings, including BIDS-organized datasets.
- Browse and download public datasets through OpenNeuro and NEMAR.
- Inspect waveforms, select channels and time intervals, and visualize DDA results.
- Retain analysis settings and results in a local SQLite history for reproducible workflows.
- Use the desktop interface or Python command-line tools with the Rust `dda-rs` computation backend.

## Technology

The desktop application uses Python and PySide6, with Qt Quick/QML for the interface and visualization. Rust provides the DDA computation backend, and SQLite stores local analysis records.
