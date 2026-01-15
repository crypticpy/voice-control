# Changelog

All notable changes to VoiceDeck will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-15

### Added

#### Presentation Decks
- **Core Deck** (36 slides) — Focused 90-minute presentation for Session 1
- **Full Deck** (82 slides) — Extended reference version with additional material
- **Workflow Deck** (13 slides) — Bonus deck: "Structuring Projects for Voice-First AI Development"

#### Session 1 Content
- Voice tool landscape coverage (SuperWhisper, Wispr Flow)
- Security and PHI handling guidelines for government use
- SuperWhisper deep dive: local models, custom modes, AI instructions
- Custom mode workshop with 5 practical examples:
  - Prompt Enrichment Mode
  - Microsoft Teams Chat Mode
  - Professional Email Mode
  - Claude Code Terminal Mode
  - Agentic Handoff Mode
- Live demonstration scripts for context switching

#### Workshop Supplements
- 8 hands-on exercise guides (HTML format)
- Model comparison cheat sheet
- Mode configuration quick reference
- Step-by-step exercises for each custom mode

#### Build System
- HTML to PowerPoint conversion pipeline using Playwright + pptxgenjs
- Modular conversion scripts (core, full, workflow)
- PDF generation for supplement materials
- Master build script with multiple modes

#### Documentation
- Comprehensive README with series roadmap
- Design system documentation
- Slide ordering and timing guides

### Technical Details
- 960×540px slide dimensions (16:9 aspect ratio)
- Consistent design system with CSS custom properties
- Speaker notes embedded in all conversion scripts
- Git-based workflow with frequent commits

---

## Development Notes

This release represents approximately 12 hours of voice-driven development sessions. The entire project—slides, scripts, documentation—was created by speaking to an AI coding agent (Claude Code) using SuperWhisper for voice input.

Key development milestones:
1. Initial slide structure and design system
2. Content creation for all 82 slides
3. Build pipeline development
4. Workshop supplement creation
5. Directory restructure for GitHub readiness
6. Bonus workflow deck creation
7. Documentation and release preparation

---

## Upcoming

### [1.1.0] - Session 2 (February 2025)
- Voice-driven agent development materials
- Live build project: Content aggregator application
- Deployment workflow documentation

### [1.2.0] - Session 3 (March 2025)
- Agent-to-agent workflow patterns
- Multi-agent architecture guides
- Long-horizon task management
