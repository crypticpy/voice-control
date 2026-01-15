# Presentation Style & Narrative Alignment Plan
## Austin Public Health — Voice-Driven AI Development Course

**Version:** 1.0
**Created:** January 2025
**Purpose:** Gap analysis and refactoring plan to align presentation slides with the established design system and narrative guidelines

---

## Executive Summary

The presentation slides (82 HTML files) and the learning supplements (8 HTML files) currently use **two different CSS approaches** despite sharing the same color values. This creates a subtle but noticeable inconsistency: supplemental materials feel more polished and systematic while slides feel handcrafted individually.

This document:
1. Defines how the presentation CSS should evolve to align with the design system
2. Identifies specific gaps between current slides and the narrative guidelines
3. Provides a phased refactoring plan

---

## Part 1: Current State Analysis

### 1.1 Supplement Materials (Files 01-08)

**CSS Approach:** Fully tokenized design system
```css
:root {
  /* Organized custom properties */
  --color-primary: #1a1f2e;
  --color-accent: #c9a227;
  --color-success: #059669;
  --color-beginner: #059669;
  --color-intermediate: #6366f1;
  --color-advanced: #8b5cf6;

  /* Typography tokens */
  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --text-xs: 11px;
  --text-sm: 13px;
  /* etc... */

  /* Spacing scale */
  --space-1: 4px;
  --space-2: 8px;
  /* etc... */
}
```

**Pattern Characteristics:**
- Uses CSS custom properties exclusively
- Components defined once, used consistently
- No inline styles
- Inter font family for all text
- Gradient headers with `linear-gradient(135deg, var(--color-primary) 0%, #2d3548 100%)`
- Semantic color naming (success, danger, beginner, intermediate, advanced)
- Print-optimized with `break-inside: avoid` and `print-color-adjust: exact`

### 1.2 Presentation Slides (82 files)

**CSS Approach:** Inline styles with minimal `:root` variables
```css
:root {
  --color-primary: #1a1f2e;
  --color-accent: #c9a227;
}
/* Only two variables defined */
```

**Pattern Characteristics:**
- Heavy use of inline styles (90%+ of styling)
- Colors defined as hex literals: `background: #059669`, `color: #dc2626`
- No consistent spacing scale (uses arbitrary pixel values)
- No typography tokens (font sizes vary: 9px, 10px, 11px, 12px, 14px, etc.)
- Georgia + Arial font combination (different from supplements)
- Flexbox layout via special `.row`/`.col` utility classes
- Fixed dimensions: `width: 960px; height: 540px`

### 1.3 Visual Differences

| Aspect | Supplements | Slides | Gap |
|--------|-------------|--------|-----|
| **Primary Font** | Inter | Georgia/Arial | Different families |
| **Monospace Font** | JetBrains Mono | Consolas | Different families |
| **Color Definition** | CSS variables | Inline hex | Inconsistent |
| **Spacing** | 4/8/12/16/20/24/32px scale | Arbitrary values | Inconsistent |
| **Border Radius** | `--radius-sm/md/lg` tokens | Various inline | Inconsistent |
| **Header Style** | Gradient + gold eyebrow | Solid or gradient | Similar but not identical |
| **Difficulty Colors** | Semantic tokens | Inline hex | Values match but not approach |

---

## Part 2: Narrative Alignment Analysis

### 2.1 Narrative Guidelines Summary

From `NARRATIVE_GUIDELINES.md`, the key voice characteristics:

1. **Knowledgeable, direct, collegial, playful** voice
2. **Confidence without condescension** — avoid "simple," "just," "obviously"
3. **Permission to experiment** — every major exercise includes explicit invitation
4. **Humor at 10%** — enough for lightness, not overwhelming
5. **Respect intelligence, acknowledge context** — learners are professionals

### 2.2 Current Slide Content Audit

Based on sampling slides 01, 10, 25, 45, 60:

| Slide | Content Tone | Alignment | Notes |
|-------|--------------|-----------|-------|
| slide01 (Title) | Formal, minimal | ✓ Good | Appropriate gravitas for opener |
| slide10 (Install) | Clear, instructional | ✓ Good | Direct steps, verification |
| slide25 (Decision) | Helpful, structured | ✓ Good | Decision flowchart works well |
| slide45 (Section) | Brief, transitional | ✓ Good | Section breaks appropriately sparse |
| slide60 (PHI Guide) | Serious, clear | ✓ Good | Warning content appropriately serious |

**Overall Assessment:** Slide content generally aligns with narrative tone. The issue is primarily **visual/CSS consistency**, not voice or content quality.

### 2.3 Missing Narrative Elements in Slides

The narrative guidelines emphasize several elements that could be better represented:

| Guideline Element | Current Slides | Opportunity |
|-------------------|----------------|-------------|
| "Permission to experiment" | Minimal | Add "Try It" callout boxes |
| "Make it fun to fail" | Not present | Lighter error messaging |
| "10% humor rule" | Rare | Add occasional lightness |
| "Self-deprecation" | Not present | Speaker notes opportunity |
| "Try Something Weird" moments | Not explicit | Add experiment prompts |

---

## Part 3: Unified Design Token System

### 3.1 Proposed Slide Design Tokens

Align slides with the established token system while respecting presentation constraints:

```css
:root {
  /* ===== COLORS ===== */

  /* Primary */
  --color-primary: #1a1f2e;
  --color-primary-gradient: linear-gradient(135deg, #1a1f2e 0%, #2d3548 100%);
  --color-accent: #c9a227;

  /* Semantic */
  --color-success: #059669;
  --color-danger: #dc2626;
  --color-warning: #f59e0b;
  --color-info: #2563eb;

  /* Difficulty (match supplements exactly) */
  --color-beginner: #059669;
  --color-intermediate: #6366f1;
  --color-advanced: #8b5cf6;

  /* Neutral */
  --color-background: #f7f8fa;
  --color-surface: #ffffff;
  --color-border: #e4e7ed;
  --color-text: #1a1f2e;
  --color-text-muted: #6b7280;
  --color-text-inverse: #ffffff;

  /* ===== TYPOGRAPHY ===== */

  /* Fonts - Keep presentation fonts for readability at distance */
  --font-display: Georgia, 'Times New Roman', serif;
  --font-body: Arial, Helvetica, sans-serif;
  --font-mono: 'Consolas', 'Monaco', monospace;

  /* Type Scale - Presentation optimized */
  --text-xs: 9px;      /* Metadata, captions */
  --text-sm: 11px;     /* Secondary labels */
  --text-base: 12px;   /* Body text */
  --text-lg: 14px;     /* Emphasized body */
  --text-xl: 18px;     /* Subheadings */
  --text-2xl: 26px;    /* Slide titles */
  --text-3xl: 32px;    /* Section headers */
  --text-4xl: 44px;    /* Title slide */

  /* ===== SPACING ===== */

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;

  /* ===== LAYOUT ===== */

  --slide-width: 960px;
  --slide-height: 540px;
  --slide-padding: 32px;
  --slide-padding-tight: 24px;

  /* ===== BORDERS ===== */

  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;

  /* ===== EFFECTS ===== */

  --border-accent: 4px solid var(--color-accent);
  --divider-gold: 2px solid var(--color-accent);
  --divider-width: 80px;
}
```

### 3.2 Font Strategy Decision

**Recommendation:** Keep Georgia/Arial for slides, Inter/JetBrains Mono for supplements.

**Rationale:**
- Georgia at large sizes (28-44px) projects better at distance
- Arial is universally available on all presentation systems
- Inter requires web font loading, adding complexity to PPT conversion
- The visual connection comes from colors and patterns, not fonts

**Alternative consideration:** If you want perfect font unity, use Inter everywhere but accept:
- Larger file sizes for embedded fonts in PPT
- Potential rendering issues on older systems
- Need to update conversion scripts

### 3.3 Component Patterns to Standardize

| Component | Supplement Pattern | Slide Adaptation |
|-----------|-------------------|------------------|
| **Header** | `.doc-header` with gradient | Navy background or gradient, gold eyebrow |
| **Step numbers** | Colored squares with border-radius | Smaller squares, no border-radius (cleaner at distance) |
| **Callout boxes** | Left border + tinted background | Same pattern, scaled for projection |
| **Code blocks** | Navy background, gold tags | Same but larger font for readability |
| **Comparison** | Red/green side-by-side | Same two-column pattern |
| **Badges** | Semantic color coding | Same colors, uppercase labels |

---

## Part 4: Gap Analysis Matrix

### 4.1 CSS Technical Gaps

| Gap | Priority | Effort | Impact |
|-----|----------|--------|--------|
| Inline styles → CSS variables | High | High | Consistency, maintainability |
| Arbitrary spacing → scale | Medium | Medium | Visual rhythm |
| Hardcoded colors → tokens | High | Medium | Brand consistency |
| Missing print styles | Low | Low | Handout quality |
| No responsive fallback | Low | Low | Edge case handling |

### 4.2 Narrative/Content Gaps

| Gap | Priority | Effort | Impact |
|-----|----------|--------|--------|
| No "Try It" prompts on appropriate slides | Medium | Low | Encourages experimentation |
| Missing humor moments | Low | Low | Humanizes content |
| No explicit "permission to fail" messaging | Medium | Low | Reduces learner anxiety |
| Speaker notes don't reference supplements | High | Medium | Content integration |

### 4.3 Thematic Cohesion Gaps

| Gap | Priority | Effort | Impact |
|-----|----------|--------|--------|
| Different badge styling | Medium | Low | Visual recognition |
| Different step number treatment | Medium | Low | Pattern recognition |
| No gradient in most slide headers | Low | Low | Visual consistency |
| Footer treatment varies | Low | Low | Polish |

---

## Part 5: Refactoring Plan

### Phase 1: Create Slide CSS Foundation (Day 1)

**Deliverable:** `slide-base.css` with all design tokens

**Tasks:**
1. Create `/design-system/slide-base.css` with complete token system
2. Define slide-specific component classes
3. Create slide layout utilities (`.slide-split-40-60`, `.slide-full-dark`, etc.)
4. Test with 3-5 representative slides

**Acceptance Criteria:**
- All colors available as variables
- All spacing available as variables
- Typography scale defined
- Component classes for: headers, badges, callouts, steps, code

### Phase 2: Template Slides (Day 2)

**Deliverable:** 6 master slide templates using the new CSS

**Templates to create:**
1. `slide-template-title.html` — Opening/closing slides
2. `slide-template-section.html` — Section dividers
3. `slide-template-content-split.html` — 40/60 split layout
4. `slide-template-content-full.html` — Single column content
5. `slide-template-comparison.html` — Side-by-side comparison
6. `slide-template-code.html` — Code/prompt display

**Acceptance Criteria:**
- Each template uses only CSS classes (no inline styles)
- Templates include commented placeholder sections
- Templates documented with usage notes

### Phase 3: Pilot Refactor (Days 3-4)

**Deliverable:** First 10 slides refactored

**Slides to refactor (priority order):**
1. slide01.html — Title (high visibility)
2. slide02.html — Agenda
3. slide10.html — Installation (instructional pattern)
4. slide25.html — Decision flowchart
5. slide45.html — Section opener
6. slide60.html — PHI Guide (warning pattern)
7. slide67.html — SuperWhisper deep dive opener
8. slide76.html — Summary slide
9. One demo slide with code
10. One comparison slide

**Acceptance Criteria:**
- Slides render identically to originals
- CSS class-based (< 10% inline styles)
- Pass visual regression test
- Speaker notes updated with supplement references

### Phase 4: Batch Refactoring (Days 5-10)

**Deliverable:** All 82 slides refactored

**Process:**
1. Group slides by type (section, content, code, comparison)
2. Refactor each group using appropriate template
3. Validate against original design
4. Update speaker notes with:
   - Transition phrases
   - Supplement references
   - Timing estimates

**Acceptance Criteria:**
- All slides use CSS variables
- Consistent spacing scale throughout
- Semantic color usage
- Updated conversion scripts work correctly

### Phase 5: Narrative Enhancements (Days 11-12)

**Deliverable:** Narrative alignment improvements

**Tasks:**
1. Add "Try It" callout boxes to 8-10 relevant slides
2. Add "Experiment" prompts where appropriate
3. Review and enhance speaker notes with:
   - Humor moments (where appropriate)
   - "Permission to fail" messaging
   - Self-deprecating examples
4. Cross-reference supplements in notes

**Acceptance Criteria:**
- At least 10% of slides have experimentation prompts
- Speaker notes match narrative voice
- Supplements explicitly referenced where applicable

### Phase 6: QA & Polish (Day 13)

**Deliverable:** Final quality pass

**Tasks:**
1. Visual regression testing (all 82 slides)
2. PPT conversion testing
3. Print/handout testing
4. Cross-check against design guide
5. Update PRESENTATION_DESIGN_GUIDE.md with new patterns

---

## Part 6: Slide CSS Architecture

### 6.1 Proposed File Structure

```
design-system/
├── course-base.css           # Existing (supplements)
├── slide-base.css            # NEW (presentations)
├── slide-components.css      # NEW (reusable patterns)
├── DESIGN_SYSTEM_README.md   # Update with slide info
├── PRESENTATION_DESIGN_GUIDE.md  # Update
└── templates/
    ├── exercise-template.html     # Existing
    ├── cheatsheet-template.html   # Existing
    ├── slide-template-title.html  # NEW
    ├── slide-template-section.html # NEW
    ├── slide-template-content.html # NEW
    └── ...
```

### 6.2 Slide Component Classes

```css
/* Layout Classes */
.slide { width: 960px; height: 540px; }
.slide--dark { background: var(--color-primary); color: var(--color-text-inverse); }
.slide--light { background: var(--color-background); color: var(--color-text); }
.slide--split { display: flex; }
.slide__panel { flex: 1; padding: var(--slide-padding); }
.slide__panel--40 { flex: 0 0 40%; }
.slide__panel--60 { flex: 0 0 60%; }

/* Header Classes */
.slide-header { margin-bottom: var(--space-4); }
.slide-header__eyebrow {
  font-size: var(--text-xs);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 3px;
}
.slide-header__title { font-family: var(--font-display); font-size: var(--text-2xl); }
.slide-header__divider { width: var(--divider-width); height: 2px; background: var(--color-accent); }

/* Step Classes */
.slide-step { display: flex; gap: var(--space-3); margin-bottom: var(--space-3); }
.slide-step__number {
  width: 24px; height: 24px;
  background: var(--color-accent);
  color: var(--color-primary);
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: var(--text-base);
}
.slide-step__number--success { background: var(--color-success); color: white; }
.slide-step__content { flex: 1; }

/* Badge Classes */
.slide-badge {
  font-size: var(--text-xs);
  font-weight: 700;
  padding: var(--space-1) var(--space-2);
  text-transform: uppercase;
}
.slide-badge--recommended { background: #0ea5e9; color: white; }
.slide-badge--beginner { background: var(--color-beginner); color: white; }
.slide-badge--intermediate { background: var(--color-intermediate); color: white; }
.slide-badge--advanced { background: var(--color-advanced); color: white; }

/* Callout Classes */
.slide-callout {
  padding: var(--space-3);
  border-left: 4px solid;
  margin: var(--space-3) 0;
}
.slide-callout--warning {
  background: var(--color-warning-bg);
  border-color: var(--color-warning);
}
.slide-callout--success {
  background: var(--color-success-bg);
  border-color: var(--color-success);
}
.slide-callout--danger {
  background: var(--color-danger-bg);
  border-color: var(--color-danger);
}

/* Code Block Classes */
.slide-code {
  background: var(--color-primary);
  padding: var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.5;
}
.slide-code__tag { color: var(--color-accent); }
.slide-code__content { color: #a5d6ff; }
```

---

## Part 7: Success Metrics

### 7.1 Technical Metrics

| Metric | Before | Target | Measurement |
|--------|--------|--------|-------------|
| Inline style usage | ~90% | < 10% | Line count |
| CSS variable coverage | ~5% | 100% | Color audit |
| Spacing consistency | Arbitrary | Scale only | Pixel audit |
| Print readability | Untested | Pass | Manual review |

### 7.2 Narrative Metrics

| Metric | Before | Target | Measurement |
|--------|--------|--------|-------------|
| "Try It" prompts | 0 | 8-10 slides | Count |
| Supplement cross-refs | Few | All relevant | Notes audit |
| Humor moments | Rare | 10% of slides | Content review |
| Permission messaging | None | 5+ slides | Content review |

### 7.3 Cohesion Metrics

| Metric | Before | Target | Measurement |
|--------|--------|--------|-------------|
| Badge consistency | Partial | 100% | Visual check |
| Color token alignment | Partial | 100% | Code audit |
| Pattern recognition | Moderate | High | User feedback |

---

## Part 8: Immediate Next Steps

1. **Approve this plan** — Confirm approach and priorities
2. **Create `slide-base.css`** — Foundation CSS file with all tokens
3. **Build 6 slide templates** — Reusable patterns
4. **Pilot with 10 slides** — Validate approach
5. **Full refactor** — Systematic update of all 82 slides
6. **Narrative enhancement pass** — Add experimentation prompts
7. **Update documentation** — Revise design guide

---

## Appendix A: Slide Inventory by Type

| Type | Count | Example | Template Needed |
|------|-------|---------|-----------------|
| Title/Closing | 3 | slide01, slide82 | title |
| Section Opener | 8 | slide45 | section |
| Content (Split) | 35 | slide10, slide60 | content-split |
| Content (Full) | 20 | slide25 | content-full |
| Comparison | 8 | Various | comparison |
| Code/Prompt | 6 | Various | code |
| Diagram/Flow | 4 | slide25 | content-full |

## Appendix B: Color Usage Audit

| Color | Hex | Supplement Token | Slide Usage |
|-------|-----|------------------|-------------|
| Navy | #1a1f2e | `--color-primary` | Both ✓ |
| Gold | #c9a227 | `--color-accent` | Both ✓ |
| Emerald | #059669 | `--color-success`, `--color-beginner` | Inline only |
| Red | #dc2626 | `--color-danger` | Inline only |
| Blue | #2563eb | `--color-info` | Inline only |
| Violet | #8b5cf6 | `--color-advanced` | Inline only |
| Indigo | #6366f1 | `--color-intermediate` | Supplements only |
| Sky | #0ea5e9 | Not defined | Slides only (RECOMMENDED badge) |

---

**Document Version:** 1.0
**Maintained By:** AI Technology Lead, Austin Public Health
**Next Review:** After Phase 3 pilot completion
