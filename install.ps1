$ErrorActionPreference = 'Stop'
Write-Host 'Kannada Language Toolkit installer'

$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
  throw 'Node.js 18+ is required. Install Node.js and run this script again.'
}

$major = [int](node -p "process.versions.node.split('.')[0]")
if ($major -lt 18) {
  throw 'Node.js 18+ is required.'
}

npm install
npm test

Write-Host 'Installation and verification completed successfully.'
