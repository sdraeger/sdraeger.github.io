---
layout: page
title: DDALAB
description: A desktop application for neurophysiological data analysis using Delay Differential Analysis
importance: 1
category: research
github: https://github.com/sdraeger/DDALAB
---

DDALAB is a cross-platform desktop application for analyzing neurophysiological data using Delay Differential Analysis (DDA). All data processing happens locally on your machine for maximum privacy.
Besides being useful for physiological applications, DDALAB can serve as a general-purpose time series visualization and annotation tool.

## Features

- **Multi-format support**: EDF, FIFF, ASCII/CSV, BrainVision, EEGLAB files
- **BIDS compatibility**: Native Brain Imaging Data Structure support
- **OpenNeuro integration**: Direct dataset browsing and downloads
- **Real-time analysis**: Interactive heatmaps and time-series visualization
- **Analysis history**: Persistent storage via SQLite

## Tech Stack

**Frontend**: Tauri v2, React 18, TypeScript, Next.js 14, ECharts

**Backend**: Rust, Axum, SQLite, custom `dda-rs` package for DDA

<a href="https://github.com/sdraeger/DDALAB" class="btn btn-primary">View on GitHub</a>
