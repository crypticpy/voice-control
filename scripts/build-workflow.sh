#!/bin/bash
#
# Build Script for Voice-First Project Workflow Presentation
#
# Usage: ./build-workflow.sh
#
# This script builds the 13-slide workflow deck:
# "Structuring Projects for Voice-First AI Development"

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo "=============================================="
echo " Building: Voice-First Project Workflow Deck"
echo "=============================================="
echo ""

cd "$ROOT_DIR"

# Check dependencies
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is required. Install Node.js 18+"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}[INFO]${NC} Installing dependencies..."
    npm install
fi

# Check for Playwright browsers
if ! npx playwright install --help &> /dev/null 2>&1; then
    echo -e "${BLUE}[INFO]${NC} Installing Playwright..."
    npm install playwright
fi

# Run conversion
echo -e "${BLUE}[INFO]${NC} Converting slides to PowerPoint..."
node scripts/convert-workflow.js

echo ""
echo -e "${GREEN}[DONE]${NC} Build complete!"
echo ""
echo "Output: dist/Voice_First_Project_Workflow.pptx"
echo ""
