const pptxgen = require("pptxgenjs");
const { html2pptx } = require("../lib/html2pptx");
const fs = require("fs");
const path = require("path");

// Path configuration
const ROOT_DIR = path.join(__dirname, "..");
const SLIDES_DIR = path.join(ROOT_DIR, "src", "slides-cursor");
const DIST_DIR = path.join(ROOT_DIR, "dist");

async function createCursorPresentation() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Austin Public Health";
  pptx.title = "Cursor + Azure AI Integration";
  pptx.subject = "Tool Setup Guide for Voice-Driven AI Development";

  // Cursor deck: 10 slides
  const slideOrder = [
    "slide01.html",  // 1. Title Slide
    "slide02.html",  // 2. Installation & Setup
    "slide03.html",  // 3. Core Features
    "slide04.html",  // 4. Azure OpenAI Setup
    "slide05.html",  // 5. Configure Cursor
    "slide06.html",  // 6. Azure AI Foundry
    "slide07.html",  // 7. Project Rules
    "slide08.html",  // 8. Limitations & Gotchas
    "slide09.html",  // 9. Enterprise Best Practices
    "slide10.html",  // 10. Key Takeaways
  ];

  // Speaker notes for each slide
  const speakerNotes = {
    1: "Welcome to the Cursor + Azure integration guide. Cursor is an AI-native code editor built on VS Code, and today we're configuring it to use your organization's Azure OpenAI deployments instead of the built-in models. This is part of our Tool Setup series.",

    2: "Installation is straightforward — download from cursor.com for your platform. If you're coming from VS Code, you can import your extensions, themes, and keybindings during first launch. Cursor feels immediately familiar because it IS VS Code under the hood, just with AI features built in.",

    3: "Cursor has four core AI features. Cmd+K is inline edit — select code and describe changes. Cmd+I opens Composer for multi-file edits — this is the most powerful feature. Cmd+L opens Chat for questions. Tab provides autocomplete as you type. Important: Tab autocomplete uses Cursor's proprietary model and CANNOT use Azure. The other three features work with Azure.",

    4: "To connect Cursor to Azure, you need three values from the Azure Portal. First, navigate to your Azure OpenAI resource. Copy the Endpoint URL from Keys and Endpoint section. Copy your API key — KEY 1 works fine. Finally, go to Model Deployments and copy the exact deployment name. These three values are all Cursor needs.",

    5: "In Cursor, go to Settings, then Models, then API Keys. Click Add Model or select Azure from the dropdown. Enter your Base URL — that's the endpoint including the trailing slash. Enter your deployment name exactly as it appears in Azure — it's case sensitive. Paste your API key. Click Verify — you should see a green checkmark. Then enable the Azure model for Chat, Cmd+K, and Composer.",

    6: "Azure AI Foundry, formerly Azure AI Studio, is Microsoft's unified platform for deploying foundation models. If your models are deployed via Azure OpenAI Service within Foundry, they work with the standard Azure configuration. For other Foundry models like Claude or Llama, you may need to check if the endpoint is OpenAI-compatible. Best approach: deploy models via Azure OpenAI Service for seamless Cursor integration.",

    7: "Project rules define how the AI behaves for your specific project. The modern approach is creating a .cursor/rules/ directory with .mdc files — each file defines rules for different parts of your codebase. Keep each file under 500 lines. You can also set global rules in Cursor Settings that apply to all projects. Commit your project rules to git so your team gets consistent AI behavior.",

    8: "Critical limitation: Tab autocomplete does NOT work with Azure or any custom API key. It requires Cursor Pro and uses their proprietary Fusion model. This is the biggest gotcha for BYOK users. The good news: Chat, Cmd+K, and Composer all work perfectly with Azure. Other gotchas: deployment name must match exactly (case sensitive), and Azure region affects latency.",

    9: "For enterprise deployments: use Azure Key Vault for key management, never commit keys to git. Monitor costs in Azure Portal — set alerts. Share .cursor/rules/ via git for team consistency. Test configuration with a non-production Azure resource first. Consider GPT-4o for most tasks — good balance of capability and cost. Azure OpenAI typically costs less per token than Cursor's built-in models.",

    10: "Key takeaways: You need three values from Azure — Base URL, Deployment Name, and API Key. Always verify the connection after setup. Know that Tab autocomplete won't work with Azure — plan around this. Share project rules via git for team consistency. Combined with SuperWhisper for voice input, you now have an enterprise-grade voice-driven development stack using your organization's Azure infrastructure.",
  };

  console.log(`Building Cursor presentation with ${slideOrder.length} slides`);
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

  const outputPath = path.join(DIST_DIR, "Cursor_Azure_Setup_Guide.pptx");
  await pptx.writeFile({ fileName: outputPath });
  console.log(`\nCursor presentation saved to ${outputPath}`);
  console.log(`Total slides: ${slideOrder.length}`);
}

createCursorPresentation().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
