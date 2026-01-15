# VoiceDeck: Voice-Driven AI Development Workflows

Training materials for Austin Public Health's Voice-Driven AI Development Workflows series.

---

## Presentation Decks

| Deck | Slides | Purpose | Build Command |
|------|--------|---------|---------------|
| **[Core Deck](dist/Voice_AI_Workflows_Part1_CORE.pptx)** | 36 | Session 1 main presentation | `npm run build:core` |
| **[Full Deck](dist/Voice_AI_Workflows_Part1_FULL.pptx)** | 82 | Extended reference version | `npm run build:full` |
| **[Workflow Deck](dist/Voice_First_Project_Workflow.pptx)** | 13 | Bonus: 10-phase project structure | `npm run build:workflow` |

> **Note:** Run `npm install && npm run build:core` to generate the PowerPoint files locally.

---

## About This Project

This repository was built almost entirely through voice-driven development—the same workflow it teaches. Every slide, script, and documentation file was created by speaking to an AI coding agent (Claude Code) using SuperWhisper for voice input.

The irony isn't lost on us: we used voice-driven AI development to build training materials about voice-driven AI development. This project is both the curriculum and the proof of concept.

### How It Was Built

The development process followed a pattern that's now documented in the **Voice-First Project Workflow** bonus deck:

1. **Voice brainstorming** — Speaking ideas, getting pushback, refining concepts
2. **Iterative slide creation** — Describing layouts verbally, reviewing renders, adjusting
3. **Design system emergence** — Patterns crystallized through conversation, then codified
4. **Continuous commits** — Every conversation checkpoint saved to git
5. **Verbal code review** — "This slide is too cramped, give me more breathing room"

The result: 82 slides, 8 workshop exercises, a full build pipeline, and this documentation—created in approximately 12 hours of voice-driven sessions.

---

## Workshop Series Roadmap

This is a 3-part training series teaching voice-driven development workflows for government technologists.

### Session 1: Foundation (Current)
**Voice Tools & SuperWhisper Configuration**

*90 minutes — Setup, introduction, and hands-on configuration*

- Voice tool landscape (SuperWhisper vs. Wispr Flow)
- Security and PHI considerations for government use
- SuperWhisper deep dive: local models, custom modes, vocabulary
- Workshop: Building 5 custom modes for your workflow
- Live demonstration: Context switching in action

**Outcome:** Participants leave with SuperWhisper configured and custom modes ready for daily use.

### Session 2: Application (February)
**Voice-Driven Agent Development**

*Building a complete SaaS tool from idea to deployment*

- End-to-end project workflow using voice
- Working with AI coding agents (Claude Code, Cursor, etc.)
- The prompt enrichment pattern: voice → structured specs
- Live build: Simple content aggregator application
- Deployment to cloud platforms via CLI

**Outcome:** Participants experience the full cycle of voice-driven development on a real project.

### Session 3: Advanced Patterns (March)
**Agent-to-Agent Workflows**

*Complex systems, sub-agents, and long-horizon tasks*

- Multi-agent architectures
- Task decomposition and delegation patterns
- Building compound AI systems with voice orchestration
- Long-running autonomous workflows
- When to intervene vs. let agents run

**Outcome:** Participants understand advanced agentic patterns and when to apply them.

---

## Repository Structure

```
voicedeck/
├── src/
│   ├── slides/              # Session 1 slides (82 HTML files)
│   ├── slides-workflow/     # Bonus workflow deck (13 HTML files)
│   ├── supplements/         # Workshop exercise handouts
│   └── shared.css           # Shared slide styles
├── lib/
│   └── html2pptx/           # HTML to PowerPoint conversion library
├── scripts/
│   ├── build.sh             # Master build script
│   ├── convert.js           # Full deck converter
│   ├── convert-core.js      # Core deck converter
│   ├── convert-workflow.js  # Workflow deck converter
│   └── build-workflow.sh    # Standalone workflow build
├── docs/
│   ├── DECK_ORDER.md        # Slide sequencing notes
│   ├── PLAN.md              # Project planning
│   └── ...                  # Design decisions, research
├── design-system/           # Design tokens and theme files
├── dist/                    # Generated PowerPoint files (gitignored)
├── CHANGELOG.md             # Version history
└── package.json
```

---

## Quick Start

### Prerequisites

- **Node.js 18+** — Required for slide conversion
- **Playwright** — Installed automatically via npm

### Build Commands

```bash
# Install dependencies
npm install

# Build the 36-slide core presentation
npm run build:core

# Build the full 82-slide reference deck
npm run build:full

# Build the 13-slide workflow bonus deck
npm run build:workflow

# Build everything including PDF supplements
npm run build

# Clean generated files
npm run clean
```

### Output

Generated files appear in `dist/`:
- `Voice_AI_Workflows_Part1_CORE.pptx` — Main presentation
- `Voice_AI_Workflows_Part1_FULL.pptx` — Extended version
- `Voice_First_Project_Workflow.pptx` — Bonus workflow deck
- `supplements/*.pdf` — Workshop handouts

---

## Session 1 Content

### Core Deck (36 slides, 90 minutes)

| Section | Slides | Time | Content |
|---------|--------|------|---------|
| Opening | 5 | 10 min | Series overview, why voice-driven development |
| Voice Tools | 8 | 10 min | SuperWhisper vs. Wispr Flow, decision framework |
| Security & PHI | 4 | 10 min | Data flow, PHI handling, compliance checklist |
| SuperWhisper Deep Dive | 6 | 15 min | Setup, custom modes, AI instructions |
| Custom Mode Workshop | 6 | 25 min | 5 practical modes built live |
| Live Demo | 3 | 10 min | Context switching demonstration |
| Closing | 4 | 10 min | Pre-work for Session 2, Q&A |

### Workshop Supplements

Hands-on exercises available in `src/supplements/`:

1. **Model Cheat Sheet** — Voice model comparison (local vs. cloud)
2. **Mode Cheat Sheet** — SuperWhisper mode quick reference
3. **Local Email Mode** — PHI-safe email dictation exercise
4. **Cloud Email Mode** — Wispr Flow formatting exercise
5. **Prompt Enrichment** — Structuring prompts for AI tools
6. **Teams Chat Mode** — Workplace messaging optimization
7. **Custom Vocabulary** — Recognition tuning for your domain
8. **Agentic Handoff** — Structured task specs for AI agents

---

## Bonus: Voice-First Project Workflow

The `slides-workflow/` directory contains a standalone 13-slide deck documenting the 10-phase workflow used to build this project:

| Phase | Focus |
|-------|-------|
| 1. GitHub Repo | Version control foundation |
| 2. Brainstorming | Divergent thinking with AI |
| 3. Deep Research | Technical, market, reference analysis |
| 4. Planning Session | Deliverables and sequencing |
| 5. MVP Prototype | Fast iteration, learning through building |
| 6. Documentation | Capturing patterns and standards |
| 7. PRD Creation | Definitive specification |
| 8. Agentic Iteration | Autonomous execution |
| 9. Review Cycle | Verbal feedback loops |
| 10. Deployment | CLI-driven cloud deployment |

This deck works as supplementary material for Session 2 or as a standalone reference.

---

## Design System

The slide design uses a consistent visual language:

- **Dimensions:** 960×540px (16:9 aspect ratio)
- **Primary color:** `#1a1f2e` (dark navy)
- **Accent color:** `#c9a227` (gold)
- **Layout:** Two-column with dark left panel
- **Typography:** Georgia serif for headings, system sans for body

Design tokens are defined in `design-system/` and CSS variables in each slide.

---

## License

MIT License — See [LICENSE](LICENSE) for details.

---

## Contributing

This is training material for Austin Public Health. For updates, corrections, or questions about the voice-driven development workflow, contact the AI Technology Lead.

---

*Built with voice. Shipped with confidence.*
