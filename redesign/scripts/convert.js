const pptxgen = require("pptxgenjs");
const { html2pptx } = require("../lib/html2pptx");
const fs = require("fs");
const path = require("path");

// Path configuration
const ROOT_DIR = path.join(__dirname, "..");
const SLIDES_DIR = path.join(ROOT_DIR, "src", "slides");
const DIST_DIR = path.join(ROOT_DIR, "dist");

async function createPresentation() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Austin Public Health";
  pptx.title = "Voice-Driven AI Development Workflows - Part 1";
  pptx.subject = "Setup, Introduction & Tool Overview";

  // Speaker notes for each slide (80 slides total after new additions)
  const speakerNotes = {
    // Section 1: Introduction (1-6)
    1: "Welcome everyone to Part 1 of our Voice-Driven AI Development Workflows series. Today we're covering setup, introduction, and tool overview. This 90-minute session will give you the foundation to start using voice-driven development.",
    2: "Here's our roadmap for the full series. Today is Part 1 focusing on understanding the tools. Part 2 will be hands-on practice with your own projects. Part 3 culminates in building a real meeting transcriber application together.",
    3: "The key insight here is that we think faster than we type. Voice-driven development closes that gap. The quote from our research captures it well - keyboards are a bottleneck. Voice input lets you work at the speed of thought.",
    4: "Four key benefits to highlight. Ergonomic benefits are significant for anyone typing all day. Productivity gains come from faster iteration. Multitasking becomes possible when your hands are free. And accessibility opens development to more people.",
    5: "This training isn't just for developers. Data scientists can dictate analysis scripts. Researchers and epidemiologists can draft reports while reviewing data. Even admin staff benefit from better dictation tools. Everyone here will find something useful.",
    6: "Here's our agenda for today. Note the time allocations - we'll spend most time on voice input tools since those are foundational. We'll end with security considerations which are critical for government work.",

    // Section 2: Voice Input Tools (7-25)
    7: "Section 2: Now we're getting into the tools. The acoustic layer is your first point of contact - capturing your voice and turning it into text that AI can understand.",
    8: "SuperWhisper is our primary recommendation. It now works on Mac, Windows, and iOS. Important distinction: it offers BOTH local AND cloud processing options. The free tier includes local models like Nano, Fast, and Standard - completely privacy-safe for PHI. Pro unlocks more powerful models.",
    9: "This diagram shows why local processing matters. With SuperWhisper's local models, the entire flow stays on your machine. Compare this to cloud processing where your voice goes to external servers. For PHI and sensitive data, use local models only.",
    10: "Mac installation is straightforward. You can use the App Store for automatic updates, or download directly from superwhisper.com. Note the system requirements: macOS 13+ with Apple Silicon M1-M4 for best local model performance. Intel Macs can use cloud models.",
    11: "Windows installation launched December 2025. Download the installer from superwhisper.com, run through the setup wizard, and configure your default audio device. GPU acceleration is supported if you have an NVIDIA card.",
    12: "Let's tour the interface. On Mac, look for the menu bar icon. On Windows, it's in the system tray. The colored indicator shows recording status - gray for idle, red for recording, gold for processing. Click to access settings and mode selection.",
    13: "SuperWhisper has four mode types. Voice Mode is pure transcription. Super Mode intelligently adapts output based on which app you're in. Note Mode structures your speech into organized lists. Custom Modes let you create your own prompts - 3 free, unlimited with Pro.",
    14: "Model selection is key. FREE tier includes Nano (fastest), Fast, and Standard - all local and privacy-safe. PRO adds Pro and Ultra Turbo V3 local models with best accuracy, plus Ultra and Nova cloud models for speed. Match to your needs and privacy requirements.",
    15: "This is the key slide for understanding what you get FREE vs PRO. The free tier includes three local models that never send data off your device - perfect for PHI. Pro adds more powerful local models plus cloud options. For government work, the free local models may be all you need.",
    16: "Pro tips for getting the most out of SuperWhisper. Speak naturally - don't robot-speak. Use natural pauses instead of saying punctuation. The hold-to-record hotkey gives you precise control.",
    17: "Wispr Flow is our cross-platform alternative. It works on Mac, Windows, and iOS. There's a free tier with 2000 words per week. The key differentiator is context awareness - it auto-detects which app you're using and adjusts output formatting. Important: Wispr Flow is CLOUD-ONLY - there is no local processing option.",
    18: "Installing Wispr Flow is simple. Download from wisprflow.ai, run the installer, and sign in. Free tier is 2000 words per week, Pro is $15/month for unlimited. Note: all platforms are cloud-based.",
    19: "IMPORTANT limitation for government users. Unlike SuperWhisper, Wispr Flow does NOT offer local processing. Privacy Mode provides ZERO DATA RETENTION - your audio is not stored or used for training - but audio IS still sent to cloud servers. For true local processing, use SuperWhisper instead.",
    20: "Wispr Flow's killer features include context awareness, command mode for text transformation, and flow state optimization. It learns your patterns over time.",
    21: "Wispr Flow integrates deeply with Cursor and VS Code. It can detect what language you're coding in and adjust formatting accordingly.",
    22: "Advanced settings let you customize hotkeys, auto-punctuation behavior, and language preferences. Take time to configure these for your workflow.",
    23: "Side-by-side comparison of SuperWhisper vs Wispr Flow. KEY DIFFERENCE: SuperWhisper offers true local processing - audio never leaves your device. Wispr Flow is cloud-only - even with Privacy Mode, audio goes to servers. SuperWhisper is recommended for PHI. Wispr Flow excels at context-aware formatting for non-sensitive work.",
    24: "This comparison matrix includes native OS dictation options too. Key takeaway: for PHI safety, SuperWhisper with local models is the only voice tool that keeps audio fully on-device. Wispr Flow's Privacy Mode means zero retention, but audio still goes to cloud.",
    25: "Decision flowchart to help you choose. If you handle PHI or sensitive data, SuperWhisper with local models is the clear choice. Wispr Flow is excellent for non-sensitive work where you want the best context-aware formatting.",

    // Section 3: AI Coding Assistants (26-37)
    26: "Section 3: Now we move from voice input to AI assistants - the reasoning layer that turns your spoken intent into actual code.",
    27: "The big picture: Voice goes to transcription, then to an AI assistant, then becomes code. We're covering three categories: CLI agents, IDE extensions, and AI-native editors.",
    28: "Claude Code is a terminal-based AI coding agent. It's different from chatting with Claude in a browser - this is an autonomous agent that can read your files, write code, and run commands.",
    29: "Installing Claude Code requires Node.js 18+. Run npm install globally, then set your API key. First run will prompt for permissions.",
    30: "Key commands to know: /help shows all commands, /clear resets context, /compact summarizes for long sessions, /init creates a CLAUDE.md file, /cost shows token usage.",
    31: "CLAUDE.md is your project context file. Put it in your project root. Include architecture decisions, coding standards, file structure, and any constraints. Claude reads this automatically.",
    32: "The voice + Claude Code workflow is powerful. Dictate your intent with SuperWhisper, paste into terminal, Claude executes. The terminal interface pairs naturally with voice input.",
    33: "VS Code extensions provide in-editor AI assistance. Continue.dev is open-source and configurable. GitHub Copilot is the industry standard. Cody focuses on codebase understanding.",
    34: "For enterprise compliance, configure VS Code to use Azure OpenAI endpoints. This keeps your code within your Azure tenant. Continue.dev supports custom endpoints natively.",
    35: "Cursor is an AI-native code editor built on VS Code. Composer mode lets you describe changes across multiple files. Inline editing with Cmd+K is fast for quick fixes.",
    36: "Comparison matrix for AI assistants. Claude Code excels at autonomous multi-file operations. VS Code is best for enterprise compliance. Cursor is fastest for inline editing.",
    37: "Our recommendation: Claude Code for voice-driven development. The terminal interface is a natural fit for voice input. You dictate, paste, and Claude executes.",

    // Section 4: Enterprise Configuration (38-44)
    38: "Section 4: Enterprise configuration. This is where we connect our tools to secure Azure endpoints.",
    39: "Azure OpenAI is Microsoft's hosted version of OpenAI models. Key difference from direct OpenAI: your data stays in your Azure tenant. You need an Azure subscription and deployment.",
    40: "Government cloud options: GCC for general government work, GCC-High for DoD and controlled unclassified information. Note the different domain: .azure.us instead of .azure.com.",
    41: "Configuration involves setting environment variables for your endpoint URL and API key. Authentication can use API key or Azure AD depending on your setup.",
    42: "Azure AI Foundry, formerly Azure AI Studio, is Microsoft's unified AI development platform. It provides a single portal to access GPT-4, Claude, Llama, and other models through Azure's compliant infrastructure.",
    43: "Ollama runs models locally on your machine. This is the ultimate in privacy - completely air-gapped. Good for experimenting but requires significant hardware.",
    44: "Enterprise options summary. Azure OpenAI is recommended for most government use. Ollama for air-gapped requirements. Direct APIs only for non-sensitive work.",

    // Section 5: CLI Tools Deep Dive (45-51)
    45: "Section 5: Deep dive into CLI tools, specifically Claude Code's advanced features.",
    46: "Slash commands are organized by function: session management, information queries, and actions. The most useful are /help, /clear, /compact, and /init.",
    47: "Hooks let you run scripts automatically. PreToolUse runs before Claude takes an action. PostToolUse runs after. Notification hooks alert you to events.",
    48: "MCP - Model Context Protocol - connects Claude to external systems. Examples include database access, API integrations, and file system extensions. Review permissions carefully.",
    49: "Sub-agents let Claude delegate specialized tasks. For complex operations, Claude can spawn focused agents for research, testing, or specific file operations.",
    50: "Safety features are built-in for good reason. Permission prompts for file access, command execution safeguards, and sensitive data detection. Don't bypass these.",
    51: "Best practices summary: Use CLAUDE.md for context, leverage slash commands, set up hooks for your workflow, be thoughtful about MCP permissions.",

    // Section 6: CI/CD Integration (52-54)
    52: "Section 6: CI/CD integration - connecting voice workflows to version control.",
    53: "GitHub Actions can trigger Claude Code for automated tasks. Use cases include PR reviews, documentation generation, and code refactoring. The YAML workflow shows the pattern.",
    54: "GitHub Copilot Enterprise adds custom models trained on your codebase, knowledge bases from your docs, and policy controls. Check with IT for availability.",

    // Section 7: Voice Workflow Integration (55-57)
    55: "Section 7: Putting it all together into a complete workflow.",
    56: "The end-to-end flow: Speak your intent, transcribe with SuperWhisper or Wispr Flow, paste into Claude Code or your IDE, process and iterate, execute and deploy.",
    57: "Quick reference by role. Developers get the full stack. Data analysts focus on voice + notebooks. IT/DevOps use CI/CD integration. Everyone starts with voice tools.",

    // Section 8: Security & Compliance (58-62)
    58: "Section 8: Security and compliance - critical for government work.",
    59: "Data flow awareness diagram. Green is local and safe - SuperWhisper's free local models, local Ollama. Blue is your Azure tenant - verify BAA status. Red/Yellow is public cloud - Wispr Flow is cloud-based even with Privacy Mode.",
    60: "PHI guidance: SAFE tools include SuperWhisper with local models (free tier works!) and Azure with BAA. CAUTION with Wispr Flow - Privacy Mode means zero retention but audio still goes to cloud. Not safe: direct OpenAI APIs, ChatGPT free tier, default cloud dictation.",
    61: "Common mistakes to avoid. Don't paste PHI into public AI tools. Don't use cloud dictation for sensitive conversations. Don't skip privacy mode configuration.",
    62: "Security checklist. Before starting: verify tool configuration, check privacy mode, confirm endpoint routing. Before each use: consider data sensitivity, choose appropriate tool.",

    // Section 9: Next Steps (63-66)
    63: "Section 9: Wrapping up and preparing for Part 2.",
    64: "Pre-work for Part 2: Install SuperWhisper or Wispr Flow, install Claude Code, set up your API keys, identify a project to work on, bring questions.",
    65: "Part 2 preview: Real hands-on exercises with your own projects. We'll troubleshoot issues together and share tips. You'll leave with working tools.",
    66: "Thank you! Part 1 of 3 complete. Questions? Reach out anytime. See you in Part 2 for hands-on practice.",

    // Section 10: SuperWhisper Deep Dive - NEW (67-72)
    67: "Part 3: Now we're getting into the hands-on portion. This is where we'll actually configure SuperWhisper for your specific workflows.",
    68: "Initial setup walkthrough. These five steps get you from installation to your first successful dictation. The key is selecting a local model first for privacy, then testing to confirm it works. Watch for the status indicator colors.",
    69: "Creating custom modes is where SuperWhisper becomes truly powerful. You get 3 free custom modes, unlimited with Pro. Each mode can have its own AI instructions, context settings, and auto-activation rules.",
    70: "Writing effective AI instructions is crucial. The XML structure helps organize your prompt: role defines who the AI is, instructions specify what to do, requirements list constraints. Adding 2-3 examples dramatically improves accuracy.",
    71: "Context awareness lets your modes adapt to what you're doing. Application context detects which app is active, selected text passes highlighted content, clipboard provides reference material. Auto-activation means the right mode engages automatically.",
    72: "Vocabulary and replacements fine-tune recognition. Vocabulary helps the AI recognize custom terms during transcription. Replacements correct errors after transcription - they're programmatic and 100% reliable. Keep vocabulary lists short.",

    // Section 11: Custom Mode Workshop - NEW (73-78, 82)
    73: "Part 4: Workshop time. We'll build five practical custom modes together. Each one is designed for a specific application context. You'll leave with ready-to-use configurations.",
    74: "Prompt Enrichment Mode - our first mode. This is the KEY insight: SuperWhisper is an INPUT METHOD, not a code generator. This mode transforms your rambling speech into clear, structured prompts ready to paste into ANY AI tool - Claude, ChatGPT, Cursor, whatever you use.",
    75: "Microsoft Teams Chat Mode - perfect for workplace messaging. Teams has no native dictation, so SuperWhisper fills this gap. The prompt is designed for short, professional messages - not formal emails. Watch how 'at Sarah' converts to '@Sarah' mentions.",
    76: "Professional Email Mode - transforms rambling dictation into structured emails. When you select text before dictating, it treats that as the email you're replying to. Great for busy schedules when you need to respond quickly.",
    77: "Claude Code Terminal Mode - optimized for giving detailed prompts to Claude. Voice is perfect for complex instructions that would be tedious to type. Copy an error to clipboard, dictate 'fix this error', paste to Claude.",
    78: "Web Browser Mode - the most flexible mode. It adapts based on which website you're on. Create sub-modes for ChatGPT, Claude.ai, or specific web apps. URL patterns let you customize behavior per site.",
    82: "Agentic Handoff Mode - the advanced pattern. This takes prompt enrichment further, specifically for AI coding agents. Instead of just cleaning up your speech, it structures your task with objective, scope, constraints, and success criteria. AI agents like Claude Code perform significantly better when given this structured format versus rambling instructions.",

    // Section 12: Live Demonstrations - NEW (79-81)
    79: "Part 5: Live demonstrations. I'll show you these tools working in real-time. Watch how modes switch automatically as I move between applications. Feel free to follow along if you have the tools installed.",
    80: "Context switching demo - the magic of auto-activation. Watch the menu bar indicator as I switch from VS Code to Teams to Outlook to Terminal. Same hotkey, same natural speech, but output adapts to each context. Notice how quickly local models process.",
    81: "This is why we chose SuperWhisper for this workshop. The free local models give us PHI-safe processing out of the box. Cross-platform support means everyone can participate regardless of their device. And the custom modes feature lets us build practical tools together."
  };

  const slideFiles = fs.readdirSync(SLIDES_DIR)
    .filter(f => f.startsWith("slide") && f.endsWith(".html"))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
    });

  console.log(`Found ${slideFiles.length} slides to process`);

  for (const slideFile of slideFiles) {
    const slideNum = parseInt(slideFile.match(/\d+/)[0]);
    const slidePath = path.join(SLIDES_DIR, slideFile);

    try {
      console.log(`Processing slide ${slideNum}: ${slideFile}`);
      const { slide } = await html2pptx(slidePath, pptx);

      if (speakerNotes[slideNum]) {
        slide.addNotes(speakerNotes[slideNum]);
      }
    } catch (error) {
      console.error(`Error on slide ${slideNum}: ${error.message}`);
    }
  }

  // Ensure dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  const outputPath = path.join(DIST_DIR, "Voice_AI_Workflows_Part1_FULL.pptx");
  await pptx.writeFile({ fileName: outputPath });
  console.log(`\nPresentation saved to ${outputPath}`);
}

createPresentation().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
