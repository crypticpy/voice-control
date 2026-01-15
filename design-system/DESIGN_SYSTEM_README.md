# Voice AI Course Design System
## Austin Public Health — Unified Design Language

**Version:** 2.0
**Last Updated:** January 2025

---

## Overview

This design system ensures visual and structural consistency across all Voice-Driven AI Development course materials:

- **Tutorial Worksheets** — Exercises, cheat sheets, guides
- **Slide Presentations** — PowerPoint decks for live sessions
- **Future Materials** — Any new content types

### Key Feature: Hot-Swappable Theming

All colors are defined as CSS custom properties (design tokens) that can be overridden for different branding contexts. To rebrand for another organization:

1. Keep the base CSS unchanged
2. Create a theme override file (see `themes/city-of-austin-theme.css`)
3. Override only the `--theme-*` variables

---

## Design System Files

```
/design-system/
├── DESIGN_SYSTEM_README.md         ← You are here
├── NARRATIVE_GUIDELINES.md         ← Voice, tone, writing patterns
│
├── TUTORIAL SYSTEM
│   ├── TUTORIAL_CONTENT_GUIDE.md   ← Content structure, visual patterns
│   ├── course-base.css             ← CSS implementation for tutorials
│   └── templates/
│       ├── exercise-template.html  ← Starting point for new exercises
│       └── cheatsheet-template.html← Starting point for reference sheets
│
├── PRESENTATION SYSTEM
│   ├── PRESENTATION_DESIGN_GUIDE.md    ← Slide layouts, typography
│   ├── SLIDE_DESIGN_LANGUAGE.md        ← Component library & patterns
│   ├── PRESENTATION_STYLE_PLAN.md      ← Refactoring plan & gap analysis
│   ├── slide-base.css                  ← CSS implementation for slides
│   └── themes/
│       └── city-of-austin-theme.css    ← Example theme override
```

### Document Purposes

| Document | Answers |
|----------|---------|
| **NARRATIVE_GUIDELINES.md** | How do we *write and speak* to learners? |
| **TUTORIAL_CONTENT_GUIDE.md** | How do we *structure* tutorial content? |
| **PRESENTATION_DESIGN_GUIDE.md** | How do we *design* slide layouts? |
| **SLIDE_DESIGN_LANGUAGE.md** | What *components* are available for slides? |
| **course-base.css** | How do we *implement* tutorial styles? |
| **slide-base.css** | How do we *implement* slide styles? |

---

## Quick Start: Creating New Content

### New Exercise Worksheet

1. Copy `templates/exercise-template.html`
2. Rename following convention: `NN_Exercise_Name.html`
3. Link to `course-base.css`
4. Replace placeholders (`{{TITLE}}`, etc.)
5. Follow structure in TUTORIAL_CONTENT_GUIDE.md
6. Test print output before publishing

### New Cheat Sheet / Reference

1. Copy `templates/cheatsheet-template.html`
2. Rename: `NN_Name_Cheat_Sheet.html`
3. Optimize for single-page print
4. Use decision cards and tables

### New Presentation Slides

1. Create `slideNN.html` in `/redesign/`
2. Reference `slide-base.css` OR use inline styles following design tokens
3. Follow layouts in PRESENTATION_DESIGN_GUIDE.md
4. Use components from SLIDE_DESIGN_LANGUAGE.md
5. Add to `convert.js` or `convert-core.js`
6. Include speaker notes

---

## Core Design Tokens

### Theme Colors (Hot-Swappable)

| Token | Default Value | Usage |
|-------|---------------|-------|
| `--theme-primary` | `#1a1f2e` | Primary backgrounds, headers |
| `--theme-primary-light` | `#2d3548` | Gradients |
| `--theme-accent` | `#c9a227` | Highlights, dividers, accents |
| `--theme-surface-light` | `#f7f8fa` | Light backgrounds |
| `--theme-surface-white` | `#ffffff` | Card backgrounds |
| `--theme-surface-dark` | `#252b3d` | Dark card backgrounds |
| `--theme-text-primary` | `#1a1f2e` | Primary text on light |
| `--theme-text-secondary` | `#6b7280` | Muted text |
| `--theme-text-inverse` | `#ffffff` | Text on dark |

### Semantic Colors (Fixed)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#059669` | Success, PHI-safe, local, beginner |
| `--color-warning` | `#f59e0b` | Caution, attention |
| `--color-danger` | `#dc2626` | Danger, cloud, PHI risk |
| `--color-info` | `#3b82f6` | Info, intermediate |
| `--color-advanced` | `#8b5cf6` | Advanced content |

### Typography

| Context | Font | Size |
|---------|------|------|
| Tutorial body | Inter (or sans-serif) | 14px |
| Tutorial headings | Inter | 18-28px |
| Tutorial code | JetBrains Mono | 13px |
| Slide titles | Georgia | 28-36px |
| Slide section titles | Georgia | 44-52px |
| Slide body | Arial | 11-14px |
| Slide code | Consolas | 8-14px |

### Difficulty Badges

- **Beginner** — `--color-success` (#059669) — Green
- **Intermediate** — `--color-info` (#3b82f6) — Blue
- **Advanced** — `--color-advanced` (#8b5cf6) — Purple

---

## Component Libraries

### Tutorial Components (course-base.css)

| Component | CSS Class | Usage |
|-----------|-----------|-------|
| Document Header | `.doc-header` | Top of every tutorial |
| Callout (Success) | `.callout--success` | PHI-safe notices |
| Callout (Warning) | `.callout--warning` | Cautions |
| Callout (Danger) | `.callout--danger` | Cloud/PHI risks |
| Callout (Info) | `.callout--info` | Informational |
| Step Card | `.step-card` | Numbered instructions |
| Code Block | `.code-block` | Prompt displays |
| Comparison | `.comparison` | Before/after |
| Badge | `.badge--*` | Labels |

### Slide Components (slide-base.css)

| Component | CSS Class | Usage |
|-----------|-----------|-------|
| Slide Base | `.slide--dark`, `.slide--light` | Layout backgrounds |
| Eyebrow | `.eyebrow` | Section identifiers |
| Slide Title | `.slide-title` | Main headings |
| Badge | `.badge--*` | FREE, PRO, LOCAL, etc. |
| Callout | `.callout--*` | Alerts, notes |
| Card | `.card--*` | Content containers |
| Step Number | `.step-number--accent` | Numbered steps |
| Code Block | `.code-block` | Prompt displays |
| Bottom Bar | `.bottom-bar--*` | Emphasis footers |
| Divider | `.divider-gold` | Gold accent lines |

See **SLIDE_DESIGN_LANGUAGE.md** for complete component documentation.

---

## Alignment Principles

The design system ensures tutorials and presentations feel like they belong together:

| Element | Tutorial | Presentation |
|---------|----------|--------------|
| Primary colors | Navy + Gold | Navy + Gold |
| Callout boxes | Left border, colored background | Left border, colored background |
| Code blocks | Navy background, gold tags | Navy background, gold tags |
| Step numbers | Rounded square badges | Square badges |
| Comparisons | Side-by-side with color coding | Side-by-side with color coding |
| Badges | Semantic colors | Semantic colors |

---

## Hot-Swapping Themes

### To Rebrand for a New Organization:

1. **Create a theme override file:**
   ```
   themes/new-organization-theme.css
   ```

2. **Override theme variables:**
   ```css
   :root {
     --theme-primary: #003366;      /* New primary color */
     --theme-accent: #ff6600;       /* New accent color */
     /* ... other overrides ... */
   }
   ```

3. **Import after base CSS:**
   ```html
   <link rel="stylesheet" href="slide-base.css">
   <link rel="stylesheet" href="themes/new-organization-theme.css">
   ```

### What to Override

| Override | When |
|----------|------|
| `--theme-primary` | Always (main brand color) |
| `--theme-accent` | Always (highlight color) |
| `--theme-surface-*` | If brand has specific background tones |
| `--theme-text-primary` | Usually matches `--theme-primary` |
| `--color-*` (semantic) | Rarely — only if brand requires specific status colors |

### Theme File Template

See `themes/city-of-austin-theme.css` for a complete example.

---

## Content Types Reference

### Tutorials (HTML → PDF)

| Type | Length | Purpose |
|------|--------|---------|
| **Cheat Sheet** | 1-2 pages | Quick reference during/after training |
| **Exercise** | 2-4 pages | Guided hands-on practice |
| **Guide** | 3-6 pages | Deeper concept explanation |
| **Quick Start** | 1 page | Minimum viable instructions |

### Presentations (HTML → PPTX)

| Type | Duration | Purpose |
|------|----------|---------|
| **Title Slide** | — | Opens deck |
| **Section Opener** | ~30 sec | Transitions between major topics |
| **Content Slide** | 2-3 min | Core teaching content |
| **Comparison** | 2-3 min | Decision support |
| **Demo Slide** | Varies | Support for live demonstration |
| **Code/Prompt** | 2-3 min | Technical reference |

---

## Checklist: Before Publishing

### Tutorials

- [ ] Uses course-base.css (linked, not inline copy)
- [ ] Uses CSS custom properties for colors
- [ ] Follows template structure
- [ ] Difficulty badge included (exercises)
- [ ] Time estimate in header
- [ ] Print test passed (no bad breaks)
- [ ] Color contrast meets WCAG AA
- [ ] Voice/tone matches NARRATIVE_GUIDELINES.md
- [ ] Action-first structure (not explanation-first)

### Presentations

- [ ] Uses design tokens from slide-base.css (or inline equivalents)
- [ ] Follows approved slide templates
- [ ] Uses components from SLIDE_DESIGN_LANGUAGE.md
- [ ] Speaker notes complete
- [ ] Tested on projector/display
- [ ] Related tutorials referenced in notes
- [ ] Animations minimal and consistent
- [ ] Narration follows voice guidelines
- [ ] Transitions signal connections between concepts

---

## Extending the System

### Adding New Colors

1. Add CSS variable to both `course-base.css` and `slide-base.css` `:root`
2. Use semantic naming (`--color-*` for fixed, `--theme-*` for swappable)
3. Document in relevant guides
4. Update this README

### Adding New Components

1. Design for both screen and print
2. Add CSS class to appropriate CSS file
3. Document in TUTORIAL_CONTENT_GUIDE.md or SLIDE_DESIGN_LANGUAGE.md
4. Add to relevant template files
5. Test across all contexts

### Creating New Document Types

1. Determine if existing template can adapt
2. If not, create new template in `/templates/`
3. Document structure in appropriate guide
4. Add to file naming conventions

---

## File Locations

```
/VoiceDeck/
├── redesign/
│   ├── design-system/              ← This folder
│   │   ├── DESIGN_SYSTEM_README.md
│   │   ├── NARRATIVE_GUIDELINES.md
│   │   ├── TUTORIAL_CONTENT_GUIDE.md
│   │   ├── PRESENTATION_DESIGN_GUIDE.md
│   │   ├── SLIDE_DESIGN_LANGUAGE.md    ← NEW: Component library
│   │   ├── PRESENTATION_STYLE_PLAN.md  ← NEW: Refactoring plan
│   │   ├── course-base.css
│   │   ├── slide-base.css              ← NEW: Slide CSS
│   │   ├── templates/
│   │   │   ├── exercise-template.html
│   │   │   └── cheatsheet-template.html
│   │   └── themes/                     ← NEW: Theme overrides
│   │       └── city-of-austin-theme.css
│   ├── supplements/                ← Tutorial HTML files
│   │   ├── 01_Model_Cheat_Sheet.html
│   │   ├── 03_Exercise_Local_Email_Mode.html
│   │   └── ...
│   ├── slide01.html                ← Presentation slides
│   ├── slide02.html
│   ├── ...
│   ├── convert.js                  ← Full deck generator
│   ├── convert-core.js             ← Core deck generator
│   └── build.sh                    ← Master build script
└── Voice_AI_Workflows_Part1_CORE.pptx  ← Generated output
```

---

## Support & Maintenance

**Owner:** AI Technology Lead, Austin Public Health

**Review Schedule:**
- After each workshop session (gather feedback)
- Before major content additions
- Before rebranding for new organization
- Quarterly for overall consistency check

**Version History:**
- v2.0 (January 2025) — Added slide design language, theming system
- v1.0 (January 2025) — Initial release

---

## Quick Reference: Design Token Layers

```
┌─────────────────────────────────────────────────────────────┐
│  THEME LAYER (Hot-Swappable)                               │
│  --theme-primary, --theme-accent, --theme-surface-*        │
│  --theme-text-*, --theme-border-*                          │
│                                                             │
│  ↓ Override these to rebrand ↓                             │
├─────────────────────────────────────────────────────────────┤
│  SEMANTIC LAYER (Fixed)                                     │
│  --color-success, --color-warning, --color-danger          │
│  --color-info, --color-advanced                            │
│                                                             │
│  ↓ Keep consistent for accessibility ↓                     │
├─────────────────────────────────────────────────────────────┤
│  COMPONENT LAYER (Uses tokens)                              │
│  .callout--success, .badge--free, .card--dark              │
│  .step-number--accent, .bottom-bar--accent                 │
│                                                             │
│  ↓ Automatically updates when theme changes ↓              │
└─────────────────────────────────────────────────────────────┘
```
