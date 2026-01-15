#!/bin/bash
#
# Build Script for VS Code AI Ecosystem Presentation
#
# Usage: ./build-vscode.sh
#
# This script builds the 12-slide VS Code deck:
# "VS Code AI Ecosystem - Copilot, Extensions & Local Models"

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo "=============================================="
echo " Building: VS Code AI Ecosystem Guide"
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

# Run conversion
echo -e "${BLUE}[INFO]${NC} Converting slides to PowerPoint..."
node scripts/convert-vscode.js

echo ""
echo -e "${GREEN}[DONE]${NC} Build complete!"
echo ""
echo "Output: dist/VSCode_AI_Ecosystem_Guide.pptx"
echo ""
