const pptxgen = require("pptxgenjs");
const { html2pptx } = require("../lib/html2pptx");
const fs = require("fs");
const path = require("path");

// Path configuration
const ROOT_DIR = path.join(__dirname, "..");
const SLIDES_DIR = path.join(ROOT_DIR, "src", "slides-workflow");
const DIST_DIR = path.join(ROOT_DIR, "dist");

async function createWorkflowPresentation() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Austin Public Health";
  pptx.title = "Structuring Projects for Voice-First AI Development";
  pptx.subject = "A 10-Phase Workflow from Idea to Deployment";

  // Workflow deck: 13 slides
  const slideOrder = [
    "slide01.html",  // 1. Title Slide
    "slide02.html",  // 2. 10-Phase Overview
    "slide03.html",  // 3. Phase 1: GitHub Repo
    "slide04.html",  // 4. Phase 2: Brainstorming
    "slide05.html",  // 5. Phase 3: Deep Research
    "slide06.html",  // 6. Phase 4: Planning Session
    "slide07.html",  // 7. Phase 5: MVP Prototype
    "slide08.html",  // 8. Phase 6: Documentation & Standards
    "slide09.html",  // 9. Phase 7: PRD Creation
    "slide10.html",  // 10. Phase 8: Agentic Iteration Mode
    "slide11.html",  // 11. Phase 9: Iterative Review Cycle
    "slide12.html",  // 12. Phase 10: Deployment
    "slide13.html",  // 13. Key Takeaways
  ];

  // Speaker notes for each slide
  const speakerNotes = {
    1: "Welcome to this guide on structuring projects for voice-first AI development. This 10-phase workflow takes you from initial idea all the way to deployment, with your voice driving the entire process.",
    2: "Here's the overview of all 10 phases. Notice how they flow from foundation through development to deployment. Each phase builds on the previous one. The key insight: structure enables autonomy. The more you invest upfront, the more your AI agent can do independently.",
    3: "Phase 1: Always start with a GitHub repo. This isn't optional. Every conversation, every iteration gets committed. Your git history becomes your safety net. Commit early, commit often - aim for commits every few minutes during active development.",
    4: "Phase 2: Brainstorming with your AI agent. This is divergent thinking time. No idea is too wild. Let the agent push back and challenge assumptions. Save everything to a brainstorming markdown file - this becomes input for later phases.",
    5: "Phase 3: Deep research across three dimensions. Technical feasibility - can it be built? Market analysis - what already exists? Reference implementations - how have others solved similar problems? Your agent can search, summarize, and synthesize. Save findings to docs/research/.",
    6: "Phase 4: Planning session. Now we define what we're actually building. Use the deliverables framework: What, Why, How, Success criteria, Dependencies, Priority. This isn't the full spec yet - that comes later. This is strategy, not specification.",
    7: "Phase 5: MVP Prototype. Build fast, break things, learn. The goal is speed and experimentation, not perfection. Expect to throw away half of this code. That's fine - you're learning what works. Bugs are data points.",
    8: "Phase 6: Documentation and standards. After prototyping, you know what patterns work. Capture them. UI/UX patterns, design language, narrative guidelines. These markdown files become context for your agent. The more thorough this phase, the better your PRD will be.",
    9: "Phase 7: PRD Creation. This is where you create the definitive specification. Options include Spec Kit for complex projects, Claude's planning mode for medium projects, or manual writing with AI assistance. The PRD becomes your agent's instruction manual.",
    10: "Phase 8: Agentic Iteration Mode. This is where all your setup pays off. Point your agent at the PRD and let it execute substantial work autonomously. It reads the spec, references your design system, writes code, creates tests, commits work. You provide vision, it does heavy lifting.",
    11: "Phase 9: Iterative Review Cycle. Test, speak, iterate. Your verbal feedback guides the agent through multiple polish cycles. Be specific in your feedback. Reference your documentation. Know when to stop - perfect is the enemy of deployed.",
    12: "Phase 10: Deployment. Push from local to cloud using CLI-accessible platforms. Vercel, Railway, Supabase, Azure - all have CLIs your agent can access. Voice-driven deployment through shell environments. Update your README with deployment instructions.",
    13: "Key takeaways: Commit early and often - git is your safety net. Document everything - markdown files are context for your agent. Voice is your interface - speak naturally, give context, be specific. Iterate relentlessly - ship early, learn fast, improve continuously. This workflow turns a voice conversation into a shipped product.",
  };

  console.log(`Building workflow presentation with ${slideOrder.length} slides`);
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

  const outputPath = path.join(DIST_DIR, "Voice_First_Project_Workflow.pptx");
  await pptx.writeFile({ fileName: outputPath });
  console.log(`\nWorkflow presentation saved to ${outputPath}`);
  console.log(`Total slides: ${slideOrder.length}`);
}

createWorkflowPresentation().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
