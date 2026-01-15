# Workshop Supplementary Materials

These HTML documents are designed to be printed or converted to PDF as handouts for attendees.

## Contents

### Quick Reference Guides
1. **01_Model_Cheat_Sheet.html** - All SuperWhisper voice models with speed, accuracy, and privacy ratings
2. **02_Mode_Cheat_Sheet.html** - Overview of modes, context settings, and when to use each

### Hands-On Exercise Worksheets
3. **03_Exercise_Local_Email_Mode.html** - Step-by-step: Create a local email mode (PHI-safe)
4. **04_Exercise_Cloud_Email_Mode.html** - Step-by-step: Create a Claude Sonnet-powered email mode
5. **05_Exercise_Coding_Mode.html** - Step-by-step: Create a VS Code coding assistant mode
6. **06_Exercise_Teams_Chat_Mode.html** - Step-by-step: Create a Microsoft Teams chat mode
7. **07_Exercise_Custom_Vocabulary.html** - Step-by-step: Configure vocabulary and replacements

## Converting to PDF

### Option 1: Browser Print (Easiest)
1. Open the HTML file in Chrome or Edge
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Select "Save as PDF" as the destination
4. Click Save

### Option 2: LibreOffice (Batch)
```bash
for f in *.html; do
  soffice --headless --convert-to pdf "$f"
done
```

### Option 3: wkhtmltopdf (Command Line)
```bash
for f in *.html; do
  wkhtmltopdf "$f" "${f%.html}.pdf"
done
```

## Usage Notes

- These are standalone documents - each can be printed/distributed independently
- Designed for letter/A4 paper size
- Best printed in color for visual hierarchy, but grayscale is readable
- Each exercise worksheet is 2-3 pages and includes:
  - Learning objectives
  - Prerequisites
  - Step-by-step instructions
  - Practical tips
  - "What's happening" explanations
  - Next steps suggestions

## For Workshop Facilitators

Consider distributing:
- Cheat sheets (01, 02) → At the start of the session for reference
- Exercise worksheets → As "homework" for independent practice after the workshop

These materials support the "after-school lessons" model where attendees can:
1. Follow along during the live workshop
2. Practice independently using these detailed guides
3. Build confidence before Part 2 hands-on sessions
