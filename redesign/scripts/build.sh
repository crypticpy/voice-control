#!/bin/bash
#
# Master Build Script for Voice-Driven AI Development Workflows
# Austin Public Health - Part 1 Presentation
#
# This script:
# 1. Sets up Python virtual environment (for PDF conversion)
# 2. Installs all required packages (Node.js and Python)
# 3. Runs all conversion scripts (slides and PDFs)
#
# Usage: ./build.sh [options]
#   --slides-only    Only build PPTX presentations
#   --pdfs-only      Only convert supplements to PDF
#   --core-only      Only build the 35-slide core deck
#   --full-only      Only build the full 81-slide deck
#   --clean          Remove generated files and start fresh
#   --help           Show this help message

set -e  # Exit on first error

# ============================================================================
# Configuration
# ============================================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
VENV_DIR="${ROOT_DIR}/.venv"
DIST_DIR="${ROOT_DIR}/dist"
SRC_DIR="${ROOT_DIR}/src"
SUPPLEMENTS_DIR="${SRC_DIR}/supplements"
LOG_FILE="${ROOT_DIR}/build.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Track what we've done for cleanup on failure
CLEANUP_FILES=()

# ============================================================================
# Utility Functions
# ============================================================================

log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')

    case "$level" in
        INFO)  echo -e "${BLUE}[INFO]${NC} $message" ;;
        OK)    echo -e "${GREEN}[OK]${NC} $message" ;;
        WARN)  echo -e "${YELLOW}[WARN]${NC} $message" ;;
        ERROR) echo -e "${RED}[ERROR]${NC} $message" ;;
    esac

    echo "[$timestamp] [$level] $message" >> "$LOG_FILE"
}

cleanup_on_failure() {
    if [ ${#CLEANUP_FILES[@]} -gt 0 ]; then
        log WARN "Cleaning up partial files from failed build..."
        for file in "${CLEANUP_FILES[@]}"; do
            if [ -f "$file" ]; then
                rm -f "$file"
                log INFO "Removed: $file"
            fi
        done
    fi
}

trap cleanup_on_failure ERR

show_help() {
    head -20 "$0" | tail -15
    exit 0
}

check_command() {
    local cmd="$1"
    local install_hint="$2"

    if ! command -v "$cmd" &> /dev/null; then
        log ERROR "$cmd is not installed. $install_hint"
        return 1
    fi
    return 0
}

# ============================================================================
# Environment Setup
# ============================================================================

setup_python_venv() {
    log INFO "Setting up Python virtual environment..."

    # Check if Python 3 is available
    if ! check_command "python3" "Install Python 3.8+"; then
        return 1
    fi

    # Create venv if it doesn't exist
    if [ ! -d "$VENV_DIR" ]; then
        log INFO "Creating virtual environment at $VENV_DIR"
        python3 -m venv "$VENV_DIR"
    else
        log INFO "Virtual environment already exists"
    fi

    # Activate venv
    source "$VENV_DIR/bin/activate"

    # Upgrade pip
    log INFO "Upgrading pip..."
    pip install --upgrade pip --quiet

    # Install weasyprint for PDF conversion
    log INFO "Installing Python dependencies..."
    pip install weasyprint --quiet 2>/dev/null || {
        log WARN "weasyprint installation failed - PDF conversion may use fallback methods"
    }

    log OK "Python environment ready"
}

setup_node_deps() {
    log INFO "Checking Node.js dependencies..."

    # Check if Node.js is available
    if ! check_command "node" "Install Node.js 18+"; then
        return 1
    fi

    # Check Node version
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        log ERROR "Node.js 18+ required (found v$NODE_VERSION)"
        return 1
    fi

    # Check for required global packages
    local missing_packages=()

    if ! node -e "require('pptxgenjs')" 2>/dev/null; then
        missing_packages+=("pptxgenjs")
    fi

    if ! node -e "require('playwright')" 2>/dev/null; then
        missing_packages+=("playwright")
    fi

    if ! node -e "require('sharp')" 2>/dev/null; then
        missing_packages+=("sharp")
    fi

    if [ ${#missing_packages[@]} -gt 0 ]; then
        log INFO "Installing missing Node packages: ${missing_packages[*]}"
        npm install -g "${missing_packages[@]}" --quiet 2>/dev/null || {
            log ERROR "Failed to install Node packages. Try: npm install -g ${missing_packages[*]}"
            return 1
        }

        # Install Playwright browsers if playwright was just installed
        if [[ " ${missing_packages[*]} " =~ " playwright " ]]; then
            log INFO "Installing Playwright browsers..."
            npx playwright install chromium --quiet 2>/dev/null || {
                log WARN "Playwright browser installation may have issues"
            }
        fi
    fi

    log OK "Node.js dependencies ready"
}

# ============================================================================
# Build Functions
# ============================================================================

build_core_deck() {
    log INFO "Building core presentation (36 slides)..."

    local output_file="${DIST_DIR}/Voice_AI_Workflows_Part1_CORE.pptx"
    CLEANUP_FILES+=("$output_file")

    mkdir -p "$DIST_DIR"
    cd "$SCRIPT_DIR"

    # Run the script - paths are configured within the script
    if NODE_PATH="$(npm root -g)" node convert-core.js 2>> "$LOG_FILE"; then
        log OK "Core deck created: $output_file"
        # Remove from cleanup list on success
        CLEANUP_FILES=("${CLEANUP_FILES[@]/$output_file}")
    else
        log ERROR "Failed to build core deck - check $LOG_FILE for details"
        return 1
    fi
}

build_full_deck() {
    log INFO "Building full presentation (82 slides)..."

    local output_file="${DIST_DIR}/Voice_AI_Workflows_Part1_FULL.pptx"
    CLEANUP_FILES+=("$output_file")

    mkdir -p "$DIST_DIR"
    cd "$SCRIPT_DIR"

    # Run the script - paths are configured within the script
    if NODE_PATH="$(npm root -g)" node convert.js 2>> "$LOG_FILE"; then
        log OK "Full deck created: $output_file"
        CLEANUP_FILES=("${CLEANUP_FILES[@]/$output_file}")
    else
        log ERROR "Failed to build full deck - check $LOG_FILE for details"
        return 1
    fi
}

convert_pdfs() {
    log INFO "Converting supplement materials to PDF..."

    local pdf_dir="${DIST_DIR}/supplements"
    mkdir -p "$pdf_dir"

    local success_count=0
    local fail_count=0
    local total_files=$(ls -1 "${SUPPLEMENTS_DIR}"/*.html 2>/dev/null | wc -l)

    if [ "$total_files" -eq 0 ]; then
        log WARN "No HTML files found in $SUPPLEMENTS_DIR"
        return 0
    fi

    for html_file in "${SUPPLEMENTS_DIR}"/*.html; do
        local basename=$(basename "$html_file" .html)
        local pdf_file="${pdf_dir}/${basename}.pdf"

        CLEANUP_FILES+=("$pdf_file")

        log INFO "Converting: $basename"

        # Try weasyprint first (if available in venv)
        if [ -f "$VENV_DIR/bin/weasyprint" ]; then
            if "$VENV_DIR/bin/weasyprint" "$html_file" "$pdf_file" 2>> "$LOG_FILE"; then
                log OK "  Created: ${basename}.pdf"
                ((success_count++))
                CLEANUP_FILES=("${CLEANUP_FILES[@]/$pdf_file}")
                continue
            fi
        fi

        # Try system weasyprint
        if command -v weasyprint &> /dev/null; then
            if weasyprint "$html_file" "$pdf_file" 2>> "$LOG_FILE"; then
                log OK "  Created: ${basename}.pdf"
                ((success_count++))
                CLEANUP_FILES=("${CLEANUP_FILES[@]/$pdf_file}")
                continue
            fi
        fi

        # Try wkhtmltopdf
        if command -v wkhtmltopdf &> /dev/null; then
            if wkhtmltopdf --quiet "$html_file" "$pdf_file" 2>> "$LOG_FILE"; then
                log OK "  Created: ${basename}.pdf"
                ((success_count++))
                CLEANUP_FILES=("${CLEANUP_FILES[@]/$pdf_file}")
                continue
            fi
        fi

        # Try Chrome/Chromium headless
        local chrome_cmd=""
        for cmd in "google-chrome" "chromium" "chromium-browser" "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; do
            if command -v "$cmd" &> /dev/null || [ -x "$cmd" ]; then
                chrome_cmd="$cmd"
                break
            fi
        done

        if [ -n "$chrome_cmd" ]; then
            if "$chrome_cmd" --headless --disable-gpu --print-to-pdf="$pdf_file" "$html_file" 2>> "$LOG_FILE"; then
                log OK "  Created: ${basename}.pdf"
                ((success_count++))
                CLEANUP_FILES=("${CLEANUP_FILES[@]/$pdf_file}")
                continue
            fi
        fi

        # All methods failed
        log WARN "  Failed to convert: ${basename}.html (manual conversion needed)"
        ((fail_count++))
        rm -f "$pdf_file"  # Remove empty/corrupt file
    done

    log INFO "PDF conversion complete: $success_count succeeded, $fail_count failed"

    if [ "$fail_count" -gt 0 ]; then
        log WARN "Some PDFs could not be created. Open HTML files in browser and use Print > Save as PDF"
    fi
}

clean_build() {
    log INFO "Cleaning generated files..."

    # Remove dist directory (all generated files)
    rm -rf "${DIST_DIR}"

    # Remove venv
    rm -rf "$VENV_DIR"

    # Remove log
    rm -f "$LOG_FILE"

    log OK "Clean complete"
}

# ============================================================================
# Main
# ============================================================================

main() {
    local do_slides=true
    local do_pdfs=true
    local do_core=true
    local do_full=true

    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --slides-only)
                do_pdfs=false
                shift
                ;;
            --pdfs-only)
                do_slides=false
                shift
                ;;
            --core-only)
                do_full=false
                do_pdfs=false
                shift
                ;;
            --full-only)
                do_core=false
                do_pdfs=false
                shift
                ;;
            --clean)
                clean_build
                exit 0
                ;;
            --help|-h)
                show_help
                ;;
            *)
                log ERROR "Unknown option: $1"
                show_help
                ;;
        esac
    done

    # Initialize log
    echo "Build started at $(date)" > "$LOG_FILE"

    echo ""
    echo "=============================================="
    echo " Voice-Driven AI Workflows - Build Script"
    echo "=============================================="
    echo ""

    # Setup environments
    if [ "$do_pdfs" = true ]; then
        setup_python_venv || log WARN "Python setup had issues - PDF conversion may be limited"
    fi

    if [ "$do_slides" = true ]; then
        setup_node_deps || {
            log ERROR "Node.js setup failed - cannot build slides"
            exit 1
        }
    fi

    echo ""
    log INFO "Starting build..."
    echo ""

    # Build slides
    if [ "$do_slides" = true ]; then
        if [ "$do_core" = true ]; then
            build_core_deck || log WARN "Core deck build had issues"
        fi

        if [ "$do_full" = true ]; then
            build_full_deck || log WARN "Full deck build had issues"
        fi
    fi

    # Convert PDFs
    if [ "$do_pdfs" = true ]; then
        convert_pdfs
    fi

    echo ""
    echo "=============================================="
    log OK "Build complete!"
    echo "=============================================="
    echo ""
    echo "Generated files:"

    if [ "$do_slides" = true ]; then
        ls -lh "${DIST_DIR}"/*.pptx 2>/dev/null | awk '{print "  " $NF " (" $5 ")"}'
    fi

    if [ "$do_pdfs" = true ] && [ -d "${DIST_DIR}/supplements" ]; then
        echo ""
        echo "PDF supplements:"
        ls -lh "${DIST_DIR}/supplements"/*.pdf 2>/dev/null | awk '{print "  " $NF " (" $5 ")"}' || echo "  (none created)"
    fi

    echo ""
    echo "See $LOG_FILE for detailed output"
}

main "$@"
