#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="${1:-github-page}"
PORT="${2:-8787}"
SIM_ROOT="${TMPDIR:-/tmp}/gh-pages-sim"
REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"

if [[ ! -d "$REPO_DIR/me" || ! -d "$REPO_DIR/labs" ]]; then
  echo "me or labs directory not found under: $REPO_DIR" >&2
  exit 1
fi

rm -rf "$SIM_ROOT"
mkdir -p "$SIM_ROOT"
ln -s "$REPO_DIR" "$SIM_ROOT/$REPO_NAME"

echo "GitHub Pages simulation"
echo "Repo path: /$REPO_NAME/"
echo "Open: http://localhost:${PORT}/${REPO_NAME}/"
echo
echo "Press Ctrl+C to stop"

exec python3 -m http.server "$PORT" --directory "$SIM_ROOT"
