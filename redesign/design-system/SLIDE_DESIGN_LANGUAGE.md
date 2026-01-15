# Slide Design Language System
## Austin Public Health — Voice-Driven AI Development Workshop

**Version:** 1.0
**Created:** January 2025
**Purpose:** Single source of truth for all presentation visual patterns, with hot-swappable theming

---

## Table of Contents

1. [Theme Configuration](#1-theme-configuration)
2. [Slide Layouts](#2-slide-layouts)
3. [Typography System](#3-typography-system)
4. [Component Library](#4-component-library)
5. [Callout System](#5-callout-system)
6. [Tables](#6-tables)
7. [Step & Process Patterns](#7-step--process-patterns)
8. [Cards & Containers](#8-cards--containers)
9. [Code & Prompt Blocks](#9-code--prompt-blocks)
10. [Badges & Labels](#10-badges--labels)
11. [Special Elements](#11-special-elements)
12. [Composition Patterns](#12-composition-patterns)
13. [Edge Cases & Nesting](#13-edge-cases--nesting)

---

## 1. Theme Configuration

### 1.1 Design Token Structure

All colors are defined as CSS custom properties for easy hot-swapping. To re-theme for a different brand (e.g., City of Austin), replace the values in `--theme-*` variables.

```css
:root {
  /* ═══════════════════════════════════════════════════════════════════════════
     THEME LAYER — Hot-swappable brand colors
     Replace these values to re-theme the entire presentation
     ═══════════════════════════════════════════════════════════════════════════ */

  /* Primary Brand Colors */
  --theme-primary: #1a1f2e;           /* Main dark color (navy) */
  --theme-primary-light: #2d3548;     /* Lighter variant for gradients */
  --theme-primary-dark: #12151f;      /* Darker variant for depth */
  --theme-accent: #c9a227;            /* Accent/highlight color (gold) */
  --theme-accent-light: #e3c560;      /* Lighter accent for hover states */

  /* Secondary Brand Colors (for callouts, badges) */
  --theme-secondary-1: #0ea5e9;       /* Informational blue */
  --theme-secondary-2: #8b5cf6;       /* Advanced/special purple */

  /* Surface Colors */
  --theme-surface-light: #f7f8fa;     /* Light backgrounds */
  --theme-surface-white: #ffffff;     /* Card backgrounds */
  --theme-surface-dark: #252b3d;      /* Dark card backgrounds */

  /* Text Colors */
  --theme-text-primary: #1a1f2e;      /* Primary text on light */
  --theme-text-secondary: #6b7280;    /* Secondary/muted text */
  --theme-text-tertiary: #9ca3af;     /* Tertiary/subtle text */
  --theme-text-inverse: #ffffff;      /* Text on dark backgrounds */

  /* Border Colors */
  --theme-border-light: #e4e7ed;      /* Standard borders */
  --theme-border-strong: #d1d5db;     /* Emphasized borders */


  /* ═══════════════════════════════════════════════════════════════════════════
     SEMANTIC LAYER — Functional colors (derive from theme when rebranding)
     ═══════════════════════════════════════════════════════════════════════════ */

  /* Status Colors */
  --color-success: #059669;           /* Success, safe, local, beginner */
  --color-success-bg: #dcfce7;
  --color-success-border: #059669;
  --color-success-text: #166534;

  --color-warning: #f59e0b;           /* Warning, caution, attention */
  --color-warning-bg: #fef3c7;
  --color-warning-border: #f59e0b;
  --color-warning-text: #92400e;

  --color-danger: #dc2626;            /* Error, danger, cloud/PHI risk */
  --color-danger-bg: #fef2f2;
  --color-danger-border: #dc2626;
  --color-danger-text: #991b1b;

  --color-info: #3b82f6;              /* Informational, intermediate */
  --color-info-bg: #dbeafe;
  --color-info-border: #3b82f6;
  --color-info-text: #1e40af;

  --color-advanced: #8b5cf6;          /* Advanced, special patterns */
  --color-advanced-bg: #ede9fe;
  --color-advanced-border: #8b5cf6;
  --color-advanced-text: #5b21b6;

  /* Difficulty Levels (for badges) */
  --color-beginner: var(--color-success);
  --color-intermediate: var(--color-info);
  --color-expert: var(--color-advanced);
}
```

### 1.2 Theme Switching Example

To rebrand for City of Austin (example):

```css
/* City of Austin Theme Override */
:root {
  --theme-primary: #00454a;           /* COA Teal */
  --theme-primary-light: #006d75;
  --theme-accent: #f5a623;            /* COA Orange */
  --theme-accent-light: #ffbd4a;
  /* ... other overrides ... */
}
```

### 1.3 Slide Dimensions

```css
:root {
  /* Fixed presentation dimensions */
  --slide-width: 960px;
  --slide-height: 540px;

  /* Standard padding values */
  --slide-padding-xl: 48px;           /* Full-width slide margins */
  --slide-padding-lg: 40px;           /* Standard content padding */
  --slide-padding-md: 32px;           /* Compact layouts */
  --slide-padding-sm: 28px;           /* Dense information */
  --slide-padding-xs: 24px;           /* Very compact */
}
```

---

## 2. Slide Layouts

### 2.1 Layout Types Inventory

| Layout Type | Usage | Split Ratio |
|-------------|-------|-------------|
| **Full Dark** | Section openers, title slides | 100% |
| **Full Light** | Dense content, tables | 100% |
| **Split 40/60** | Overview + details | Left 40%, Right 60% |
| **Split 50/50** | Comparisons (Free vs Pro) | Equal halves |
| **Split 55/45** | Quote + stats, feature + highlight | Flexible |
| **Three Column** | Feature grids, benefits | 33/33/33 |
| **Four Column** | Role cards, audience segments | 25/25/25/25 |

### 2.2 Full Dark Layout

```html
<body class="col" style="
  width: 960px;
  height: 540px;
  background: linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-primary-light) 100%);
">
```

**Use for:** Section dividers, title slides, emphasis slides

### 2.3 Full Light Layout

```html
<body class="col" style="
  width: 960px;
  height: 540px;
  background: var(--theme-surface-light);
">
```

**Use for:** Content-heavy slides, tables, step-by-step instructions

### 2.4 Split Layout (Dark Left / Light Right)

```html
<body class="row" style="width: 960px; height: 540px;">
  <div class="col" style="width: 40%; height: 100%; background: var(--theme-primary); padding: 28px;">
    <!-- Overview content -->
  </div>
  <div class="col" style="width: 60%; height: 100%; background: var(--theme-surface-light); padding: 24px 28px;">
    <!-- Detail content -->
  </div>
</body>
```

**Use for:** Feature overviews, mode descriptions, tool introductions

### 2.5 Comparison Layout (50/50)

```html
<body class="row" style="width: 960px; height: 540px;">
  <div class="col" style="width: 50%; height: 100%; background: var(--theme-surface-light); padding: 36px 32px;">
    <!-- Option A -->
  </div>
  <div class="col" style="width: 50%; height: 100%; background: var(--theme-primary); padding: 36px 32px;">
    <!-- Option B -->
  </div>
</body>
```

**Use for:** Free vs Pro, GCC vs GCC-High, Before/After comparisons

---

## 3. Typography System

### 3.1 Font Stack

```css
:root {
  /* Display/Headings */
  --font-display: Georgia, 'Times New Roman', serif;

  /* Body/UI */
  --font-body: Arial, Helvetica, sans-serif;

  /* Code/Commands */
  --font-mono: Consolas, Monaco, 'Courier New', monospace;
}
```

### 3.2 Type Scale

| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| **Slide Title** | Georgia | 32-36px | 400 | 1.2 | Text primary |
| **Section Title** | Georgia | 44-52px | 400 | 1.1 | White |
| **Subtitle** | Arial | 14-18px | 400 | 1.3 | Muted |
| **Eyebrow** | Arial | 10-11px | 700 | 1.2 | Accent (uppercase, letter-spacing: 3px) |
| **Card Title** | Georgia | 14-18px | 600 | 1.2 | Text primary |
| **Body Text** | Arial | 11-12px | 400 | 1.5-1.7 | Muted or inverse |
| **Caption** | Arial | 9-10px | 400 | 1.4 | Tertiary |
| **Code** | Consolas | 8-14px | 400-700 | 1.4 | Accent for tags |
| **Badge** | Arial | 9-10px | 700 | 1.2 | Various (uppercase) |

### 3.3 Eyebrow Pattern

The signature identifier pattern across all slides:

```html
<p style="
  color: var(--theme-accent);
  font-size: 11px;
  letter-spacing: 3px;
  margin: 0 0 8px 0;
  font-family: Arial, sans-serif;
">SECTION LABEL</p>
```

---

## 4. Component Library

### 4.1 Component Inventory

| Component | Variants | Primary Use |
|-----------|----------|-------------|
| **Callout Box** | Success, Warning, Danger, Info, Tip, Advanced | Alerts, notes, tips |
| **Feature Card** | Light, Dark, Accent-bordered | Feature lists |
| **Step Block** | Numbered (gold), Numbered (green final) | Instructions |
| **Code Block** | Full, Compact, Inline | Prompts, commands |
| **Comparison Box** | Before/After, Option A/B | Side-by-side |
| **Stat Block** | Large number + label | Statistics |
| **Badge** | FREE, PRO, LOCAL, CLOUD, difficulty levels | Labels |
| **Quote Block** | Large quote mark + attribution | Quotes |
| **Process Flow** | Horizontal arrows, vertical flow | Workflows |

---

## 5. Callout System

### 5.1 Callout Base Pattern

All callouts follow this structure:

```html
<div style="
  background: [BACKGROUND_COLOR];
  border-left: 4px solid [BORDER_COLOR];
  padding: 12px;
">
  <p style="
    color: [TITLE_COLOR];
    font-size: 10px;
    font-weight: 700;
    margin: 0 0 4px 0;
  ">[TITLE]</p>
  <p style="
    color: [TEXT_COLOR];
    font-size: 9px;
    margin: 0;
    line-height: 1.4;
  ">[Content]</p>
</div>
```

### 5.2 Callout Variants

#### Success / Safe / Local
```css
background: var(--color-success-bg);       /* #dcfce7 */
border-color: var(--color-success-border); /* #059669 */
title-color: var(--color-success-text);    /* #166534 */
text-color: var(--color-success-text);     /* #166534 */
```

**Use for:** PHI-safe notices, success confirmations, local processing indicators

#### Warning / Caution
```css
background: var(--color-warning-bg);       /* #fef3c7 */
border-color: var(--color-warning-border); /* #f59e0b */
title-color: var(--color-warning-text);    /* #92400e */
text-color: var(--color-warning-text);     /* #92400e */
```

**Use for:** Cautions, notes, XML compatibility warnings

#### Danger / Error / PHI Risk
```css
background: var(--color-danger-bg);        /* #fef2f2 */
border-color: var(--color-danger-border);  /* #dc2626 */
title-color: var(--color-danger-text);     /* #991b1b */
text-color: var(--color-danger-text);      /* #991b1b */
```

**Use for:** Cloud warnings, PHI risks, things to avoid

#### Info / Intermediate
```css
background: var(--color-info-bg);          /* #dbeafe */
border-color: var(--color-info-border);    /* #3b82f6 */
title-color: var(--color-info-text);       /* #1e40af */
text-color: var(--color-info-text);        /* #1e40af */
```

**Use for:** Examples, informational notes, intermediate content

#### Advanced / Special
```css
background: var(--color-advanced-bg);      /* #ede9fe */
border-color: var(--color-advanced-border);/* #8b5cf6 */
title-color: var(--color-advanced-text);   /* #5b21b6 */
text-color: var(--color-advanced-text);    /* #5b21b6 */
```

**Use for:** Advanced patterns, power user features

#### Tip / Accent (Theme-colored)
```css
background: rgba(201, 162, 39, 0.15);      /* accent at 15% opacity */
border-color: var(--theme-accent);         /* #c9a227 */
title-color: var(--theme-accent);          /* #c9a227 */
text-color: rgba(255, 255, 255, 0.7);      /* for dark backgrounds */
```

**Use for:** Pro tips, use cases, accent information

### 5.3 Callout on Dark Backgrounds

When placing callouts on dark backgrounds, use the tip/accent variant:

```html
<div style="
  background: rgba(201, 162, 39, 0.15);
  border-left: 3px solid var(--theme-accent);
  padding: 12px;
">
  <p style="color: var(--theme-accent); font-size: 10px; font-weight: 700; margin: 0 0 4px 0;">USE CASE</p>
  <p style="color: rgba(255,255,255,0.7); font-size: 9px; margin: 0; line-height: 1.4;">Content here...</p>
</div>
```

---

## 6. Tables

### 6.1 Table Styling Pattern

Tables use a clean, professional appearance with subtle depth:

```html
<!-- Table Container -->
<div style="
  background: var(--theme-surface-white);
  border: 1px solid var(--theme-border-light);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
">
  <!-- Table Header Row -->
  <div class="row" style="
    background: var(--theme-primary);
    padding: 10px 12px;
  ">
    <p style="color: var(--theme-text-inverse); font-size: 10px; font-weight: 700;">COLUMN 1</p>
    <!-- ... more columns -->
  </div>

  <!-- Table Body Rows -->
  <div class="row" style="
    padding: 10px 12px;
    border-bottom: 1px solid var(--theme-border-light);
  ">
    <!-- Row content -->
  </div>
</div>
```

### 6.2 Table Cell Treatments

| Cell Type | Background | Border | Text Color |
|-----------|------------|--------|------------|
| **Header** | theme-primary | none | text-inverse |
| **Body (odd)** | surface-white | bottom | text-primary |
| **Body (even)** | surface-light | bottom | text-primary |
| **Highlight** | accent @ 10% | left accent | text-primary |
| **Success** | success-bg | left success | success-text |
| **Warning** | warning-bg | left warning | warning-text |

### 6.3 Drop Shadow for Tables

Standard table shadow for visual depth:

```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
/* For more prominent tables: */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
```

---

## 7. Step & Process Patterns

### 7.1 Numbered Step Block

The primary instruction pattern:

```html
<div class="row items-center" style="background: var(--theme-primary); padding: 12px;">
  <div style="
    width: 24px;
    height: 24px;
    background: var(--theme-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  ">
    <p style="color: var(--theme-primary); font-size: 11px; font-weight: 700; margin: 0;">1</p>
  </div>
  <div>
    <p style="color: var(--theme-text-inverse); font-size: 11px; margin: 0; font-weight: 600;">Step Title</p>
    <p style="color: rgba(255,255,255,0.6); font-size: 9px; margin: 2px 0 0 0;">Step description</p>
  </div>
</div>
```

### 7.2 Final Step Variant (Success)

For the last step in a sequence:

```html
<div style="
  width: 24px;
  height: 24px;
  background: var(--color-success);  /* Green instead of gold */
  display: flex;
  align-items: center;
  justify-content: center;
">
  <p style="color: var(--theme-text-inverse); font-size: 12px; font-weight: 700; margin: 0;">5</p>
</div>
```

### 7.3 Large Numbered Cards

For benefits or feature grids:

```html
<div class="col" style="flex: 1; background: var(--theme-surface-dark); padding: 24px;">
  <div style="
    width: 40px;
    height: 40px;
    background: var(--theme-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  ">
    <p style="color: var(--theme-primary); font-size: 20px; margin: 0;">01</p>
  </div>
  <p style="color: var(--theme-text-inverse); font-size: 16px; font-family: Georgia, serif; margin: 0 0 12px 0;">Card Title</p>
  <p style="color: rgba(255,255,255,0.6); font-size: 12px; font-family: Arial, sans-serif; margin: 0; line-height: 1.7;">
    Feature line 1<br/>Feature line 2<br/>Feature line 3
  </p>
</div>
```

### 7.4 Process Flow (Horizontal)

```html
<div class="row items-center justify-center" style="gap: 8px;">
  <div style="background: var(--theme-surface-white); border: 1px solid var(--theme-border-light); padding: 8px 16px;">
    <p style="font-size: 11px; margin: 0;">Step 1</p>
  </div>
  <p style="color: var(--theme-accent); font-size: 16px; margin: 0;">→</p>
  <div style="background: var(--theme-accent); padding: 8px 16px;">
    <p style="color: var(--theme-primary); font-size: 11px; font-weight: 600; margin: 0;">Step 2 (highlight)</p>
  </div>
  <p style="color: var(--theme-accent); font-size: 16px; margin: 0;">→</p>
  <div style="background: var(--theme-surface-white); border: 1px solid var(--theme-border-light); padding: 8px 16px;">
    <p style="font-size: 11px; margin: 0;">Step 3</p>
  </div>
</div>
```

### 7.5 Vertical Flow Pattern

For showing transformations or pipelines:

```html
<div style="background: rgba(255,255,255,0.05); padding: 12px;">
  <p style="color: var(--theme-text-inverse); font-size: 10px; font-weight: 700; margin: 0 0 6px 0;">THE PATTERN</p>
  <p style="color: rgba(255,255,255,0.6); font-size: 9px; margin: 0; line-height: 1.5;">
    Raw speech describing a task<br/>
    ↓<br/>
    Structured task specification<br/>
    ↓<br/>
    AI agent executes autonomously
  </p>
</div>
```

---

## 8. Cards & Containers

### 8.1 Light Card with Accent Border

The signature feature card pattern:

```html
<div style="
  background: var(--theme-surface-white);
  border-left: 4px solid var(--theme-accent);
  padding: 16px;
">
  <p style="
    color: var(--theme-text-primary);
    font-size: 13px;
    font-family: Georgia, serif;
    font-weight: 600;
    margin: 0 0 6px 0;
  ">Card Title</p>
  <p style="
    color: var(--theme-text-secondary);
    font-size: 11px;
    font-family: Arial, sans-serif;
    margin: 0;
    line-height: 1.5;
  ">Card description content goes here.</p>
</div>
```

### 8.2 Dark Card

For contrast or emphasis sections:

```html
<div style="
  background: var(--theme-primary);
  padding: 16px;
">
  <p style="
    color: var(--theme-accent);
    font-size: 13px;
    font-family: Georgia, serif;
    font-weight: 600;
    margin: 0 0 6px 0;
  ">Card Title</p>
  <p style="
    color: rgba(255,255,255,0.7);
    font-size: 11px;
    font-family: Arial, sans-serif;
    margin: 0;
    line-height: 1.5;
  ">Card content on dark background.</p>
</div>
```

### 8.3 Bordered Card (Light)

For standard content grouping:

```html
<div style="
  background: var(--theme-surface-white);
  border: 1px solid var(--theme-border-light);
  padding: 14px;
">
  <!-- Content -->
</div>
```

### 8.4 Dark Surface Card

For cards on dark backgrounds:

```html
<div style="
  background: var(--theme-surface-dark);  /* #252b3d */
  padding: 10px;
">
  <p style="color: rgba(255,255,255,0.7); font-size: 10px; margin: 0; text-align: center;">
    Secondary information
  </p>
</div>
```

### 8.5 Series/Roadmap Card

For timeline or series displays:

```html
<!-- Active Card -->
<div class="col" style="flex: 1; background: var(--theme-primary); padding: 28px; position: relative;">
  <div style="position: absolute; top: -10px; left: 24px; background: var(--theme-accent); padding: 4px 16px;">
    <p style="color: var(--theme-primary); font-size: 10px; font-family: Arial, sans-serif; font-weight: 700; margin: 0; letter-spacing: 1px;">TODAY</p>
  </div>
  <p style="color: var(--theme-accent); font-size: 48px; font-family: Georgia, serif; margin: 0 0 4px 0;">01</p>
  <p style="color: var(--theme-text-inverse); font-size: 18px; font-family: Georgia, serif; margin: 0 0 16px 0;">Title</p>
  <p style="color: rgba(255,255,255,0.6); font-size: 12px; font-family: Arial, sans-serif; margin: 0; line-height: 1.8;">
    Item 1<br/>Item 2<br/>Item 3
  </p>
</div>

<!-- Inactive Card -->
<div class="col" style="flex: 1; background: var(--theme-surface-white); border: 1px solid var(--theme-border-light); padding: 28px;">
  <p style="color: var(--theme-accent); font-size: 48px; font-family: Georgia, serif; margin: 0 0 4px 0;">02</p>
  <p style="color: var(--theme-text-primary); font-size: 18px; font-family: Georgia, serif; margin: 0 0 16px 0;">Title</p>
  <p style="color: var(--theme-text-secondary); font-size: 12px; font-family: Arial, sans-serif; margin: 0; line-height: 1.8;">
    Item 1<br/>Item 2<br/>Item 3
  </p>
</div>
```

---

## 9. Code & Prompt Blocks

### 9.1 Full Code Block

For displaying XML-structured prompts:

```html
<div style="
  background: var(--theme-primary);
  padding: 14px;
  font-family: monospace;
  margin-bottom: 10px;
  overflow: hidden;
">
  <p style="color: var(--theme-accent); font-size: 8px; margin: 0 0 6px 0;">&lt;role&gt;</p>
  <p style="color: rgba(255,255,255,0.85); font-size: 8px; margin: 0 0 6px 0; padding-left: 8px;">
    You are a professional email editor
  </p>
  <p style="color: var(--theme-accent); font-size: 8px; margin: 0 0 6px 0;">&lt;/role&gt;</p>
  <!-- Continue pattern for other tags... -->
</div>
```

### 9.2 Inline Code

For command references within text:

```html
<p style="
  color: var(--theme-accent);
  font-size: 14px;
  font-family: monospace;
  font-weight: 700;
  margin: 0 0 4px 0;
">/clear</p>
```

### 9.3 Code Example Box

For input/output examples:

```html
<div class="row" style="gap: 10px;">
  <!-- Input -->
  <div style="flex: 1; background: var(--color-info-bg); border-left: 3px solid var(--color-info-border); padding: 10px;">
    <p style="color: var(--color-info-text); font-size: 9px; font-weight: 700; margin: 0 0 4px 0;">EXAMPLE INPUT</p>
    <p style="color: var(--color-info-text); font-size: 8px; margin: 0; line-height: 1.4;">"hey can you let Sarah know..."</p>
  </div>
  <!-- Output -->
  <div style="flex: 1; background: var(--theme-surface-white); border: 1px solid var(--theme-border-light); padding: 10px;">
    <p style="color: var(--theme-text-primary); font-size: 9px; font-weight: 700; margin: 0 0 4px 0;">EXAMPLE OUTPUT</p>
    <p style="color: var(--theme-text-secondary); font-size: 8px; margin: 0; line-height: 1.4;">Hey @Sarah, heads up...</p>
  </div>
</div>
```

---

## 10. Badges & Labels

### 10.1 Badge Base Pattern

```html
<div style="
  background: [COLOR];
  padding: 6px 12px;
  display: inline-block;
">
  <p style="
    color: [TEXT_COLOR];
    font-size: 10px;
    font-weight: 700;
    margin: 0;
    letter-spacing: 1px;
  ">[LABEL]</p>
</div>
```

### 10.2 Badge Variants

| Badge | Background | Text | Use |
|-------|------------|------|-----|
| **FREE** | `#059669` | white | Free tier |
| **PRO** | `--theme-accent` | `--theme-primary` | Paid tier |
| **LOCAL** | `#059669` | white | Local processing |
| **CLOUD** | `#dc2626` | white | Cloud processing |
| **RECOMMENDED** | `#0ea5e9` | white | Best option |
| **TODAY** | `--theme-accent` | `--theme-primary` | Current item |
| **MOST COMMON** | `--theme-accent` | `--theme-primary` | Default choice |
| **BEGINNER** | `#059669` | white | Difficulty |
| **INTERMEDIATE** | `#3b82f6` | white | Difficulty |
| **ADVANCED** | `#8b5cf6` | white | Difficulty |
| **MODE 1 OF 5** | `#059669` | white | Sequence position |
| **ADVANCED PATTERN** | `#8b5cf6` | white | Special pattern |

### 10.3 Positioned Badge (Floating)

For badges that sit above cards:

```html
<div style="position: relative;">
  <div style="
    position: absolute;
    top: -10px;
    left: 24px;
    background: var(--theme-accent);
    padding: 4px 16px;
  ">
    <p style="color: var(--theme-primary); font-size: 10px; font-weight: 700; margin: 0; letter-spacing: 1px;">TODAY</p>
  </div>
  <!-- Card content -->
</div>
```

---

## 11. Special Elements

### 11.1 Quote Block

```html
<div class="col fill-height justify-center">
  <p style="color: var(--theme-accent); font-size: 64px; font-family: Georgia, serif; margin: 0; line-height: 0.8;">"</p>
  <p style="color: var(--theme-text-inverse); font-size: 22px; font-family: Georgia, serif; font-style: italic; margin: 0 0 24px 0; line-height: 1.5;">
    Quote text goes here.
  </p>
  <div style="width: 48px; height: 2px; background: var(--theme-accent); margin: 0 0 16px 0;"></div>
  <p style="color: rgba(255,255,255,0.5); font-size: 12px; font-family: Arial, sans-serif; margin: 0;">
    Attribution
  </p>
</div>
```

### 11.2 Large Stat Display

```html
<div>
  <p style="color: var(--theme-accent); font-size: 72px; font-family: Georgia, serif; margin: 0; line-height: 1;">150</p>
  <p style="color: var(--theme-text-primary); font-size: 14px; font-family: Arial, sans-serif; margin: 4px 0 0 0;">words per minute speaking</p>
</div>
```

### 11.3 Divider Line (Gold)

```html
<div style="width: 80px; height: 2px; background: var(--theme-accent); margin: 0 0 24px 0;"></div>
```

For centered section dividers:
```html
<div style="width: 80px; height: 3px; background: var(--theme-accent); margin: 0 auto 24px auto;"></div>
```

### 11.4 Gray Horizontal Divider

```html
<div style="width: 100%; height: 1px; background: var(--theme-border-light);"></div>
```

### 11.5 Bottom Callout Bar

Full-width emphasis bar at slide bottom:

```html
<div style="margin: 0 48px 32px 48px; background: var(--theme-primary); padding: 20px 24px;">
  <p style="color: var(--theme-text-inverse); font-size: 14px; font-family: Arial, sans-serif; margin: 0; text-align: center;">
    Everyone benefits from voice input — it's not just for coders
  </p>
</div>
```

Gold variant for stronger emphasis:
```html
<div style="margin: 0 48px 32px 48px; background: var(--theme-accent); padding: 20px 24px;">
  <p style="color: var(--theme-primary); font-size: 14px; font-family: Arial, sans-serif; margin: 0; text-align: center; font-weight: 600;">
    Part 2 is all hands-on - bring your laptop and a project
  </p>
</div>
```

### 11.6 Time/Duration Badge Box

For section openers:

```html
<div style="margin-top: 40px; padding: 16px 32px; background: rgba(201,162,39,0.15); border: 1px solid rgba(201,162,39,0.3);">
  <p style="color: var(--theme-accent); font-size: 14px; font-family: Arial, sans-serif; margin: 0;">5 minutes</p>
</div>
```

### 11.7 Context Example Box

For showing input/output transformations:

```html
<div style="flex: 1; background: rgba(201,162,39,0.1); border: 1px solid var(--theme-accent); padding: 14px;">
  <p style="color: var(--theme-text-primary); font-size: 11px; font-weight: 700; margin: 0 0 4px 0; font-family: Arial, sans-serif;">CODING CONTEXT EXAMPLE</p>
  <p style="color: var(--theme-text-secondary); font-size: 11px; margin: 0; line-height: 1.5; font-family: Arial, sans-serif;">
    Say: "create a function called calculate total"<br/>
    Output: <span style="font-family: monospace;">function calculateTotal(price, quantity)</span>
  </p>
</div>
```

---

## 12. Composition Patterns

### 12.1 Feature Overview Slide

Standard pattern for introducing a tool or mode:

```
┌─────────────────────────────────────────────────────────────────┐
│ [DARK 40%]                    │ [LIGHT 60%]                     │
│                               │                                 │
│  [BADGE: MODE X OF Y]         │  SAMPLE AI INSTRUCTIONS         │
│                               │  ┌───────────────────────────┐  │
│  Title                        │  │  <code block>             │  │
│  ───────                      │  │                           │  │
│                               │  └───────────────────────────┘  │
│  [Callout: USE CASE]          │                                 │
│                               │  [Example Input] [Output]       │
│  [Settings box]               │                                 │
│                               │  [Pro tip callout]              │
│  [Warning callout]            │                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 12.2 Comparison Slide

```
┌─────────────────────────────────────────────────────────────────┐
│ [LIGHT or WHITE 50%]          │ [DARK 50%]                      │
│                               │                                 │
│  [Badge: FREE]                │  [Badge: PRO]                   │
│                               │                                 │
│  ┌─────────────────────────┐  │  ┌─────────────────────────┐    │
│  │ Feature Card (success)  │  │  │ Feature Card (accent)   │    │
│  └─────────────────────────┘  │  └─────────────────────────┘    │
│                               │                                 │
│  [Success callout]            │  [Gold callout]                 │
└─────────────────────────────────────────────────────────────────┘
```

### 12.3 Three-Column Feature Grid

```
┌─────────────────────────────────────────────────────────────────┐
│  [Header: Eyebrow + Title]                                      │
├─────────────────────────────────────────────────────────────────┤
│  [Card 1]         [Card 2]         [Card 3]                     │
│  ┌───────────┐    ┌───────────┐    ┌───────────┐                │
│  │ [Number]  │    │ [Number]  │    │ [Number]  │                │
│  │ Title     │    │ Title     │    │ Title     │                │
│  │ • item    │    │ • item    │    │ • item    │                │
│  │ • item    │    │ • item    │    │ • item    │                │
│  └───────────┘    └───────────┘    └───────────┘                │
└─────────────────────────────────────────────────────────────────┘
```

### 12.4 Command Reference Slide

```
┌─────────────────────────────────────────────────────────────────┐
│  [Header]                                                       │
├─────────────────────────────────────────────────────────────────┤
│  [Category 1]      [Category 2]      [Category 3]               │
│  ┌────────────┐    ┌────────────┐    ┌────────────┐             │
│  │ /command1  │    │ /commandA  │    │ /commandX  │             │
│  │ desc       │    │ desc       │    │ desc       │             │
│  │            │    │            │    │            │             │
│  │ /command2  │    │ /commandB  │    │ /commandY  │             │
│  │ desc       │    │ desc       │    │ desc       │             │
│  └────────────┘    └────────────┘    └────────────┘             │
└─────────────────────────────────────────────────────────────────┘
```

---

## 13. Edge Cases & Nesting

### 13.1 Callout Within Step

When a step needs an inline warning:

```html
<div class="row items-center" style="background: var(--theme-primary); padding: 12px;">
  <div style="width: 24px; height: 24px; background: var(--theme-accent); display: flex; align-items: center; justify-content: center; margin-right: 10px;">
    <p style="color: var(--theme-primary); font-size: 11px; font-weight: 700; margin: 0;">3</p>
  </div>
  <div style="flex: 1;">
    <p style="color: var(--theme-text-inverse); font-size: 11px; margin: 0; font-weight: 600;">Grant Microphone Access</p>
    <p style="color: rgba(255,255,255,0.6); font-size: 9px; margin: 2px 0 0 0;">System Settings > Privacy > Microphone</p>
  </div>
</div>
<!-- Nested callout immediately after the step -->
<div style="background: var(--color-warning-bg); border-left: 4px solid var(--color-warning-border); padding: 8px 12px; margin-top: 4px; margin-left: 34px;">
  <p style="color: var(--color-warning-text); font-size: 8px; margin: 0;">Required for app to function</p>
</div>
```

### 13.2 Code Within Callout

```html
<div style="background: var(--theme-surface-white); border: 1px solid var(--theme-accent); padding: 12px;">
  <p style="color: var(--theme-text-primary); font-size: 10px; font-weight: 700; margin: 0 0 4px 0;">TELL AI IT'S DICTATED</p>
  <p style="color: var(--theme-text-secondary); font-size: 9px; margin: 0; line-height: 1.4;">
    <span style="font-family: monospace; background: var(--theme-surface-light); padding: 1px 4px;">
      "The User Message contains dictated speech..."
    </span>
  </p>
</div>
```

### 13.3 Multiple Callouts in Sequence

Stack with consistent spacing:

```html
<div class="col" style="gap: 8px;">
  <div style="background: var(--color-success-bg); border-left: 4px solid var(--color-success-border); padding: 12px;">
    <!-- Success callout -->
  </div>
  <div style="background: var(--color-info-bg); border-left: 4px solid var(--color-info-border); padding: 12px;">
    <!-- Info callout -->
  </div>
  <div style="background: var(--color-warning-bg); border-left: 4px solid var(--color-warning-border); padding: 12px;">
    <!-- Warning callout -->
  </div>
</div>
```

### 13.4 Cards Within Split Layout

Maintain consistent card margins within panels:

```html
<div class="col" style="width: 60%; height: 100%; background: var(--theme-surface-light); padding: 24px 28px;">
  <div style="background: var(--theme-surface-white); border: 1px solid var(--theme-border-light); padding: 14px; margin-bottom: 10px;">
    <!-- Card 1 -->
  </div>
  <div style="background: var(--theme-surface-white); border: 1px solid var(--theme-border-light); padding: 14px; margin-bottom: 10px;">
    <!-- Card 2 -->
  </div>
  <div style="background: var(--theme-primary); padding: 12px 14px;">
    <!-- Dark emphasis card -->
  </div>
</div>
```

### 13.5 Table Within Card

```html
<div style="background: var(--theme-surface-white); border: 1px solid var(--theme-border-light); padding: 16px;">
  <p style="color: var(--theme-text-primary); font-size: 12px; font-weight: 700; margin: 0 0 12px 0;">COMPARISON TABLE</p>

  <!-- Nested table with reduced padding -->
  <div style="border: 1px solid var(--theme-border-light); overflow: hidden;">
    <div class="row" style="background: var(--theme-primary); padding: 8px 10px;">
      <p style="flex: 1; color: var(--theme-text-inverse); font-size: 9px; font-weight: 700; margin: 0;">FEATURE</p>
      <p style="flex: 1; color: var(--theme-text-inverse); font-size: 9px; font-weight: 700; margin: 0;">VALUE</p>
    </div>
    <div class="row" style="padding: 8px 10px; border-bottom: 1px solid var(--theme-border-light);">
      <p style="flex: 1; color: var(--theme-text-primary); font-size: 9px; margin: 0;">Row 1</p>
      <p style="flex: 1; color: var(--theme-text-secondary); font-size: 9px; margin: 0;">Value 1</p>
    </div>
  </div>
</div>
```

---

## Appendix A: Color Quick Reference

### Theme Colors (Hot-Swappable)

| Token | Default Value | Usage |
|-------|---------------|-------|
| `--theme-primary` | `#1a1f2e` | Dark backgrounds |
| `--theme-primary-light` | `#2d3548` | Gradients |
| `--theme-accent` | `#c9a227` | Highlights, dividers |
| `--theme-surface-light` | `#f7f8fa` | Light backgrounds |
| `--theme-surface-white` | `#ffffff` | Card backgrounds |
| `--theme-surface-dark` | `#252b3d` | Dark cards |
| `--theme-text-primary` | `#1a1f2e` | Primary text |
| `--theme-text-secondary` | `#6b7280` | Muted text |
| `--theme-border-light` | `#e4e7ed` | Borders |

### Semantic Colors (Functional)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#059669` | Local, safe, beginner |
| `--color-warning` | `#f59e0b` | Caution, notes |
| `--color-danger` | `#dc2626` | Cloud, PHI risk |
| `--color-info` | `#3b82f6` | Info, intermediate |
| `--color-advanced` | `#8b5cf6` | Advanced patterns |

---

## Appendix B: Spacing Quick Reference

| Token | Value | Usage |
|-------|-------|-------|
| `--slide-padding-xl` | 48px | Full margins |
| `--slide-padding-lg` | 40px | Standard |
| `--slide-padding-md` | 32px | Compact |
| `--slide-padding-sm` | 28px | Dense |
| `--slide-padding-xs` | 24px | Very compact |

### Common Internal Spacing

| Gap | Pixels | Usage |
|-----|--------|-------|
| Tight | 4-6px | Between related elements |
| Normal | 8-10px | Standard spacing |
| Comfortable | 12-14px | Between sections |
| Generous | 16-20px | Major divisions |
| Wide | 24-32px | Column gaps |

---

**Document Version:** 1.0
**Maintained By:** AI Technology Lead, Austin Public Health
**Review Cycle:** Before each major presentation update or rebranding
