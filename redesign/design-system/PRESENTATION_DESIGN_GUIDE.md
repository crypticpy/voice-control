# PowerPoint Presentation Design Guide
## Austin Public Health — Voice-Driven AI Development Course

**Version:** 1.0
**Last Updated:** January 2025
**Applies To:** All course presentations, slide decks, and visual materials

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Slide Dimensions & Layout](#slide-dimensions--layout)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Slide Templates](#slide-templates)
6. [Visual Elements](#visual-elements)
7. [Animation & Transitions](#animation--transitions)
8. [Speaker Notes](#speaker-notes)
9. [Accessibility](#accessibility)
10. [File Organization](#file-organization)
11. [Alignment with Tutorial Materials](#alignment-with-tutorial-materials)

---

## Design Philosophy

### Core Principles

1. **Clarity Over Decoration**
   Every element must serve communication. No gradients for the sake of gradients.
   No stock photos of people shaking hands. If it doesn't teach, it goes.

2. **Consistent Visual Language**
   The same colors, fonts, and patterns used in tutorial materials appear here.
   Learners should recognize the "brand" whether they're looking at a slide or
   a worksheet.

3. **Presenter-Friendly**
   Slides support the presenter, not replace them. Minimal text encourages
   speaking. Speaker notes contain the depth. Slides contain the hooks.

4. **Scannable from the Back Row**
   A learner in the last row of a conference room should be able to read
   and understand every slide. Large fonts, high contrast, clear hierarchy.

5. **Print-Ready**
   Handout versions should be readable in grayscale. Don't rely on subtle
   color differences to convey meaning.

### What We Avoid

- Bullet point overload (max 4-5 bullets per slide)
- Paragraph text on slides
- Clip art and generic stock photos
- Busy backgrounds
- Logo on every slide (title and closing only)
- Animation for animation's sake
- Centered everything (creates visual monotony)

---

## Slide Dimensions & Layout

### Aspect Ratio

```
Standard: 16:9 (widescreen)
Dimensions: 960px × 540px (native design)
PowerPoint: 13.333" × 7.5" (equivalent)
```

All slides use 16:9 widescreen format. Do not create 4:3 slides.

### Grid System

```
┌────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────┐  │
│  │                                                      │  │
│  │                    SAFE AREA                         │  │
│  │                                                      │  │
│  │   Margin: 28px (2.9%) from all edges                │  │
│  │                                                      │  │
│  │                                                      │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘

Content should stay within the safe area to avoid cropping
on different displays and when printing.
```

### Common Layouts

**Layout A: Title + Content (Single Column)**
```
┌────────────────────────────────────────┐
│  TITLE                                 │
│  ────────                              │
│                                        │
│  • Bullet point 1                      │
│  • Bullet point 2                      │
│  • Bullet point 3                      │
│                                        │
│                                        │
└────────────────────────────────────────┘
```

**Layout B: Two Column**
```
┌────────────────────────────────────────┐
│  TITLE                                 │
│  ────────                              │
│  ┌─────────────┐  ┌─────────────────┐  │
│  │             │  │                 │  │
│  │   LEFT      │  │     RIGHT       │  │
│  │   CONTENT   │  │     CONTENT     │  │
│  │             │  │                 │  │
│  └─────────────┘  └─────────────────┘  │
└────────────────────────────────────────┘
40% / 60% split is standard
50% / 50% for equal comparison
```

**Layout C: Title Slide / Section Break**
```
┌────────────────────────────────────────┐
│                                        │
│                                        │
│           SECTION TITLE                │
│           ─────────────                │
│           Subtitle or context          │
│                                        │
│                                        │
└────────────────────────────────────────┘
Centered, with ample breathing room
```

**Layout D: Diagram / Visual Focus**
```
┌────────────────────────────────────────┐
│  TITLE                                 │
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │          DIAGRAM / IMAGE         │  │
│  │          (full width)            │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│  Caption or key takeaway               │
└────────────────────────────────────────┘
```

---

## Color System

### Primary Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Navy** | `#1a1f2e` | 26, 31, 46 | Backgrounds, headers, primary text |
| **Gold** | `#c9a227` | 201, 162, 39 | Accents, highlights, dividers |
| **White** | `#ffffff` | 255, 255, 255 | Light backgrounds, text on dark |
| **Light Gray** | `#f7f8fa` | 247, 248, 250 | Content backgrounds |

### Extended Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Emerald** | `#059669` | Success, PHI-safe, local processing |
| **Red** | `#dc2626` | Warnings, cloud processing, errors |
| **Amber** | `#f59e0b` | Caution, attention needed |
| **Blue** | `#2563eb` | Intermediate content, links |
| **Violet** | `#8b5cf6` | Advanced content |
| **Muted Text** | `#6b7280` | Secondary information |

### Color Combinations

**Dark Background Slides** (Section headers, emphasis)
```
Background: Navy (#1a1f2e)
Title: White (#ffffff)
Accent: Gold (#c9a227)
Body text: White at 90% opacity
Secondary: White at 60% opacity
```

**Light Background Slides** (Content, detail)
```
Background: Light Gray (#f7f8fa)
Title: Navy (#1a1f2e)
Accent: Gold (#c9a227)
Body text: Navy at 90% opacity
Secondary: #6b7280
```

### Color Usage Rules

1. **Never use pure black** (#000000) — use Navy instead
2. **Gold is for accents only** — never as background
3. **Red and green must have non-color differentiation** — icons or labels
4. **Maintain WCAG AA contrast** — especially for body text
5. **Test in grayscale** — ensure meaning survives without color

---

## Typography

### Font Families

| Use | Font | Fallback | Notes |
|-----|------|----------|-------|
| **Headings** | Georgia | Times New Roman, serif | Elegant, readable at large sizes |
| **Body** | Arial | Helvetica, sans-serif | Clean, universally available |
| **Code/Prompts** | Consolas | Monaco, monospace | For technical content |

**Why these fonts?**
- Available on all systems (no font embedding issues)
- Georgia provides warmth without being ornate
- Arial is invisible (never distracting)
- Matches tutorial materials' typography spirit

### Type Scale

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Slide title | Georgia | 28-32px | Regular | 1.2 |
| Section header | Georgia | 40-48px | Regular | 1.1 |
| Subtitle | Arial | 16-18px | Regular | 1.3 |
| Body text | Arial | 18-20px | Regular | 1.4 |
| Bullet text | Arial | 16-18px | Regular | 1.4 |
| Caption | Arial | 12-14px | Regular | 1.3 |
| Code | Consolas | 14-16px | Regular | 1.3 |
| Badge/Tag | Arial | 9-10px | Bold | 1.2 |

### Typography Rules

1. **Maximum 2 font families per slide** — heading + body
2. **Left-align body text** — easier to read, more professional
3. **Generous line spacing** — 1.3-1.5 for readability
4. **Limit line length** — max 12 words per line for slides
5. **No text smaller than 12px** — unreadable from distance

---

## Slide Templates

### Template 1: Title Slide

```
┌────────────────────────────────────────────────────────────┐
│ ██████████████████████████████████████████████████████████ │
│ ██                                                      ██ │
│ ██                                                      ██ │
│ ██        VOICE-DRIVEN AI DEVELOPMENT                  ██ │
│ ██        WORKFLOWS                                     ██ │
│ ██        ────────────────                             ██ │
│ ██        Part 1: Setup & Introduction                 ██ │
│ ██                                                      ██ │
│ ██        Austin Public Health                         ██ │
│ ██        January 2025                                 ██ │
│ ██                                                      ██ │
│ ██████████████████████████████████████████████████████████ │
└────────────────────────────────────────────────────────────┘

Background: Navy (#1a1f2e)
Title: White, Georgia, 40px
Subtitle: Gold (#c9a227), Arial, 18px
Metadata: White at 60%, Arial, 14px
Gold divider line below title
```

### Template 2: Section Opener

```
┌────────────────────────────────────────────────────────────┐
│ ██████████████████████████████████████████████████████████ │
│ ██                                                      ██ │
│ ██  [TAG]                                               ██ │
│ ██                                                      ██ │
│ ██        Section Title                                 ██ │
│ ██        Here                                          ██ │
│ ██        ─────                                         ██ │
│ ██                                                      ██ │
│ ██        Optional subtitle or context                  ██ │
│ ██                                                      ██ │
│ ██████████████████████████████████████████████████████████ │
└────────────────────────────────────────────────────────────┘

Background: Navy
Tag: Gold background, Navy text, "PART 1" or "SECURITY"
Title: White, Georgia, 36-40px
Divider: Gold, 40px wide, 2px thick
Subtitle: White at 70%, Arial, 16px
```

### Template 3: Content Slide (Split Layout)

```
┌────────────────────────────────────────────────────────────┐
│ ████████████████████  │                                    │
│ ██                 ██ │                                    │
│ ██  [TAG]          ██ │        Content Area               │
│ ██                 ██ │                                    │
│ ██  Title          ██ │        • Bullet 1                 │
│ ██  Here           ██ │        • Bullet 2                 │
│ ██  ─────          ██ │        • Bullet 3                 │
│ ██                 ██ │                                    │
│ ██  Summary text   ██ │        [Visual/Diagram]           │
│ ██                 ██ │                                    │
│ ████████████████████  │                                    │
└────────────────────────────────────────────────────────────┘

Left panel: Navy background (40% width)
Right panel: Light gray background (60% width)
Tag: Gold background
Title: White, Georgia, 24px
Summary: White at 70%, Arial, 12px
Content: Navy text, Arial, 16px
```

### Template 4: Comparison Slide

```
┌────────────────────────────────────────────────────────────┐
│  TITLE                                                     │
│  ─────                                                     │
│  ┌───────────────────────┐  ┌───────────────────────────┐  │
│  │ Option A              │  │ Option B                  │  │
│  │ ───────               │  │ ───────                   │  │
│  │ • Feature 1          ✓│  │ • Feature 1             ✗│  │
│  │ • Feature 2          ✓│  │ • Feature 2             ✓│  │
│  │ • Feature 3          ✓│  │ • Feature 3             ✓│  │
│  │                       │  │                          │  │
│  │ [Icon or badge]       │  │ [Icon or badge]          │  │
│  └───────────────────────┘  └───────────────────────────┘  │
└────────────────────────────────────────────────────────────┘

Equal columns, clear visual separation
Use green checks (✓) and red crosses (✗)
Include recommendation badge on preferred option
```

### Template 5: Diagram/Process Flow

```
┌────────────────────────────────────────────────────────────┐
│  TITLE                                                     │
│                                                            │
│  ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐                │
│  │  1  │ ─→ │  2  │ ─→ │  3  │ ─→ │  4  │                │
│  │Step │    │Step │    │Step │    │Step │                │
│  └─────┘    └─────┘    └─────┘    └─────┘                │
│                                                            │
│  Caption or key takeaway                                   │
└────────────────────────────────────────────────────────────┘

Boxes: Navy background or white with navy border
Arrows: Gold color, 2px stroke
Labels: White (on navy) or Navy (on white)
Center-aligned for visual balance
```

### Template 6: Code/Prompt Display

```
┌────────────────────────────────────────────────────────────┐
│ ██████████████████████████████████████████████████████████ │
│ ██  [LABEL]                                            ██ │
│ ├──────────────────────────────────────────────────────── │
│ │  <role>                                               │ │
│ │    You are a professional email editor.               │ │
│ │  </role>                                              │ │
│ │                                                       │ │
│ │  <instructions>                                       │ │
│ │    Format dictated speech into professional email.    │ │
│ │  </instructions>                                      │ │
│ └────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────┘

Header bar: Navy with label in gold
Code area: Navy background
Tags: Gold (#c9a227)
Content: White
Use Consolas or Monaco font
```

---

## Visual Elements

### Icons & Symbols

Use simple, recognizable symbols. Prefer line icons over filled:

| Meaning | Symbol | Context |
|---------|--------|---------|
| Success/Safe | ✓ or checkmark icon | PHI-safe, completed |
| Warning | ⚠ or triangle | Caution needed |
| Error/Danger | ✗ or X icon | Not recommended |
| Info | ℹ or circle-i | Additional context |
| Local | 🔒 or lock | On-device processing |
| Cloud | ☁ or cloud | Server processing |
| Time | ⏱ or clock | Duration |
| Tip | 💡 or lightbulb | Optional enhancement |

**Icon Rules:**
- Consistent style throughout deck (all line or all filled)
- Large enough to see from back row (24px minimum)
- Always accompanied by text (don't rely on icon alone)

### Badges & Tags

```
┌────────────────┐     ┌──────────────┐     ┌───────────────┐
│ ● BEGINNER     │     │ ●● INTERMED. │     │ ●●● ADVANCED  │
│   #059669      │     │   #2563eb    │     │    #8b5cf6    │
└────────────────┘     └──────────────┘     └───────────────┘

┌────────────────┐     ┌──────────────┐
│ FREE           │     │ PRO          │
│ Green bg       │     │ Gold bg      │
└────────────────┘     └──────────────┘

┌────────────────┐     ┌──────────────┐
│ LOCAL          │     │ CLOUD        │
│ Green text     │     │ Red text     │
└────────────────┘     └──────────────┘
```

### Dividers & Separators

- **Gold line:** 40px wide, 2px thick — below titles
- **Gray line:** Full width, 1px — between sections
- **No decorative lines** — dividers serve structure, not decoration

### Callout Boxes

```
┌────────────────────────────────────────────┐
│ ⚠ WARNING                                  │
│ ────────                                   │
│ Cloud models send audio to external        │
│ servers. Do not use for PHI.               │
└────────────────────────────────────────────┘

Background: Amber/red tint
Border-left: 4px solid accent color
Title: Bold, colored
Content: Normal weight
```

---

## Animation & Transitions

### General Rule

**Minimal animation, purposeful only.**

Most slides should have NO animation. Static slides are easier to navigate,
faster to present, and more accessible.

### When Animation is Acceptable

1. **Process flows** — Steps appearing sequentially to match narration
2. **Comparisons** — Revealing "after" to emphasize transformation
3. **Complex diagrams** — Building up layers to avoid overwhelming

### Approved Transitions

| Type | Use | Duration |
|------|-----|----------|
| **Fade** | Between sections | 0.3s |
| **None** | Between content slides | — |

**Never use:**
- Fly in/out
- Bounce
- Spin
- Zoom
- Blinds/Checkerboard
- Any "fun" transition

### Build (Animation Within Slide)

If you must animate elements within a slide:
- **Fade** only (no movement)
- **0.2-0.3 second duration**
- **On click, not automatic**
- **Same treatment for all elements**

---

## Speaker Notes

### Purpose

Speaker notes contain the depth that slides don't show:
- Key talking points
- Timing cues
- Transition phrases
- Background information for Q&A
- Demo instructions

### Format

```
TALKING POINTS:
- Main point 1 (~30 sec)
- Main point 2 (~45 sec)
- Key statistic or example

DEMO NOTE:
If showing live demo, switch to SuperWhisper now.

TRANSITION:
"Now that we've covered X, let's look at how this applies to Y..."

TIMING: ~2 minutes for this slide
```

### Rules

1. **Write in fragments, not paragraphs** — notes are prompts, not scripts
2. **Include timing estimates** — helps with pacing
3. **Note transitions explicitly** — smooth flow between slides
4. **Flag demos and activities** — so presenter doesn't forget
5. **Max 150 words per slide** — longer = you won't read it

---

## Accessibility

### Visual Accessibility

| Requirement | Implementation |
|-------------|----------------|
| Color contrast | All text meets WCAG AA (4.5:1 for normal, 3:1 for large) |
| Color independence | Never use color alone to convey meaning |
| Font size | Minimum 12px, body text 16-18px |
| Text on images | High contrast, consider adding backdrop |

### Cognitive Accessibility

| Requirement | Implementation |
|-------------|----------------|
| Chunking | Max 4-5 bullet points per slide |
| Consistency | Same layouts for similar content types |
| Clear hierarchy | Visual weight matches content importance |
| Reading order | Logical left-to-right, top-to-bottom |

### Presentation Accessibility

| Requirement | Implementation |
|-------------|----------------|
| Alt text | Describe diagrams and charts in speaker notes |
| Handouts | Provide printed versions with notes |
| Contrast | Test on projector — often washes out |
| Pace | Pause on complex slides for processing |

---

## File Organization

### Naming Convention

```
slide[NN].html     — Individual slide file
convert.js         — Full deck converter
convert-core.js    — Core deck converter (curated slides)

Example:
slide01.html       — Title slide
slide02.html       — Agenda
slide67.html       — SuperWhisper Deep Dive opener
```

### Slide Numbering Strategy

Slides are numbered by creation order, not presentation order.
The `convert-core.js` script defines the actual presentation sequence.

This allows:
- Adding new slides without renumbering
- Multiple deck configurations from same slide pool
- Easy reference in speaker notes ("see slide67")

### Version Control

- Track all `.html` slide files in git
- Don't track generated `.pptx` files (regenerate from source)
- Meaningful commit messages: "Add slide for Azure AI Foundry comparison"

---

## Alignment with Tutorial Materials

### Shared Design Tokens

These values are identical between slides and tutorial CSS:

| Token | Value | Used In |
|-------|-------|---------|
| Primary Navy | `#1a1f2e` | Headers, backgrounds |
| Accent Gold | `#c9a227` | Highlights, dividers |
| Success Green | `#059669` | PHI-safe, local |
| Danger Red | `#dc2626` | Cloud warnings |
| Beginner | `#059669` | Difficulty badge |
| Intermediate | `#2563eb` | Difficulty badge |
| Advanced | `#8b5cf6` | Difficulty badge |

### Consistent Patterns

| Pattern | Slide Version | Tutorial Version |
|---------|---------------|------------------|
| Step numbers | Square badges | Rounded square badges |
| Callouts | Left border, tinted bg | Left border, tinted bg |
| Code blocks | Navy bg, gold tags | Navy bg, gold tags |
| Comparisons | Side-by-side boxes | Side-by-side boxes |
| Checkmarks | ✓ green / ✗ red | ✓ green / ✗ red |

### Content Mapping

When a slide topic has a corresponding tutorial:

| Slide Content | Tutorial Reference |
|---------------|-------------------|
| Mode overview | 02_Mode_Cheat_Sheet |
| Email mode demo | 03_Exercise_Local_Email_Mode |
| Prompt enrichment | 05_Exercise_Prompt_Enrichment |
| Model comparison | 01_Model_Cheat_Sheet |

Reference tutorials in speaker notes:
```
SEE ALSO: Learners can practice this with
03_Exercise_Local_Email_Mode.html after session.
```

---

## Quick Reference Card

### Color Swatches (Copy-Paste)

```
Navy:       #1a1f2e    rgb(26, 31, 46)
Gold:       #c9a227    rgb(201, 162, 39)
White:      #ffffff
Light Gray: #f7f8fa

Emerald:    #059669
Red:        #dc2626
Amber:      #f59e0b
Blue:       #2563eb
Violet:     #8b5cf6
Muted:      #6b7280
```

### Type Specs (Copy-Paste)

```
Title:      Georgia, 28-32px, regular
Section:    Georgia, 40-48px, regular
Body:       Arial, 18-20px, regular
Bullet:     Arial, 16-18px, regular
Code:       Consolas, 14-16px, regular
Caption:    Arial, 12-14px, regular
```

### Checklist: Before Presenting

- [ ] All slides follow approved templates
- [ ] Colors match palette (no custom colors)
- [ ] Text readable from back row (test!)
- [ ] Speaker notes complete for all slides
- [ ] Animations minimal and purposeful
- [ ] Transitions consistent (fade between sections)
- [ ] Tested on actual presentation display
- [ ] Handout version prints clearly
- [ ] Related tutorials referenced in notes

---

**Document Version:** 1.0
**Maintained By:** AI Technology Lead, Austin Public Health
**Review Cycle:** Before each major presentation update
