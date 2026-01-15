#!/bin/bash
#
# Build Script for Cursor + Azure AI Integration Presentation
#
# Usage: ./build-cursor.sh
#
# This script builds the 10-slide Cursor deck:
# "Cursor + Azure AI Integration"

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo "=============================================="
echo " Building: Cursor + Azure AI Setup Guide"
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
node scripts/convert-cursor.js

echo ""
echo -e "${GREEN}[DONE]${NC} Build complete!"
echo ""
echo "Output: dist/Cursor_Azure_Setup_Guide.pptx"
echo ""
