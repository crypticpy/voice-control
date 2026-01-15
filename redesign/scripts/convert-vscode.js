const pptxgen = require("pptxgenjs");
const { html2pptx } = require("../lib/html2pptx");
const fs = require("fs");
const path = require("path");

// Path configuration
const ROOT_DIR = path.join(__dirname, "..");
const SLIDES_DIR = path.join(ROOT_DIR, "src", "slides-vscode");
const DIST_DIR = path.join(ROOT_DIR, "dist");

async function createVSCodePresentation() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Austin Public Health";
  pptx.title = "VS Code AI Ecosystem";
  pptx.subject = "Copilot, Extensions & Local Models for Enterprise Development";

  // VS Code deck: 12 slides
  const slideOrder = [
    "slide01.html",  // 1. Title Slide
    "slide02.html",  // 2. The AI Extension Landscape
    "slide03.html",  // 3. GitHub Copilot + Azure
    "slide04.html",  // 4. Foundry Local
    "slide05.html",  // 5. AI Toolkit
    "slide06.html",  // 6. Continue.dev
    "slide07.html",  // 7. Cline (Claude Dev)
    "slide08.html",  // 8. Cody & Tabnine
    "slide09.html",  // 9. Amazon Q & CodeGPT
    "slide10.html",  // 10. Extension Comparison Matrix
    "slide11.html",  // 11. Local Model Setup
    "slide12.html",  // 12. Key Takeaways
  ];

  // Speaker notes for each slide
  const speakerNotes = {
    1: "Welcome to the VS Code AI ecosystem guide. VS Code has evolved from a simple editor to a powerful AI development platform. Today we'll cover GitHub Copilot with Azure integration, Microsoft's local inference options, and the rich ecosystem of third-party extensions that support bring-your-own-key and local models.",

    2: "The VS Code AI landscape is diverse. On the native side, you have GitHub Copilot, Microsoft's AI Toolkit, and Foundry Local for on-device inference. Third-party options include Continue, Cline, and Cody. Enterprise-focused tools like Tabnine and Amazon Q offer specific compliance features. And for local inference, Ollama and LM Studio are popular choices. The key considerations are: does it support BYOK, can it run locally, and which cloud providers does it support?",

    3: "GitHub Copilot Enterprise can route through Azure OpenAI for organizations that need data residency and compliance controls. This requires GitHub Enterprise Cloud plus an Azure OpenAI resource. You'll configure the connection in GitHub Enterprise settings using your Azure tenant and subscription IDs. The key benefit is that your code context never leaves your Azure tenant. Authentication uses managed identity, so no API keys are stored in GitHub. It's $39 per user per month plus Azure usage costs.",

    4: "Foundry Local is Microsoft's answer to running small language models locally. It's free, works offline, and supports models like Phi-4, Phi-3.5, Mistral, and Llama 3.2. Install via winget or download from the Microsoft site. It exposes an OpenAI-compatible endpoint at localhost:5272, which means it works with any extension that supports custom endpoints. Hardware requirements are 16GB RAM minimum, 32GB recommended, with 8GB VRAM for decent performance. Perfect for air-gapped environments.",

    5: "The AI Toolkit extension is Microsoft's model experimentation platform within VS Code. It's not a code completion tool like Copilot — instead, it lets you browse a model catalog, download models locally, test them in a playground, and even fine-tune them using LoRA or QLoRA. It supports NVIDIA CUDA, AMD ROCm, Intel NPU, and Apple Silicon. Think of it as your local AI model laboratory integrated into VS Code.",

    6: "Continue.dev is the most flexible open-source option. It's Apache 2.0 licensed and supports over 50 model providers including Azure OpenAI, AWS Bedrock, Google Vertex AI, and local options like Ollama. Configuration is via a JSON file in your home directory. You get chat with Cmd+L, inline edits with Cmd+I, tab completion, and agent features with @codebase for semantic search. If you want maximum control over your AI stack, Continue is the top choice.",

    7: "Cline, formerly known as Claude Dev, is an agentic AI assistant. Unlike chat-based tools, Cline can actually take actions: create and edit files, run terminal commands, and even browse the web. It supports Azure OpenAI, AWS Bedrock, Google Vertex AI, and local models via OpenAI-compatible endpoints. The safety model gives you human-in-the-loop approval for each action, or you can enable auto-approve for trusted operations. Best for complex multi-step tasks where you want the AI to execute, not just suggest.",

    8: "Cody from Sourcegraph and Tabnine are both enterprise-focused. Cody's strength is code graph understanding — it excels at navigating large codebases because it integrates with Sourcegraph's code intelligence. It supports BYOK for Azure, AWS, and Vertex. Tabnine takes a different approach: it can be trained on your codebase for team-specific completions and offers true self-hosted deployment including air-gapped installations. Tabnine doesn't support cloud BYOK in the traditional sense — instead it runs its own models.",

    9: "Two more options worth knowing: Amazon Q Developer is deeply integrated with AWS services, making it ideal if you're building on AWS. It's not traditional BYOK but can leverage Bedrock models. CodeGPT is a budget-friendly option with a good free tier that supports Azure OpenAI and local models via Ollama. It also has an AI Agents marketplace for specialized workflows. Choose Amazon Q if you're AWS-heavy, CodeGPT if you want to experiment without cost commitment.",

    10: "This comparison matrix shows provider support at a glance. Continue and Cline offer the broadest support — both work with Azure, AWS, Vertex, and local models. Cody supports all major clouds but not local inference. Tabnine is unique in focusing entirely on self-hosted and local deployment. CodeGPT supports Azure and local but not AWS or Vertex. Copilot Enterprise only supports Azure and Foundry Local. Our recommendation: Continue for flexibility, Cline for agentic tasks, Copilot Enterprise if you're already invested in the GitHub and Azure ecosystem.",

    11: "For local model setup, Ollama is the most popular choice. Install it with a single curl command on Mac and Linux, or download for Windows. Pull a coding model — codellama:13b is a good balance of capability and speed, deepseek-coder:6.7b is faster, qwen2.5-coder:14b is more capable. Then configure your extension to point to localhost:11434. Hardware requirements scale with model size: 7B models need 8GB VRAM, 13B needs 16GB, and 33B+ needs 24GB or more. Start small and scale up based on your hardware.",

    12: "Key takeaways: First, if you need Azure plus compliance, go with Copilot Enterprise or Continue.dev with Azure keys. Second, for multi-cloud BYOK flexibility, Continue.dev or Cline are your best options. Third, for air-gapped or local-only deployment, look at Foundry Local, Ollama, or Tabnine's self-hosted option. Fourth, if you want agentic automation where AI takes actions, Cline is the tool. Combined with SuperWhisper for voice input, you now have complete flexibility in how you integrate AI into VS Code.",
  };

  console.log(`Building VS Code presentation with ${slideOrder.length} slides`);
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

  const outputPath = path.join(DIST_DIR, "VSCode_AI_Ecosystem_Guide.pptx");
  await pptx.writeFile({ fileName: outputPath });
  console.log(`\nVS Code presentation saved to ${outputPath}`);
  console.log(`Total slides: ${slideOrder.length}`);
}

createVSCodePresentation().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
