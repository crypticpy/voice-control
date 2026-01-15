# Tutorial Content Template & Guide
## Austin Public Health — Voice-Driven AI Development Course

**Version:** 1.0
**Last Updated:** January 2025
**Applies To:** All tutorial worksheets, exercises, cheat sheets, and reference materials

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Document Types](#document-types)
3. [Content Structure Patterns](#content-structure-patterns)
4. [Writing Style Guide](#writing-style-guide)
5. [Visual Components](#visual-components)
6. [Accessibility Requirements](#accessibility-requirements)
7. [Print Optimization](#print-optimization)
8. [File Naming Conventions](#file-naming-conventions)
9. [Templates](#templates)

---

## Design Philosophy

### Core Principles

1. **Professional, Not Academic**
   These materials should feel like they came from a well-funded tech company's internal training program—not a university course or elementary school handout. Clean, confident, purposeful.

2. **Respect the Learner's Time**
   Adult learners are busy. Every element must earn its place. No decorative filler, no unnecessary preamble. Get to the point, provide value, move on.

3. **Print-First, Screen-Compatible**
   Materials will primarily be printed or viewed as PDFs. Design for 8.5" × 11" paper first, then ensure they work on screens. Never sacrifice print quality for screen effects.

4. **Progressive Disclosure**
   Lead with what learners need immediately. Defer advanced details to later sections, callouts, or separate documents. Don't overwhelm beginners; don't bore experts.

5. **Consistent but Not Rigid**
   Follow the system, but serve the content. If a specific tutorial needs a unique element, create it within the design language—don't force content into ill-fitting templates.

### Target Audience Profile

- **Role:** Government health department staff, IT professionals, analysts
- **Technical Level:** Comfortable with software, some development experience
- **Learning Context:** Workshop setting, may complete exercises independently
- **Time Constraints:** Limited time for training, need efficient materials
- **Accessibility Needs:** Some participants may have visual impairments; materials must be readable

---

## Document Types

### Type 1: Reference Sheet (Cheat Sheet)

**Purpose:** Quick lookup during and after training
**Length:** 1–2 pages (ideal: single page front/back)
**Tone:** Terse, scannable, factual
**Key Elements:**
- Tables with clear headers
- Decision trees or flowcharts
- Bullet lists, not paragraphs
- Visual hierarchy for quick scanning

**When to Use:**
- Model comparisons
- Keyboard shortcuts
- Configuration options
- Decision frameworks

**File Prefix:** `01_`, `02_` (numbered for reference order)

---

### Type 2: Hands-On Exercise

**Purpose:** Guided practice with specific learning outcomes
**Length:** 2–4 pages
**Tone:** Instructional, encouraging, precise
**Key Elements:**
- Clear learning objectives (measurable)
- Time estimate (total and per-section)
- Numbered steps with expected outcomes
- Test/verification section
- Completion checklist
- Troubleshooting guide

**When to Use:**
- Teaching a specific skill
- Configuring a tool
- Practicing a workflow

**File Prefix:** `03_` through `08_` (numbered for progression)

**Required Sections:**
1. Header with title, time, difficulty
2. Learning Objective (1–2 sentences)
3. Prerequisites (if any)
4. Step-by-step instructions
5. Test your work
6. Completion checklist
7. Troubleshooting (common issues)
8. Footer with course info

---

### Type 3: Concept Guide

**Purpose:** Deeper explanation of a concept or pattern
**Length:** 3–6 pages
**Tone:** Explanatory, thoughtful, example-rich
**Key Elements:**
- Conceptual overview
- "Why this matters" section
- Multiple examples
- Common misconceptions
- Connection to other concepts

**When to Use:**
- Explaining architectural patterns
- Discussing security considerations
- Covering theoretical foundations

**File Prefix:** `GUIDE_` or numbered in sequence

---

### Type 4: Quick Start Card

**Purpose:** Absolute minimum to get started
**Length:** 1 page maximum
**Tone:** Direct, action-oriented
**Key Elements:**
- 5 steps or fewer
- No background explanation
- Assumes prerequisites are met
- Links to fuller documentation

**When to Use:**
- Installation summaries
- "Day 1" basics
- Refresher for returning learners

---

## Content Structure Patterns

### Pattern A: The Step Sequence

Use for procedural content where order matters.

```
┌─────────────────────────────────────────────────────────┐
│ STEP 1 · Open Settings                          ~1 min │
│ ─────────────────────────────────────────────────────── │
│ Click the gear icon in the menu bar to open the        │
│ Settings panel.                                        │
│                                                        │
│ ┌─────────────────────────────────────────────────────┐│
│ │ ✓ CHECKPOINT: You should see the Settings window   ││
│ │   with tabs on the left sidebar.                   ││
│ └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

**Rules:**
- One action per step (can have sub-actions)
- Include time estimate for steps over 2 minutes
- Add checkpoint after complex steps
- Never skip numbering (1, 2, 3... not 1, 3, 5)

---

### Pattern B: The Comparison

Use when learners must choose between options.

```
┌──────────────────────────┐  ┌──────────────────────────┐
│ LOCAL PROCESSING         │  │ CLOUD PROCESSING         │
│ ─────────────────────────│  │ ─────────────────────────│
│ ✓ PHI-safe               │  │ ✗ Not for sensitive data │
│ ✓ Works offline          │  │ ✓ Higher accuracy        │
│ ✓ No usage limits        │  │ ✓ Faster processing      │
│ ─────────────────────────│  │ ─────────────────────────│
│ Best for: Work content   │  │ Best for: Personal use   │
└──────────────────────────┘  └──────────────────────────┘
```

**Rules:**
- Maximum 2–3 options side by side
- Use consistent criteria for all options
- End with clear recommendation or decision aid
- Use ✓/✗ for boolean comparisons, not emoji

---

### Pattern C: The Before/After

Use to demonstrate transformation or improvement.

```
┌─────────────────────────────────────────────────────────┐
│ BEFORE (raw dictation)                                  │
│ ─────────────────────────────────────────────────────── │
│ "okay so um I need like a function that takes a list    │
│ of users and um filters them by like active status"     │
├─────────────────────────────────────────────────────────┤
│ AFTER (enriched prompt)                                 │
│ ─────────────────────────────────────────────────────── │
│ Create a function that:                                 │
│ 1. Takes a list of users                                │
│ 2. Filters to only active users                         │
│ 3. Returns the filtered list                            │
└─────────────────────────────────────────────────────────┘
```

**Rules:**
- Always show realistic "before" (include filler words, mistakes)
- "After" should be achievable, not idealized
- Use for transformations the learner will perform
- Label clearly: BEFORE/AFTER, INPUT/OUTPUT, RAW/PROCESSED

---

### Pattern D: The Decision Tree

Use when the choice depends on multiple factors.

```
                    ┌─────────────────┐
                    │ Does content    │
                    │ contain PHI?    │
                    └────────┬────────┘
                             │
              ┌──────────────┴──────────────┐
              ▼                             ▼
         ┌────────┐                    ┌────────┐
         │  YES   │                    │   NO   │
         └────┬───┘                    └────┬───┘
              │                             │
              ▼                             ▼
    ┌─────────────────┐          ┌─────────────────┐
    │ Use LOCAL model │          │ Cloud or Local  │
    │ (Fast/Standard) │          │ based on needs  │
    └─────────────────┘          └─────────────────┘
```

**Rules:**
- Maximum 3 decision levels deep
- Binary choices preferred (Yes/No)
- End nodes must be actionable
- Include as ASCII art for maximum compatibility

---

### Pattern E: The Code Block

Use for prompts, configuration, and technical content.

```
┌─────────────────────────────────────────────────────────┐
│ AI INSTRUCTIONS                                    COPY │
├─────────────────────────────────────────────────────────┤
│ <role>                                                  │
│   You are a professional email editor for a government  │
│   health department.                                    │
│ </role>                                                 │
│                                                         │
│ <instructions>                                          │
│   The User Message is dictated speech. Format it into   │
│   a professional email with greeting and closing.       │
│ </instructions>                                         │
└─────────────────────────────────────────────────────────┘
```

**Rules:**
- Always include a label (what is this code for?)
- Use syntax highlighting where supported
- Preserve exact formatting (spaces, line breaks matter)
- For prompts: use `<tag>` format consistently

---

## Writing Style Guide

### Voice and Tone

| Context | Tone | Example |
|---------|------|---------|
| Instructions | Direct, confident | "Click Settings. Select Modes." |
| Explanations | Clear, helpful | "This keeps your data on your device." |
| Warnings | Firm, not scary | "Do not use cloud models for PHI." |
| Tips | Friendly, optional | "Pro tip: Name modes descriptively." |
| Troubleshooting | Empathetic, solution-focused | "If this happens, try..." |

### Word Choices

**Prefer:**
- "Select" over "Click on"
- "Enter" over "Type in"
- "You'll see" over "The system will display"
- "Works" over "Functions"
- Active voice over passive

**Avoid:**
- "Simply" (implies too easy)
- "Just" (dismissive)
- "Obviously" (condescending)
- "etc." (be specific)
- Jargon without definition

### Sentence Structure

- **Instructions:** Imperative mood, start with verb
  ✓ "Open the Settings panel."
  ✗ "You should open the Settings panel."

- **Explanations:** Subject-verb-object, present tense
  ✓ "Local models process audio on your device."
  ✗ "Your device will be used for processing audio locally."

- **Lists:** Parallel structure
  ✓ "Select the model. Configure the mode. Test the output."
  ✗ "Select the model. The mode should be configured. Testing the output."

### Technical Terms

First use: Define or contextualize
Subsequent uses: Use without explanation

```
First use:    "Local models (AI that runs entirely on your device)"
Later:        "Local models are PHI-safe because..."
```

Maintain a glossary for the course. Key terms for this course:
- **Local processing:** Audio never leaves the device
- **Cloud processing:** Audio sent to external servers
- **PHI:** Protected Health Information
- **Mode:** A SuperWhisper configuration profile
- **Context:** Information passed to the AI (app, selection, clipboard)

---

## Visual Components

### Callout Boxes

| Type | Color | Use Case |
|------|-------|----------|
| **Tip** | Gold border (#c9a227) | Optional enhancements, shortcuts |
| **Warning** | Amber border (#f59e0b) | Important cautions, not errors |
| **Danger** | Red border (#dc2626) | Security risks, data loss potential |
| **Success** | Green border (#059669) | Checkpoints, completion indicators |
| **Info** | Blue border (#2563eb) | Additional context, not critical |

### Difficulty Badges

```
┌─────────────┐   ┌────────────────┐   ┌─────────────┐
│ ● BEGINNER  │   │ ●● INTERMEDIATE│   │ ●●● ADVANCED│
│   #059669   │   │    #2563eb     │   │   #7c3aed   │
└─────────────┘   └────────────────┘   └─────────────┘
```

Always include difficulty on exercises. Criteria:
- **Beginner:** No prerequisites, follows exact steps, ~10 min
- **Intermediate:** Requires prior exercise, some decisions, ~15 min
- **Advanced:** Builds on multiple concepts, creative application, ~20+ min

### Time Estimates

Always provide:
- Total time in header
- Per-section time for exercises over 10 minutes
- Round to nearest 5 minutes

Format: `⏱ 15 minutes` or `~2 min` for sections

### Checkboxes

Use for:
- Completion checklists (end of exercise)
- Prerequisite verification (start of exercise)
- Configuration options being set

Do not use for:
- Sequential steps (use numbers)
- Required reading (use bullets)

---

## Accessibility Requirements

### Color Contrast

All text must meet WCAG AA standards:
- Normal text: 4.5:1 contrast ratio minimum
- Large text (18px+): 3:1 contrast ratio minimum
- Never rely on color alone to convey meaning

### Font Sizes

| Element | Minimum Size | Recommended |
|---------|--------------|-------------|
| Body text | 14px | 14–16px |
| Captions | 12px | 12px |
| Headers | 18px | 18–28px |
| Code | 13px | 13–14px |

### Screen Readers

- Use semantic HTML (`<h1>`, `<h2>`, `<table>`, `<nav>`)
- Provide alt text for any images
- Ensure reading order matches visual order
- Don't use tables for layout (only data)

### Print Accessibility

- Minimum 11pt font for printed body text
- Sufficient margin for binding (0.75" minimum)
- Page numbers on all pages except cover
- Headers/footers should not crowd content

---

## Print Optimization

### Page Setup

```css
@page {
  size: letter;  /* 8.5in × 11in */
  margin: 0.75in 0.6in 0.75in 0.75in;  /* top right bottom left */
}
```

### Page Break Rules

**Always break before:**
- Major section headers (`<h2>`)
- New exercises
- Full-page diagrams

**Never break inside:**
- Step cards
- Code blocks
- Tables (if possible)
- Comparison boxes
- Callout boxes

**Orphan/Widow Control:**
- Minimum 2 lines at top of page
- Minimum 2 lines at bottom of page

### Headers and Footers

**Header (after page 1):**
- Document title (left)
- Section name (right)

**Footer:**
- Page number (center)
- "Austin Public Health • Voice AI Workshop" (left)
- Part number (right)

---

## File Naming Conventions

### Tutorial Files

```
[NN]_[Type]_[Name].html

Examples:
01_Model_Cheat_Sheet.html
03_Exercise_Local_Email_Mode.html
GUIDE_Security_Best_Practices.html
```

### Numbering Scheme

| Range | Type |
|-------|------|
| 01–02 | Reference sheets (cheat sheets) |
| 03–19 | Exercises (in learning order) |
| 20–29 | Concept guides |
| 30–39 | Quick start cards |
| 40+ | Supplementary materials |

### Version Control

For significant updates, append version:
```
03_Exercise_Local_Email_Mode_v2.html
```

For drafts during development:
```
03_Exercise_Local_Email_Mode_DRAFT.html
```

---

## Templates

### Template Files Location

```
/design-system/
  templates/
    exercise-template.html
    cheatsheet-template.html
    guide-template.html
    quickstart-template.html
```

### Using Templates

1. Copy the appropriate template
2. Rename following conventions above
3. Replace placeholder content
4. Update metadata (title, time, difficulty)
5. Validate against this guide
6. Test print output

### Template Placeholders

Templates use these placeholders:
- `{{TITLE}}` — Document title
- `{{TIME}}` — Time estimate
- `{{DIFFICULTY}}` — Beginner/Intermediate/Advanced
- `{{OBJECTIVE}}` — Learning objective text
- `{{CONTENT}}` — Main content area
- `{{FOOTER}}` — Standard footer (usually don't change)

---

## Checklist: Before Publishing

### Content Quality
- [ ] Learning objectives are specific and measurable
- [ ] Steps are tested and accurate
- [ ] Time estimates are realistic (tested with naive user)
- [ ] No broken references to other documents
- [ ] Troubleshooting covers common issues

### Design Compliance
- [ ] Uses correct template for document type
- [ ] Follows color palette (no custom colors)
- [ ] Difficulty badge included (exercises only)
- [ ] Time estimate in header
- [ ] Footer includes course info

### Accessibility
- [ ] Color contrast passes WCAG AA
- [ ] No meaning conveyed by color alone
- [ ] Semantic HTML structure
- [ ] Readable at 100% zoom

### Print Quality
- [ ] Tested actual print output
- [ ] No awkward page breaks
- [ ] All content fits margins
- [ ] Page numbers present
- [ ] Headers/footers render correctly

---

## Appendix: Course Structure

### Part 1: Foundations
- 01_Model_Cheat_Sheet
- 02_Mode_Cheat_Sheet
- 03_Exercise_Local_Email_Mode
- 04_Exercise_Cloud_Email_Mode
- 05_Exercise_Prompt_Enrichment
- 06_Exercise_Teams_Chat_Mode
- 07_Exercise_Custom_Vocabulary
- 08_Exercise_Agentic_Handoff

### Part 2: Application (Planned)
- 09_Exercise_Meeting_Transcription_Setup
- 10_Exercise_Real_Project_Integration
- 11_Exercise_Team_Collaboration
- (additional exercises TBD)

### Part 3: Advanced Projects (Planned)
- Meeting transcriber application build
- Custom workflow creation
- Advanced prompt engineering
- (content TBD based on Part 2 outcomes)

---

**Document Version:** 1.0
**Maintained By:** AI Technology Lead, Austin Public Health
**Review Cycle:** After each workshop session
