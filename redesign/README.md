# VoiceDeck Build System

This directory contains the HTML slide source and build pipeline for generating PowerPoint presentations.

> **Full documentation:** See the [root README](../README.md) for complete project information.

## Quick Start

```bash
npm install
npm run build:workflow    # 13-slide workflow deck
npm run build:core        # 36-slide core presentation
npm run build:full        # 82-slide extended deck
```

## Directory Structure

```
redesign/
├── src/
│   ├── slides/           # Session 1 slides (82 HTML files)
│   ├── slides-workflow/  # Bonus workflow deck (13 HTML files)
│   └── supplements/      # Workshop exercise handouts
├── scripts/              # Build scripts
├── lib/                  # HTML to PowerPoint conversion library
├── design-system/        # Design tokens and theme files
├── docs/                 # Planning and research docs
└── dist/                 # Generated PowerPoint files
```

## Build Commands

| Command | Output |
|---------|--------|
| `npm run build:core` | `dist/Voice_AI_Workflows_Part1_CORE.pptx` |
| `npm run build:full` | `dist/Voice_AI_Workflows_Part1_FULL.pptx` |
| `npm run build:workflow` | `dist/Voice_First_Project_Workflow.pptx` |
| `npm run build` | All decks + PDF supplements |
| `npm run clean` | Remove generated files |
