# Voice-Driven AI Development Workflows - Part 1 Presentation Plan

## Overview
Comprehensive training material for Austin Public Health staff on voice-driven AI development workflows.

## Current Status: ✅ DECK TRIAGE COMPLETE

### Summary
- **Total slides created:** 81
- **Core deck:** 35 slides (~90 minutes)
- **Backup slides:** 46 slides (reference/Part 2)
- **Supplementary materials:** 7 PDF-ready worksheets

---

## CORE DECK (35 Slides, ~90 Minutes)

### Presentation Flow

| Section | Slides | Time | Focus |
|---------|--------|------|-------|
| Opening | 5 | 10 min | Why voice-driven development |
| Voice Tools Landscape | 8 | 10 min | SuperWhisper vs alternatives |
| Security & PHI | 4 | 10 min | Data flow, PHI guidelines |
| SuperWhisper Deep Dive | 6 | 15 min | Setup & configuration |
| Custom Mode Workshop | 5 | 20 min | Build 4 practical modes |
| Live Demonstration | 3 | 10 min | Context switching demo |
| Closing | 4 | 15 min | Next steps & Q&A |

### Slide Order (see DECK_ORDER.md for full details)

**Opening:** 01, 02, 03, 04, 06
**Voice Tools:** 07, 08, 09, 17, 19, 23, 25, 81
**Security:** 58, 59, 60, 62
**Setup:** 67, 68, 69, 70, 71, 72
**Workshop:** 73, 74, 75, 76, 77
**Demo:** 79, 80, 78
**Closing:** 63, 64, 65, 66

---

## BACKUP SLIDES (46 Slides)

Preserved for reference or Part 2:

| Category | Slides | Topic |
|----------|--------|-------|
| Extended Voice Tools | 05, 10-16, 18, 20-22, 24 | Installation guides, detailed features |
| AI Coding Assistants | 26-37 | Claude Code, VS Code, Cursor |
| Enterprise Config | 38-44 | Azure, Palantir, Ollama |
| CLI Deep Dive | 45-51 | Slash commands, hooks, MCP |
| CI/CD Integration | 52-54 | GitHub Actions, Copilot Enterprise |
| Voice Workflow | 55-57 | End-to-end flow summary |
| Security Detail | 61 | Common mistakes |

---

## SUPPLEMENTARY MATERIALS

Ready for PDF conversion in `supplements/` folder:

### Quick Reference (Cheat Sheets)
1. **Model Cheat Sheet** - All SuperWhisper models with ratings
2. **Mode Cheat Sheet** - Modes, contexts, switching methods

### Hands-On Exercises (2-3 pages each)
3. **Exercise: Local Email Mode** - PHI-safe email dictation
4. **Exercise: Cloud Email Mode** - Claude Sonnet-powered version
5. **Exercise: Coding Mode** - VS Code assistant mode
6. **Exercise: Teams Chat Mode** - @mention handling
7. **Exercise: Custom Vocabulary** - Domain-specific terms

**To convert to PDF:** Open in browser → Print → Save as PDF

---

## FILES SUMMARY

### New Slides Created This Session (15)
- slide67.html - slide81.html

### Key Documentation
| File | Purpose |
|------|---------|
| DECK_ORDER.md | Core vs backup slide mapping |
| DECK_TRIAGE.md | 90-minute triage analysis |
| RESEARCH_SUPERWHISPER.md | Mode & context documentation |
| RESEARCH_WORKFLOWS.md | Application workflow patterns |
| ATTENDEE_RESOURCES.md | Pre-built prompts & configs |

### Conversion Scripts
| Script | Output |
|--------|--------|
| convert.js | Full 81-slide deck |
| convert-core.js | Core 35-slide deck |

### Working PPTX Files
| File | Description |
|------|-------------|
| Voice_AI_Workflows_Part1_Latest.pptx | Best complete version (1.1MB) |
| Voice_AI_Workflows_Part1_v2.pptx | Earlier complete version (2.8MB) |

---

## COMPLETED TASKS ✅

- [x] Corrected all Wispr Flow inaccuracies (cloud-only distinction)
- [x] Analyzed original 66-slide deck structure
- [x] Researched SuperWhisper documentation & best practices
- [x] Created SuperWhisper Deep Dive slides (67-72)
- [x] Created Custom Mode Workshop slides (73-78)
- [x] Created Live Demonstrations slides (79-80)
- [x] Created transition slide "Why SuperWhisper" (81)
- [x] Created 7 supplementary worksheet materials
- [x] Updated agenda slide (06) for 90-minute flow
- [x] Created DECK_ORDER.md with complete slide mapping
- [x] Created convert-core.js for trimmed presentation
- [x] Updated speaker notes for all new slides
- [x] Created supplements/README.md with conversion instructions

---

## TO DO (For User)

1. **Convert supplements to PDF** - Open each HTML in browser, Print → Save as PDF
2. **Build final PPTX** - Run `node convert-core.js` in an environment with working Playwright
3. **Visual review** - Check new slides in PowerPoint
4. **Distribute worksheets** - Print/email exercise PDFs to attendees

---

## Learning Arc (Achieved)

The trimmed 90-minute presentation achieves these objectives:

1. ✅ **Understand WHY** voice-driven development matters (Opening)
2. ✅ **Know the tools** and their privacy implications (Voice Tools + Security)
3. ✅ **Make an informed choice** → SuperWhisper for PHI safety (Comparison + Transition)
4. ✅ **Configure SuperWhisper** for their workflow (Deep Dive)
5. ✅ **Leave with working modes** they built themselves (Workshop)
