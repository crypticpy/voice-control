const fs = require('fs');
const path = require('path');

// Design constants
const COLORS = {
  primary: '#1a1f2e',
  primaryLight: '#252b3d',
  accent: '#c9a227',
  surface: '#f7f8fa',
  surfaceAlt: '#ffffff',
  muted: '#6b7280',
  border: '#e4e7ed',
  success: '#059669',
  warning: '#d97706',
  danger: '#dc2626'
};

// Helper to create slide HTML
function createSlide(content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    :root {
      --color-primary: ${COLORS.primary};
      --color-accent: ${COLORS.accent};
    }
  </style>
</head>
${content}
</html>`;
}

// Section divider template
function sectionSlide(num, title, subtitle, time) {
  return createSlide(`<body class="col" style="width: 960px; height: 540px; background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 100%);">
  <div class="col fill-height center" style="padding: 48px;">
    <p style="color: ${COLORS.accent}; font-size: 14px; letter-spacing: 4px; margin: 0 0 24px 0; font-family: Arial, sans-serif;">SECTION ${num.toString().padStart(2, '0')}</p>
    <h1 style="color: #ffffff; font-size: 48px; font-family: Georgia, serif; font-weight: 400; margin: 0 0 16px 0; text-align: center;">${title}</h1>
    <p style="color: rgba(255,255,255,0.6); font-size: 18px; font-family: Arial, sans-serif; margin: 0 0 32px 0; text-align: center;">${subtitle}</p>
    <div style="width: 80px; height: 2px; background: ${COLORS.accent};"></div>
  </div>
  <div style="position: absolute; bottom: 32px; right: 48px;">
    <p style="color: rgba(255,255,255,0.3); font-size: 12px; font-family: Arial, sans-serif; margin: 0;">${time}</p>
  </div>
</body>`);
}

// Content slide with left header
function contentSlideLeftHeader(label, title, content) {
  return createSlide(`<body class="row" style="width: 960px; height: 540px;">
  <div class="col" style="width: 35%; height: 100%; background: ${COLORS.primary}; padding: 40px;">
    <div class="col fill-height justify-center">
      <p style="color: ${COLORS.accent}; font-size: 11px; letter-spacing: 3px; margin: 0 0 16px 0; font-family: Arial, sans-serif;">${label}</p>
      <h1 style="color: #ffffff; font-size: 32px; font-family: Georgia, serif; font-weight: 400; margin: 0; line-height: 1.2;">${title}</h1>
    </div>
  </div>
  <div class="col" style="width: 65%; height: 100%; background: ${COLORS.surface}; padding: 40px;">
    ${content}
  </div>
</body>`);
}

// Content slide with top header
function contentSlideTopHeader(label, title, subtitle, content, darkBg = false) {
  const bg = darkBg ? COLORS.primary : COLORS.surface;
  const textColor = darkBg ? '#ffffff' : COLORS.primary;
  const subtitleColor = darkBg ? 'rgba(255,255,255,0.6)' : COLORS.muted;
  
  return createSlide(`<body class="col" style="width: 960px; height: 540px; background: ${bg};">
  <div style="padding: 32px 48px 0 48px;" class="fit">
    <p style="color: ${COLORS.accent}; font-size: 11px; letter-spacing: 3px; margin: 0 0 8px 0; font-family: Arial, sans-serif;">${label}</p>
    <h1 style="color: ${textColor}; font-size: 32px; font-family: Georgia, serif; font-weight: 400; margin: 0;">${title}</h1>
    ${subtitle ? `<p style="color: ${subtitleColor}; font-size: 14px; font-family: Arial, sans-serif; margin: 6px 0 0 0;">${subtitle}</p>` : ''}
  </div>
  <div class="col fill-height" style="padding: 20px 48px 32px 48px;">
    ${content}
  </div>
</body>`);
}

// Slides data
const slides = [];

// Slides 1-6 already created manually - skip
// Continue from slide 9

// Slide 9 - Why Local Processing Matters
slides[9] = contentSlideTopHeader('DATA FLOW', 'Why Local Processing Matters', 'Data sovereignty for government work', `
  <div class="row fill-height" style="gap: 24px;">
    <div class="col" style="flex: 1;">
      <div class="row items-center" style="gap: 12px; margin-bottom: 20px;">
        <div style="background: #dbeafe; padding: 12px 16px; flex: 1; text-align: center;"><p style="color: ${COLORS.primary}; font-size: 12px; margin: 0;">Your Voice</p></div>
        <p style="color: ${COLORS.muted}; margin: 0;">→</p>
        <div style="background: #dcfce7; padding: 12px 16px; flex: 1; text-align: center;"><p style="color: ${COLORS.primary}; font-size: 12px; margin: 0;">SuperWhisper</p></div>
        <p style="color: ${COLORS.muted}; margin: 0;">→</p>
        <div style="background: #dcfce7; padding: 12px 16px; flex: 1; text-align: center;"><p style="color: ${COLORS.primary}; font-size: 12px; margin: 0;">Text Output</p></div>
        <p style="color: ${COLORS.muted}; margin: 0;">→</p>
        <div style="background: #dbeafe; padding: 12px 16px; flex: 1; text-align: center;"><p style="color: ${COLORS.primary}; font-size: 12px; margin: 0;">Your App</p></div>
      </div>
      <div style="background: #dcfce7; padding: 12px; text-align: center; margin-bottom: 20px;">
        <p style="color: #166534; font-size: 12px; font-weight: 700; margin: 0;">ALL PROCESSING STAYS ON YOUR DEVICE</p>
      </div>
      <div style="background: #ffffff; border: 1px solid ${COLORS.border}; padding: 20px;">
        <p style="color: ${COLORS.primary}; font-size: 13px; font-weight: 700; margin: 0 0 10px 0;">Government Benefits</p>
        <p style="color: ${COLORS.muted}; font-size: 12px; margin: 0; line-height: 1.8;">No BAA required<br/>No data egress concerns<br/>Simplified compliance<br/>IT-friendly deployment</p>
      </div>
    </div>
  </div>
`);

// Slide 10 - Platform Requirements
slides[10] = contentSlideTopHeader('REQUIREMENTS', 'Platform &amp; Requirements', 'What you need to run SuperWhisper', `
  <div class="row fill-height" style="gap: 16px;">
    <div class="col" style="flex: 1; background: #ffffff; border-left: 4px solid ${COLORS.accent}; padding: 20px;">
      <p style="color: ${COLORS.primary}; font-size: 13px; font-weight: 700; margin: 0 0 12px 0;">Supported Platforms</p>
      <p style="color: ${COLORS.muted}; font-size: 12px; margin: 0; line-height: 1.8;">✓ macOS (primary)<br/>✓ iOS/iPadOS<br/>✗ Windows<br/>✗ Linux</p>
    </div>
    <div class="col" style="flex: 1; background: #ffffff; border-left: 4px solid ${COLORS.accent}; padding: 20px;">
      <p style="color: ${COLORS.primary}; font-size: 13px; font-weight: 700; margin: 0 0 12px 0;">Hardware</p>
      <p style="color: ${COLORS.muted}; font-size: 12px; margin: 0; line-height: 1.8;">Apple Silicon (M1-M4)<br/>8GB+ RAM recommended<br/>~2GB storage for models</p>
    </div>
    <div class="col" style="flex: 1; background: #ffffff; border-left: 4px solid ${COLORS.accent}; padding: 20px;">
      <p style="color: ${COLORS.primary}; font-size: 13px; font-weight: 700; margin: 0 0 12px 0;">Model Options</p>
      <p style="color: ${COLORS.muted}; font-size: 12px; margin: 0; line-height: 1.8;">Small: Fast, less accurate<br/>Medium: Best balance ✓<br/>Large: Most accurate</p>
    </div>
  </div>
  <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px 20px; margin-top: 16px;">
    <p style="color: #92400e; font-size: 13px; margin: 0;"><strong>Windows Users:</strong> Don't worry! WhisperFlow is your alternative.</p>
  </div>
`);

// Continue with more slides...
// Slide 11 - SuperWhisper Setup
slides[11] = contentSlideLeftHeader('SETUP', 'SuperWhisper<br/>Installation', `
  <div class="col fill-height justify-center" style="gap: 12px;">
    <div class="row items-center" style="background: #ffffff; border: 1px solid ${COLORS.border}; padding: 16px 20px;">
      <div style="width: 32px; height: 32px; background: ${COLORS.primary}; display: flex; align-items: center; justify-content: center; margin-right: 16px;"><p style="color: #ffffff; font-size: 14px; font-weight: 700; margin: 0;">1</p></div>
      <p style="color: ${COLORS.primary}; font-size: 14px; margin: 0;">Download from superwhisper.com</p>
    </div>
    <div class="row items-center" style="background: #ffffff; border: 1px solid ${COLORS.border}; padding: 16px 20px;">
      <div style="width: 32px; height: 32px; background: ${COLORS.primary}; display: flex; align-items: center; justify-content: center; margin-right: 16px;"><p style="color: #ffffff; font-size: 14px; font-weight: 700; margin: 0;">2</p></div>
      <p style="color: ${COLORS.primary}; font-size: 14px; margin: 0;">Install application</p>
    </div>
    <div class="row items-center" style="background: #ffffff; border: 1px solid ${COLORS.border}; padding: 16px 20px;">
      <div style="width: 32px; height: 32px; background: ${COLORS.primary}; display: flex; align-items: center; justify-content: center; margin-right: 16px;"><p style="color: #ffffff; font-size: 14px; font-weight: 700; margin: 0;">3</p></div>
      <p style="color: ${COLORS.primary}; font-size: 14px; margin: 0;">Choose model size (Medium recommended)</p>
    </div>
    <div class="row items-center" style="background: #ffffff; border: 1px solid ${COLORS.border}; padding: 16px 20px;">
      <div style="width: 32px; height: 32px; background: ${COLORS.primary}; display: flex; align-items: center; justify-content: center; margin-right: 16px;"><p style="color: #ffffff; font-size: 14px; font-weight: 700; margin: 0;">4</p></div>
      <p style="color: ${COLORS.primary}; font-size: 14px; margin: 0;">Configure hotkey (e.g., Fn twice)</p>
    </div>
    <div class="row items-center" style="background: ${COLORS.accent}; padding: 16px 20px;">
      <div style="width: 32px; height: 32px; background: ${COLORS.primary}; display: flex; align-items: center; justify-content: center; margin-right: 16px;"><p style="color: #ffffff; font-size: 14px; font-weight: 700; margin: 0;">5</p></div>
      <p style="color: ${COLORS.primary}; font-size: 14px; font-weight: 700; margin: 0;">Verify local-only mode enabled</p>
    </div>
  </div>
`);

// Output directory
const SLIDES_DIR = path.join(__dirname, '..', 'src', 'slides');

// Write remaining slides
for (let i = 9; i <= 11; i++) {
  if (slides[i]) {
    fs.writeFileSync(path.join(SLIDES_DIR, `slide${i.toString().padStart(2, '0')}.html`), slides[i]);
    console.log(`Created slide ${i}`);
  }
}

console.log('Initial slides created. Creating remaining slides...');
