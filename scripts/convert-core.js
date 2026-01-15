const pptxgen = require("pptxgenjs");
const { html2pptx } = require("../lib/html2pptx");
const fs = require("fs");
const path = require("path");

// Path configuration
const ROOT_DIR = path.join(__dirname, "..");
const SLIDES_DIR = path.join(ROOT_DIR, "src", "slides");
const DIST_DIR = path.join(ROOT_DIR, "dist");

async function createCorePresentation() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Austin Public Health";
  pptx.title = "Voice-Driven AI Development Workflows - Part 1";
  pptx.subject = "Setup, Introduction & Tool Overview";

  // Core deck order: 36 slides for 90-minute presentation
  const coreSlideOrder = [
    // Opening (5 slides) - 10 min
    "slide01.html",  // 1. Title Slide
    "slide02.html",  // 2. Series Roadmap
    "slide03.html",  // 3. Why Voice-Driven Development
    "slide04.html",  // 4. Key Benefits
    "slide06.html",  // 5. Today's Agenda

    // Voice Tools Landscape (8 slides) - 10 min
    "slide07.html",  // 6. Section: Voice Input Tools
    "slide08.html",  // 7. SuperWhisper Overview
    "slide09.html",  // 8. Why Local Processing Matters
    "slide17.html",  // 9. Wispr Flow Overview
    "slide19.html",  // 10. Wispr Flow is Cloud-Only (CRITICAL)
    "slide23.html",  // 11. SuperWhisper vs Wispr Flow
    "slide25.html",  // 12. Decision Flowchart
    "slide81.html",  // 13. Why SuperWhisper for This Workshop

    // Security & PHI (4 slides) - 10 min
    "slide58.html",  // 14. Section: Security and Compliance
    "slide59.html",  // 15. Data Flow Awareness
    "slide60.html",  // 16. PHI Handling Guide
    "slide62.html",  // 17. Security Checklist

    // SuperWhisper Deep Dive (6 slides) - 15 min
    "slide67.html",  // 18. Section: SuperWhisper Deep Dive
    "slide68.html",  // 19. Initial Setup Walkthrough
    "slide69.html",  // 20. Creating Custom Modes
    "slide70.html",  // 21. Writing AI Instructions
    "slide71.html",  // 22. Context Awareness & Mode Switching
    "slide72.html",  // 23. Vocabulary & Recognition Settings

    // Custom Mode Workshop (6 slides) - 25 min
    "slide73.html",  // 24. Section: Custom Mode Workshop
    "slide74.html",  // 25. Prompt Enrichment Mode (KEY: input method concept)
    "slide75.html",  // 26. Microsoft Teams Chat Mode
    "slide76.html",  // 27. Professional Email Mode
    "slide77.html",  // 28. Claude Code Terminal Mode
    "slide82.html",  // 29. Agentic Handoff Mode (ADVANCED pattern)

    // Live Demo (3 slides) - 10 min
    "slide79.html",  // 30. Section: Live Demonstrations
    "slide80.html",  // 31. Context Switching Demo
    "slide78.html",  // 32. Web Browser Mode (bonus)

    // Closing (4 slides) - 10 min
    "slide63.html",  // 33. Section: Next Steps
    "slide64.html",  // 34. Pre-work for Part 2
    "slide65.html",  // 35. Part 2 Preview
    "slide66.html",  // 36. Thank You / Q&A
  ];

  // Speaker notes for core deck (indexed by position in core deck, 1-based)
  const speakerNotes = {
    // Opening
    1: "Welcome to Part 1 of our Voice-Driven AI Development Workflows series. Today we're covering setup, introduction, and tool overview. This 90-minute session will give you the foundation to start using voice-driven development.",
    2: "Here's our roadmap for the full series. Today is Part 1 focusing on understanding the tools. Part 2 will be hands-on practice with your own projects. Part 3 culminates in building a real meeting transcriber application together.",
    3: "The key insight here is that we think faster than we type. Voice-driven development closes that gap. Keyboards are a bottleneck. Voice input lets you work at the speed of thought.",
    4: "Four key benefits: Ergonomic benefits for anyone typing all day. Productivity gains from faster iteration. Multitasking when your hands are free. Accessibility opens development to more people.",
    5: "Here's our agenda for today. Note the time allocations - we'll focus on voice tools and SuperWhisper configuration. Workshop materials are available for independent practice.",

    // Voice Tools Landscape
    6: "Section 2: Now we're getting into the tools. The acoustic layer captures your voice and turns it into text.",
    7: "SuperWhisper is our primary recommendation. Works on Mac, Windows, and iOS. Key: it offers BOTH local AND cloud processing. Free tier includes local models - completely privacy-safe for PHI.",
    8: "This diagram shows why local processing matters. With SuperWhisper's local models, the entire flow stays on your machine. For PHI and sensitive data, use local models only.",
    9: "Wispr Flow is the cross-platform alternative. Works on Mac, Windows, and iOS. Free tier with 2000 words per week. Context awareness auto-detects which app you're using. IMPORTANT: Wispr Flow is CLOUD-ONLY.",
    10: "CRITICAL limitation for government users. Unlike SuperWhisper, Wispr Flow does NOT offer local processing. Privacy Mode means zero data retention - but audio IS still sent to cloud servers. For true local processing, use SuperWhisper.",
    11: "Side-by-side comparison. KEY DIFFERENCE: SuperWhisper offers true local processing - audio never leaves your device. Wispr Flow is cloud-only - even with Privacy Mode, audio goes to servers. SuperWhisper for PHI.",
    12: "Decision flowchart. If you handle PHI or sensitive data, SuperWhisper with local models is the clear choice. Wispr Flow is excellent for non-sensitive work where you want context-aware formatting.",
    13: "This is why we're using SuperWhisper for this workshop: free local models that are PHI-safe out of the box, cross-platform support, and custom modes we can build together.",

    // Security & PHI
    14: "Section: Security and compliance - critical for government work.",
    15: "Data flow awareness diagram. Green is local and safe. Blue is your Azure tenant - verify BAA status. Red/Yellow is public cloud - Wispr Flow is cloud-based even with Privacy Mode.",
    16: "PHI guidance: SAFE tools include SuperWhisper with local models (free tier works!) and Azure with BAA. CAUTION with Wispr Flow - Privacy Mode means zero retention but audio still goes to cloud.",
    17: "Security checklist. Before starting: verify tool configuration, check privacy mode, confirm endpoint routing. Before each use: consider data sensitivity, choose appropriate tool.",

    // SuperWhisper Deep Dive
    18: "Part 3: Now we're getting into the hands-on portion. This is where we'll actually configure SuperWhisper for your specific workflows.",
    19: "Initial setup walkthrough. Five steps from installation to your first successful dictation. Key: select a local model first for privacy, then test to confirm it works.",
    20: "Creating custom modes is where SuperWhisper becomes truly powerful. You get 3 free custom modes, unlimited with Pro. Each mode can have its own AI instructions, context settings, and auto-activation rules.",
    21: "Writing effective AI instructions. The XML structure helps organize your prompt: role defines who the AI is, instructions specify what to do, requirements list constraints. Examples dramatically improve accuracy.",
    22: "Context awareness lets your modes adapt. Application context detects which app is active, selected text passes highlighted content, clipboard provides reference material. Auto-activation means the right mode engages automatically.",
    23: "Vocabulary and replacements fine-tune recognition. Vocabulary helps the AI recognize custom terms during transcription. Replacements correct errors after transcription - programmatic and 100% reliable.",

    // Custom Mode Workshop
    24: "Part 4: Workshop time. We'll build five practical custom modes together. Each one is designed for a specific application context. You'll leave with ready-to-use configurations.",
    25: "Prompt Enrichment Mode - the KEY insight. SuperWhisper is an INPUT METHOD, not a code generator. This mode transforms your rambling speech into clear, structured prompts ready to paste into ANY AI tool - Claude, ChatGPT, Cursor, whatever you use.",
    26: "Microsoft Teams Chat Mode - perfect for workplace messaging. Teams has no native dictation, so SuperWhisper fills this gap. Short, professional messages. Watch how 'at Sarah' converts to '@Sarah' mentions.",
    27: "Professional Email Mode - transforms rambling dictation into structured emails. Select text before dictating to treat it as the email you're replying to. Great for quick responses.",
    28: "Claude Code Terminal Mode - optimized for giving detailed prompts to Claude. Voice is perfect for complex instructions. Copy an error to clipboard, dictate 'fix this error', paste to Claude.",
    29: "Agentic Handoff Mode - the advanced pattern. This takes prompt enrichment further, specifically for AI coding agents. Instead of just cleaning up your speech, it structures your task with objective, scope, constraints, and success criteria. AI agents perform significantly better with structured specifications.",

    // Live Demo
    30: "Part 5: Live demonstrations. I'll show you these tools working in real-time. Watch how modes switch automatically as I move between applications.",
    31: "Context switching demo - the magic of auto-activation. Watch the menu bar indicator as I switch from VS Code to Teams to Outlook to Terminal. Same hotkey, same natural speech, output adapts.",
    32: "Web Browser Mode - the most flexible mode. It adapts based on which website you're on. Create sub-modes for ChatGPT, Claude.ai, or specific web apps.",

    // Closing
    33: "Section: Wrapping up and preparing for Part 2.",
    34: "Pre-work for Part 2: Install SuperWhisper, set up your custom modes based on what we learned today, identify a project to work on, bring questions.",
    35: "Part 2 preview: Real hands-on exercises with your own projects. We'll troubleshoot issues together and share tips. You'll leave with working tools integrated into your workflow.",
    36: "Thank you! Part 1 of 3 complete. Workshop materials and exercises are available for independent practice. Questions? See you in Part 2!",
  };

  console.log(`Building core presentation with ${coreSlideOrder.length} slides`);
  console.log(`Slides directory: ${SLIDES_DIR}`);

  let successCount = 0;
  let failedSlides = [];

  for (let i = 0; i < coreSlideOrder.length; i++) {
    const slideFile = coreSlideOrder[i];
    const slideNum = i + 1;
    const slidePath = path.join(SLIDES_DIR, slideFile);

    try {
      console.log(`[${slideNum}/${coreSlideOrder.length}] ${slideFile}`);
      const { slide } = await html2pptx(slidePath, pptx);

      if (speakerNotes[slideNum]) {
        slide.addNotes(speakerNotes[slideNum]);
      }
      successCount++;
    } catch (error) {
      console.error(`\n❌ FAILED: Slide ${slideNum} (${slideFile})`);
      console.error(`   Error: ${error.message}\n`);
      failedSlides.push({ num: slideNum, file: slideFile, error: error.message });
    }
  }

  console.log(`\n========================================`);
  console.log(`CONVERSION SUMMARY:`);
  console.log(`  Successful: ${successCount}/${coreSlideOrder.length}`);
  console.log(`  Failed: ${failedSlides.length}`);
  if (failedSlides.length > 0) {
    console.log(`\nFailed slides:`);
    failedSlides.forEach(s => console.log(`  - ${s.file}: ${s.error.substring(0, 80)}...`));
  }
  console.log(`========================================\n`);

  // Ensure dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  const outputPath = path.join(DIST_DIR, "Voice_AI_Workflows_Part1_CORE.pptx");
  await pptx.writeFile({ fileName: outputPath });
  console.log(`\nCore presentation saved to ${outputPath}`);
  console.log(`Total slides: ${coreSlideOrder.length}`);
}

createCorePresentation().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
