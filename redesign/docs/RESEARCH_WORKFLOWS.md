# Application-Specific Voice Workflow Research
*Best practices for different contexts*

## Voice + Claude Code Workflow

### The Setup
- SuperWhisper for voice capture (hold key, speak, release)
- Claude Code in terminal
- Paste dictated commands directly

### Best Practices
1. **Give context first** - Tell Claude about your project before commands
2. **Speak detailed instructions** - Voice is great for longer explanations
3. **Use for:**
   - Detailed code reviews
   - Documentation drafting
   - Debugging sessions
   - Architecture brainstorming

### Integration Options
- **VoiceMode MCP** - Voice conversations directly in Claude Code
- **Listen Claude Code** - CLI tool with local Whisper
- **Standard workflow** - SuperWhisper → paste to terminal

---

## Agentic Coding Mode

### Key Concept
"Brain moves at speaking speed, fingers stuck at typing speed"
- Most developers waste 2-3 hours daily on mechanical typing
- Voice lets you focus on architecture and problem-solving

### Context-Aware Coding
When dictating for code editors:
- Tool understands "create a new function called getUserData" as syntax
- Knows difference between "array" (data structure) and "a ray" (sunlight)
- Adapts output based on detected IDE context

### Prompt Structure for Coding Mode
```xml
<role>You are a senior developer assistant</role>
<instructions>
Format the User Message as code-appropriate content.
If Application Context shows a code editor:
- Format as code comments or inline documentation
- Use the detected language syntax
- Reference Clipboard Context for code style
</instructions>
<requirements>
- Keep technical accuracy
- Use proper syntax for detected language
- Maintain consistent naming conventions
</requirements>
```

### Error Handling
- Develop habit of checking output immediately
- Fix errors early (like fixing typos while typing)
- Keep keyboard handy for small edits

---

## Email Mode

### Use Case
Transform rambling dictation into professional, well-structured emails

### Prompt Example
```xml
<role>You are a professional email editor</role>
<instructions>
The User Message contains dictated speech.
Format into a professional email with:
- Appropriate greeting
- Clear paragraphs
- Professional sign-off
</instructions>
<requirements>
- Keep tone professional but warm
- Structure into logical sections
- Include signature from system context
</requirements>
```

### Context Usage
- **Application Context**: Detects email client
- **Selected Text**: Original email being replied to
- **Clipboard Context**: Reference material for response

---

## Microsoft Teams / Chat Mode

### Use Case
Quick, conversational messages that maintain professionalism

### Key Considerations
- Casual but appropriate tone
- Handle @mentions properly
- Quick message formatting

### Prompt Example
```xml
<role>You are a chat message formatter</role>
<instructions>
Format dictated speech for Teams/Slack chat.
Keep it conversational but professional.
</instructions>
<requirements>
- Short, direct messages
- Appropriate emoji if mentioned
- Handle @mentions as usernames
- No formal email structure
</requirements>
```

### Windows Voice Workaround
- Teams doesn't have native dictation
- Use Windows Key + H for system dictation
- SuperWhisper provides better alternative

---

## Outlook-Specific Commands

### Native Outlook Voice Commands
- "Add [Name] to email"
- "Add [Name] to CC/BCC"
- "Set the subject field to [subject]"
- "Send email"

### SuperWhisper Enhancement
Instead of using native Outlook commands:
- Create custom "Email Mode" with AI formatting
- Auto-structure rambling thoughts
- Maintain consistent professional tone

---

## Browser / Web Mode

### Use Cases
- Filling forms
- ChatGPT interactions
- Web-based documentation
- Research notes

### Prompt Considerations
```xml
<role>You are a web content assistant</role>
<instructions>
Format dictated speech for web forms and chat interfaces.
Adapt based on detected website context.
</instructions>
<requirements>
- If chat interface: conversational format
- If form: structured data entry format
- If document: paragraph formatting
</requirements>
```

---

## General Best Practices

### Voice Coding Success Keys
1. Choose right tools (SuperWhisper + AI editor)
2. Optimize accuracy (good mic, clear speech)
3. Use automation (custom commands, context awareness)
4. Develop correction habits
5. Keep keyboard handy for small edits

### Prompt Engineering for Voice
- Clear role statement
- Explicit about dictated input
- 2-3 examples dramatically improve accuracy
- Don't overload with requirements
- Test and iterate

### Context Selection
- Enable only needed context types
- Excessive context can reduce quality
- Application context most universally useful
- Selected text for transformations
- Clipboard for reference material

---

## Sources
- [Wispr Flow Vibe Coding](https://wisprflow.ai/vibe-coding)
- [AI Voice Dictation for Coding 2025](https://willowvoice.com/blog/ai-voice-dictation-coding-speed-2025)
- [Speech-to-Code by Addy Osmani](https://addyo.substack.com/p/speech-to-code-vibe-coding-with-voice)
- [VoiceMode MCP](https://getvoicemode.com/)
- [Microsoft Outlook Dictation](https://support.microsoft.com/en-us/office/dictate-your-emails-in-outlook-4010d238-bb25-45e9-89f6-8f9b54fcc0fc)
