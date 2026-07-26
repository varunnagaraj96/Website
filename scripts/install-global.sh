#!/usr/bin/env bash
# Installs every skill and slash command from this repo into the user-level
# Claude Code config (~/.claude/skills, ~/.claude/commands) so they're
# available in any new Claude Code session, on any project - not just this
# repo. Run this from a local checkout of the repo:
#
#   git clone https://github.com/varunnagaraj96/Website.git
#   cd Website
#   bash scripts/install-global.sh
#
# Safe to re-run: it overwrites same-named skills/commands with this repo's
# version and leaves everything else in ~/.claude alone.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CLAUDE_DIR="${CLAUDE_CONFIG_DIR:-$HOME/.claude}"

mkdir -p "$CLAUDE_DIR/skills" "$CLAUDE_DIR/commands"

echo "Installing skills to $CLAUDE_DIR/skills ..."
# -L dereferences symlinks: this repo symlinks some skills into .agents/skills/
# for other agents' tooling: copying with -L resolves them to real files so
# they don't break once outside this repo's directory layout.
cp -RL "$REPO_ROOT"/.claude/skills/. "$CLAUDE_DIR/skills/"

echo "Installing commands to $CLAUDE_DIR/commands ..."
cp -RL "$REPO_ROOT"/.claude/commands/. "$CLAUDE_DIR/commands/"

skill_count=$(find "$CLAUDE_DIR/skills" -maxdepth 1 -mindepth 1 -type d | wc -l | tr -d ' ')
command_count=$(find "$CLAUDE_DIR/commands" -maxdepth 1 -name '*.md' | wc -l | tr -d ' ')

echo ""
echo "Done. $skill_count skills and $command_count commands installed to $CLAUDE_DIR."
echo "Available in any new Claude Code session on any project from now on."
