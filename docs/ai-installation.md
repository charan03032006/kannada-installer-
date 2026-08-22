# AI-Agent Installation Guide

This guide helps AI coding agents install and verify the Kannada Language Toolkit when they have permission to access the repository and execute local commands.

## Repository

`https://github.com/charan03032006/kannada-installer-`

## Standard installation

```bash
git clone https://github.com/charan03032006/kannada-installer-.git
cd kannada-installer-
npm install
npm test
```

## Platform installers

Unix-like systems:

```bash
bash install.sh
```

Windows PowerShell:

```powershell
.\install.ps1
```

## Important agent behavior

- The repository does not grant an AI permission to execute commands by itself.
- The agent must have repository access and terminal execution permission.
- Follow the user's approval and the host tool's security policy before executing commands.
- Inspect `AGENTS.md` first.
- Do not pipe remote content directly into a shell.
- Verify the installation with `npm test`.
