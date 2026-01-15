# Voice Control: Voice-Driven AI Development Workflows

Training materials for Austin Public Health's Voice-Driven AI Development Workflows series.

---

## Session 1 Presentation (January 2025)

**[Voice_AI_Workflows_Part1_Final.pptx](Voice_AI_Workflows_Part1_Final.pptx)** — Main presentation deck for today's class

### Supplemental Decks

| Deck | Description |
|------|-------------|
| [Claude Code Setup Guide](dist/Claude_Code_Setup_Guide.pptx) | 12-slide guide to Claude Code configuration |
| [Cursor Azure Setup Guide](dist/Cursor_Azure_Setup_Guide.pptx) | 10-slide guide to Cursor with Azure OpenAI |
| [VS Code AI Ecosystem Guide](dist/VSCode_AI_Ecosystem_Guide.pptx) | 12-slide overview of VS Code AI extensions |
| [Voice-First Project Workflow](dist/Voice_First_Project_Workflow.pptx) | 13-slide bonus: 10-phase project structure |

---

## Worksheets & Exercises (Complete Before Session 2)

These hands-on exercises will help you build your voice-driven workflow. **Please complete before the next session.**

### Reference Cheat Sheets

| Resource | Description |
|----------|-------------|
| [Model Cheat Sheet](dist/supplements/01_Model_Cheat_Sheet.pdf) | Voice model comparison — local vs. cloud, when to use each |
| [Mode Cheat Sheet](dist/supplements/02_Mode_Cheat_Sheet.pdf) | SuperWhisper mode quick reference — all settings explained |

### Hands-On Exercises

| Exercise | What You'll Build |
|----------|-------------------|
| [Exercise 1: Local Email Mode](dist/supplements/03_Exercise_Local_Email_Mode.pdf) | Create a PHI-safe email dictation mode using local models |
| [Exercise 2: Cloud Email Mode](dist/supplements/04_Exercise_Cloud_Email_Mode.pdf) | Build a cloud-powered email mode with Wispr Flow formatting |
| [Exercise 3: Prompt Enrichment](dist/supplements/05_Exercise_Prompt_Enrichment.pdf) | Structure prompts for AI tools — get better outputs |
| [Exercise 4: Teams Chat Mode](dist/supplements/06_Exercise_Teams_Chat_Mode.pdf) | Optimize voice input for workplace messaging |
| [Exercise 5: Custom Vocabulary](dist/supplements/07_Exercise_Custom_Vocabulary.pdf) | Tune recognition for your domain-specific terms |
| [Exercise 6: Agentic Handoff](dist/supplements/08_Exercise_Agentic_Handoff.pdf) | Create structured task specs for AI coding agents |

---

## Quick Start

```bash
npm install
npm run build:workflow    # Build the 13-slide workflow deck
npm run build:core        # Build the 36-slide core presentation
npm run build:full        # Build the 82-slide extended deck
```

Generated PowerPoint files appear in `dist/`.

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
├── README.md                    # This file
├── CHANGELOG.md                 # Version history
├── LICENSE                      # MIT License
├── package.json                 # Node.js dependencies
│
├── Voice_AI_Workflows_Part1_Final.pptx   # Main presentation
├── Voice-Driven AI Toolkit Research.pdf  # Research reference
├── Voice_Tools_Training_Public_Health.docx
│
├── src/                         # HTML slide sources
│   ├── slides/                  # Session 1 slides (82 files)
│   ├── slides-workflow/         # Workflow deck (13 files)
│   ├── slides-claude-code/      # Claude Code deck (12 files)
│   ├── slides-cursor/           # Cursor deck (10 files)
│   ├── slides-vscode/           # VS Code deck (12 files)
│   └── supplements/             # Exercise HTML files
│
├── scripts/                     # Build scripts
├── lib/                         # HTML to PowerPoint library
├── design-system/               # Design tokens and themes
├── docs/                        # Planning documentation
│
└── dist/                        # Generated output
    ├── *.pptx                   # Supplemental decks
    └── supplements/*.pdf        # Exercise PDFs
```

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
