# SuperWhisper Research Notes
*Compiled from official documentation and community sources*

## Mode Types Overview

### 1. Voice Mode
- Pure transcription - converts speech to text without AI processing
- Best for: Raw dictation when you want exact words captured
- No formatting or transformation applied

### 2. Super Mode
- Context-aware dictation with intelligent formatting
- **All three context types enabled by default:**
  - Application Context (which app you're in)
  - Selected Text Context (text you have highlighted)
  - Clipboard Context (what you've copied)
- Automatically includes system info: current date/time, your full name, computer name
- Best for: Adaptive formatting based on where you're typing

### 3. Note Mode
- Structures speech into organized lists and notes
- Best for: Capturing ideas, meeting notes, brainstorming

### 4. Custom Mode
- Full control over dictation processing
- Create specialized workflows with personalized AI instructions
- Can enable any combination of context types
- **3 custom modes FREE, unlimited with Pro**
- Best for: Application-specific workflows, specialized prompts

---

## Creating Custom Modes: Best Practices

### Structure Your AI Instructions

1. **Start with a clear role/purpose statement:**
```xml
<role>You are a text editor</role>
```

2. **Define specific instructions:**
```xml
<instructions>Format the content of User Message into clear paragraphs</instructions>
```

3. **List requirements:**
```xml
<requirements>
- Use simple, clear language
- Keep the casual tone
- Break into short paragraphs
</requirements>
```

### XML Tags (Optional)
- Improves clarity with advanced models
- Some local models may misinterpret XML tags
- Test your results for compatibility

### Adding Examples
- Include 2-3 examples to teach AI expected output
- Significantly improves accuracy
- Add in Advanced Settings sidebar

### Context-Aware Instructions
Reference context with specific titles:
- `User Message` - The dictated text
- `Application Context` - Current active app
- `Selected Text Context` - Highlighted text
- `Clipboard Context` - Recent clipboard content

Example instruction:
> "If Application Context shows a code editor: Format the User Message as code comments"

---

## Mode Switching Methods

### 1. Keyboard Shortcuts
- Assign unique shortcuts to each mode
- Configure in Keyboard Shortcuts section

### 2. Menu Bar / System Tray
- Click SuperWhisper icon to select mode
- Visual indicator shows current mode

### 3. Auto-Activation Rules
- Automatically switch modes based on active app/website
- Configure in each mode's settings
- Example: Auto-switch to "Coding Mode" when VS Code is active

### 4. Deep Links
- `superwhisper://settings` - Open settings
- Use `-g` flag in shell commands to keep focus on target app
- Combine with automation tools (Alfred, Raycast)

---

## AI Model Selection

### FREE Tier (Local - Privacy Safe)
| Model | Speed | Accuracy | Best For |
|-------|-------|----------|----------|
| Nano | Fastest | ~85% | Quick notes, casual use |
| Fast | Fast | ~88% | Everyday dictation |
| Standard | Medium | ~90% | Balanced use |

### PRO Tier - Local Models
| Model | Speed | Accuracy | Best For |
|-------|-------|----------|----------|
| Pro | Medium | ~92% | Professional work |
| Ultra Turbo v3 | Good | ~95% | Balance of speed + quality |

### PRO Tier - Cloud Models
| Model | Speed | Accuracy | Best For |
|-------|-------|----------|----------|
| Ultra | Fast | ~97% | Short dictations |
| Nova | Fast | ~97% | Longer recordings, speaker separation |

### Key Decision: Local vs Cloud
- **Local**: Data NEVER leaves device, works offline, PHI safe
- **Cloud**: Faster, higher accuracy, requires internet

---

## Vocabulary & Replacements

### Vocabulary Words
- Help AI recognize custom terms during transcription
- Use for: Acronyms, names, technical terms, brand names
- **Keep list SHORT** - too many words confuses AI
- Works with all models except Nova/Parakeet

### Replacements
- Applied AFTER transcription (programmatic, not AI)
- Case-insensitive matching
- Guaranteed consistent results
- Best for: Persistent errors, expanding abbreviations

Example replacements:
```
"todo" → "TODO"
"use state" → "`useState`"
"WP fusion" → "WP Fusion"
```

---

## Application-Specific Mode Ideas

### Email Mode
- Auto-format rambling thoughts into professional structure
- Include signature context
- Handle reply formatting

### Coding Mode
- Format as code comments when in IDE
- Reference clipboard for code style
- Technical terminology handling

### Teams/Slack Mode
- Casual conversational tone
- Handle @mentions
- Quick message formatting

### Documentation Mode
- Clear technical writing
- Numbered steps
- Code snippet formatting

### Meeting Notes Mode
- Bullet point structure
- Action items extraction
- Speaker identification

---

## Context Capture Timing

| Context Type | When Captured |
|--------------|---------------|
| Selected Text | Exactly when recording starts |
| Clipboard | Within 3 seconds before OR during recording |
| Application | After voice processing, before AI processing |

**Important:** Selected text capture requires focus to stay on the app containing the text.

---

## Common Issues & Tips

### Avoiding Hallucinations in Custom Modes
- Use precise prompt instructions
- Include clear examples
- Avoid conflicting directives
- Test with different models

### Performance Optimization
- Local model speed depends on your hardware
- Apple Silicon (M1-M4) best for local processing
- Intel Macs may need cloud models
- Larger models = more processing time

### Best Results
- Speak naturally (don't robot-speak)
- Use natural pauses instead of saying punctuation
- Hold-to-record for precise control
- Enable only necessary context types

---

## Sources

- [SuperWhisper Custom Modes](https://superwhisper.com/docs/modes/custom)
- [Mode Switching](https://superwhisper.com/docs/modes/switching-modes)
- [AI Models](https://superwhisper.com/docs/get-started/interface-ai-models)
- [Vocabulary](https://superwhisper.com/docs/get-started/interface-vocabulary)
- [SuperWhisper Trainer](https://github.com/verygoodplugins/superwhisper-trainer)
- [Cursor + SuperWhisper Integration](https://rolloutit.net/code-without-typing-integration-between-cursor-ai-and-superwhisper/)
