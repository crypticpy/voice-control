const pptxgen = require("pptxgenjs");
const { html2pptx } = require("../lib/html2pptx");
const fs = require("fs");
const path = require("path");

// Path configuration
const ROOT_DIR = path.join(__dirname, "..");
const SLIDES_DIR = path.join(ROOT_DIR, "src", "slides-claude-code");
const DIST_DIR = path.join(ROOT_DIR, "dist");

async function createClaudeCodePresentation() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Austin Public Health";
  pptx.title = "Claude Code Setup & Configuration";
  pptx.subject = "Tool Setup Guide for Voice-Driven AI Development";

  // Claude Code deck: 12 slides
  const slideOrder = [
    "slide01.html",  // 1. Title Slide
    "slide02.html",  // 2. Installation & Setup
    "slide03.html",  // 3. Model Selection
    "slide04.html",  // 4. Slash Commands
    "slide05.html",  // 5. Planning Mode
    "slide06.html",  // 6. Sub-Agents
    "slide07.html",  // 7. Skills
    "slide08.html",  // 8. MCP Servers
    "slide09.html",  // 9. Hooks
    "slide10.html",  // 10. Plugins
    "slide11.html",  // 11. Feature Comparison
    "slide12.html",  // 12. Key Takeaways
  ];

  // Speaker notes for each slide
  const speakerNotes = {
    1: "Welcome to the Claude Code setup guide. This is part of our Tool Setup series — we'll follow the same pattern for Cursor, VS Code, and other AI coding tools. Today we're covering installation, core features, and how to customize Claude Code for your workflow.",

    2: "Installation is straightforward. You can use npm or the official installer script. After installation, run 'claude' in your terminal to authenticate. The first time, you'll be asked to log in via browser and select your default model. Five minutes and you're ready to go.",

    3: "Model selection is your first real decision. Sonnet is the default and handles most tasks well. Use Opus when you need deep reasoning — architecture decisions, complex debugging. Haiku is great for quick exploration tasks. Key insight: sub-agents can use different models, so you can use Haiku for exploration while keeping Sonnet for your main coding work.",

    4: "Slash commands are manual commands you invoke by typing /command. Built-in commands include /plan for planning mode, /model to switch models, /compact to summarize context. The real power: create custom commands by adding markdown files to .claude/commands/. Commit these to git and your whole team gets the same commands.",

    5: "Planning mode is THE key workflow pattern. Before making any code changes, especially for PRs, enter planning mode with /plan or Shift+Tab twice. Claude will explore the codebase using sub-agents, keeping your main context clean. Think through your approach, iterate on the plan, then exit to implement. This prevents wasted effort and keeps context optimized.",

    6: "Sub-agents are specialized agents that work in parallel. Built-in ones include Explore for fast codebase scanning, Plan for architecture, and Bash for command execution. Each sub-agent has its own context window, so exploration doesn't bloat your main thread. You can create custom sub-agents in .claude/agents/ with specific models, tools, and instructions.",

    7: "Skills are the automatic counterpart to slash commands. Instead of invoking them manually, skills activate automatically when your task context matches their description. Store them in .claude/skills/ as markdown files. Claude reads the description, and if it matches what you're doing, the skill's instructions are automatically applied. Great for domain-specific patterns and coding standards.",

    8: "MCP — Model Context Protocol — is an open standard for AI-tool integrations. It lets Claude Code connect to databases, APIs, and external services. Configure MCP servers at three levels: local (private to you), project (shared via git), or global (all projects). Popular servers include GitHub, PostgreSQL, Slack, and Notion. Plugins can also include MCP servers that start automatically.",

    9: "Hooks are for advanced users — deterministic code that runs at specific points in Claude's execution. PreToolUse runs before any tool call — you can block sensitive operations. PostToolUse runs after — useful for logging. PermissionRequest intercepts permission dialogs. AgentCompletion runs when an agent finishes. Hooks transform Claude from a black box into transparent, auditable infrastructure.",

    10: "Plugins bundle everything together: slash commands, sub-agents, MCP servers, and hooks. One install command sets up an entire integrated environment. When you enable a plugin, its MCP servers start automatically. This is perfect for team onboarding — package your team's entire setup as a plugin and new developers can install it instantly.",

    11: "Here's the comparison matrix. Slash commands are manual, skills are automatic. Sub-agents handle parallel work with separate contexts. Hooks provide event-based control for security and monitoring. MCP servers connect to external tools. Plugins bundle everything for distribution. Start with slash commands and planning mode, then add skills as you identify patterns.",

    12: "Key takeaways: Plan before you code — always use /plan for PRs. Manage your context — sub-agents keep the main thread clean. Customize with skills for domain expertise. Match models to tasks. And remember: Claude Code + SuperWhisper voice input creates the complete voice-driven development stack we're building toward in this series.",
  };

  console.log(`Building Claude Code presentation with ${slideOrder.length} slides`);
  console.log(`Slides directory: ${SLIDES_DIR}`);

  let successCount = 0;
  let failedSlides = [];

  for (let i = 0; i < slideOrder.length; i++) {
    const slideFile = slideOrder[i];
    const slideNum = i + 1;
    const slidePath = path.join(SLIDES_DIR, slideFile);

    try {
      console.log(`[${slideNum}/${slideOrder.length}] ${slideFile}`);
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
  console.log(`  Successful: ${successCount}/${slideOrder.length}`);
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

  const outputPath = path.join(DIST_DIR, "Claude_Code_Setup_Guide.pptx");
  await pptx.writeFile({ fileName: outputPath });
  console.log(`\nClaude Code presentation saved to ${outputPath}`);
  console.log(`Total slides: ${slideOrder.length}`);
}

createClaudeCodePresentation().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
