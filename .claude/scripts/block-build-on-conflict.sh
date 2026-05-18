#!/bin/bash
# PreToolUse hook: blocks npm/pnpm/yarn/bun build commands if git has unresolved merge conflicts.
# Maps to Failure #2 of the May 2026 incident: tried `npm run dev` 8+ times against a repo
# with 34 unresolved conflicts, fixing one file at a time as each new error surfaced.

input=$(cat)
cmd=$(echo "$input" | jq -r '.tool_input.command // ""')

# Only intercept package-manager commands that read source files
if ! echo "$cmd" | grep -qE '(^|[[:space:]&;|])(npm|pnpm|yarn|bun)[[:space:]]+(install|ci|run|test|start|dev|build|preview)'; then
  exit 0
fi

# Count files in unmerged state
unmerged=$(git ls-files -u 2>/dev/null | awk '{print $4}' | sort -u | wc -l | tr -d ' ')

if [ "$unmerged" -gt 0 ]; then
  files=$(git ls-files -u 2>/dev/null | awk '{print $4}' | sort -u | head -10 | tr '\n' ',' | sed 's/,$//')
  jq -n --arg files "$files" --arg n "$unmerged" '{
    "hookSpecificOutput": {
      "hookEventName": "PreToolUse",
      "permissionDecision": "deny",
      "permissionDecisionReason": ("BLOCKED: \($n) arquivo(s) com conflito de merge não resolvido. Resolva TODOS antes de rodar comandos de build/install. Arquivos: \($files)... Use: git status | grep \"both\"; depois git checkout --ours . OU resolva manualmente.")
    }
  }'
  exit 0
fi

exit 0
