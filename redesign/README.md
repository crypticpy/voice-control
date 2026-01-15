# VoiceDeck: Voice-Driven AI Development Workflows

Training materials for Austin Public Health's Voice-Driven AI Development Workflows series.

## Overview

This repository contains HTML slide decks, workshop exercises, and build tools for a 3-part training series on voice-driven development workflows using SuperWhisper, Wispr Flow, and Claude Code.

## Directory Structure

```
voicedeck/
├── src/
│   ├── slides/          # HTML slide files (slide01.html - slide82.html)
│   ├── supplements/     # Workshop exercise handouts (HTML)
│   └── shared.css       # Shared styles for slides
├── lib/
│   └── html2pptx/       # HTML to PowerPoint conversion library
├── scripts/
│   ├── build.sh         # Master build script
│   ├── convert.js       # Full deck converter (82 slides)
│   ├── convert-core.js  # Core deck converter (36 slides)
│   └── create-all-slides.js  # Slide generation helpers
├── docs/
│   ├── DECK_ORDER.md    # Slide ordering and timing
│   ├── PLAN.md          # Project planning notes
│   └── ...              # Other documentation
├── design-system/       # Design tokens and theme files
├── dist/                # Generated output (gitignored)
│   ├── *.pptx           # Generated PowerPoint files
│   └── supplements/     # Generated PDFs
└── package.json
```

## Prerequisites

- **Node.js 18+** - Required for slide conversion
- **Python 3.8+** - Optional, for PDF generation
- **Playwright** - Installed automatically via npm

## Quick Start

```bash
# Install dependencies
npm install

# Build everything (slides + PDFs)
npm run build

# Build only the 36-slide core deck
npm run build:core

# Build the full 82-slide deck
npm run build:full

# Clean generated files
npm run clean
```

## Build Options

The build script supports several modes:

| Command | Description |
|---------|-------------|
| `npm run build` | Build all presentations and PDFs |
| `npm run build:core` | Build only the 36-slide core deck |
| `npm run build:full` | Build only the 82-slide full deck |
| `npm run build:pdfs` | Convert supplement HTML to PDFs |
| `npm run clean` | Remove all generated files |

You can also run the build script directly with flags:

```bash
./scripts/build.sh --help
./scripts/build.sh --core-only
./scripts/build.sh --slides-only
```

## Slide Decks

### Core Deck (36 slides)
Focused 90-minute presentation covering:
- Voice tool overview (SuperWhisper, Wispr Flow)
- Security and PHI considerations
- SuperWhisper deep dive and configuration
- Custom mode workshop
- Live demonstrations

### Full Deck (82 slides)
Comprehensive version including:
- All core content
- Extended tool comparisons
- Enterprise configuration (Azure, Ollama)
- CI/CD integration patterns
- Additional reference material

## Workshop Supplements

The `src/supplements/` directory contains hands-on exercise guides:

1. **Model Cheat Sheet** - Voice model comparison guide
2. **Mode Cheat Sheet** - SuperWhisper mode quick reference
3. **Local Email Mode Exercise** - PHI-safe email dictation
4. **Cloud Email Mode Exercise** - Wispr Flow email formatting
5. **Prompt Enrichment Exercise** - AI prompt preparation
6. **Teams Chat Mode Exercise** - Workplace messaging
7. **Custom Vocabulary Exercise** - Recognition tuning
8. **Agentic Handoff Exercise** - Structured task specs

## License

MIT License - See LICENSE file for details.

## Contributing

This is training material for Austin Public Health. For updates or corrections, please contact the AI Technology Lead.
