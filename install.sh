#!/usr/bin/env bash
set -euo pipefail

echo "Kannada Language Toolkit installer"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js 18+ is required. Install Node.js and run this script again."
  exit 1
fi

node -e "const major=Number(process.versions.node.split('.')[0]); if (major < 18) { console.error('Node.js 18+ is required.'); process.exit(1); }"

npm install
npm test

echo "Installation and verification completed successfully."
