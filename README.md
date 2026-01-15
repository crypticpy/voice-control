# Voice Control: Voice-Driven AI Development Workflows

Training materials for Austin Public Health's Voice-Driven AI Development Workflows series.

---

## Quick Start

```bash
cd redesign
npm install
npm run build:workflow    # Build the 13-slide workflow deck
npm run build:core        # Build the 36-slide core presentation
npm run build:full        # Build the 82-slide extended deck
```

Generated PowerPoint files appear in `redesign/dist/`.

---

## Presentation Decks

| Deck | Slides | Purpose | Build Command |
|------|--------|---------|---------------|
| **Core Deck** | 36 | Session 1 main presentation | `npm run build:core` |
| **Full Deck** | 82 | Extended reference version | `npm run build:full` |
| **Workflow Deck** | 13 | Bonus: 10-phase project structure | `npm run build:workflow` |

---

## About This Project

This repository was built almost entirely through voice-driven development—the same workflow it teaches. Every slide, script, and documentation file was created by speaking to an AI coding agent (Claude Code) using SuperWhisper for voice input.

### How It Was Built

1. **Voice brainstorming** — Speaking ideas, getting pushback, refining concepts
2. **Iterative slide creation** — Describing layouts verbally, reviewing renders, adjusting
3. **Design system emergence** — Patterns crystallized through conversation, then codified
4. **Continuous commits** — Every conversation checkpoint saved to git
5. **Verbal code review** — "This slide is too cramped, give me more breathing room"

---

## Workshop Series Roadmap

This is a 3-part training series teaching voice-driven development workflows for government technologists.

### Session 1: Foundation (Current)
**Voice Tools & SuperWhisper Configuration** — 90 minutes

- Voice tool landscape (SuperWhisper vs. Wispr Flow)
- Security and PHI considerations for government use
- SuperWhisper deep dive: local models, custom modes, vocabulary
- Workshop: Building 5 custom modes for your workflow

### Session 2: Application (February)
**Voice-Driven Agent Development**

- End-to-end project workflow using voice
- Working with AI coding agents (Claude Code, Cursor, etc.)
- Live build: Simple content aggregator application

### Session 3: Advanced Patterns (March)
**Agent-to-Agent Workflows**

- Multi-agent architectures
- Task decomposition and delegation patterns
- Long-running autonomous workflows

---

## Repository Structure

```
voice-control/
├── README.md                 # This file
├── CHANGELOG.md              # Version history
├── LICENSE                   # MIT License
├── redesign/                 # Build system and source files
│   ├── src/
│   │   ├── slides/           # Session 1 slides (82 HTML files)
│   │   ├── slides-workflow/  # Bonus workflow deck (13 HTML files)
│   │   └── supplements/      # Workshop exercise handouts
│   ├── lib/                  # HTML to PowerPoint conversion library
│   ├── scripts/              # Build scripts
│   ├── design-system/        # Design tokens and theme files
│   ├── docs/                 # Planning and research docs
│   ├── dist/                 # Generated PowerPoint files
│   └── package.json          # Node.js dependencies
├── unpacked/                 # Reference: unpacked PPTX structure
└── *.pptx                    # Legacy/reference presentations
```

---

## Workshop Supplements

Hands-on exercises available in `redesign/src/supplements/`:

1. **Model Cheat Sheet** — Voice model comparison (local vs. cloud)
2. **Mode Cheat Sheet** — SuperWhisper mode quick reference
3. **Local Email Mode** — PHI-safe email dictation exercise
4. **Cloud Email Mode** — Wispr Flow formatting exercise
5. **Prompt Enrichment** — Structuring prompts for AI tools
6. **Teams Chat Mode** — Workplace messaging optimization
7. **Custom Vocabulary** — Recognition tuning for your domain
8. **Agentic Handoff** — Structured task specs for AI agents

---

## Design System

The slide design uses a consistent visual language:

- **Dimensions:** 960×540px (16:9 aspect ratio)
- **Primary color:** `#1a1f2e` (dark navy)
- **Accent color:** `#c9a227` (gold)
- **Typography:** Georgia serif for headings, system sans for body

---

## Prerequisites

- **Node.js 18+** — Required for slide conversion
- **Playwright** — Installed automatically via npm

---

## License

MIT License — See [LICENSE](LICENSE) for details.

---

## Contributing

This is training material for Austin Public Health. For updates, corrections, or questions about the voice-driven development workflow, contact the AI Technology Lead.

---

*Built with voice. Shipped with confidence.*
