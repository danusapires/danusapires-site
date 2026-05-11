#!/bin/bash
# SessionStart hook: injects environment diagnostics into model context.
# Maps to Failure #4 of the May 2026 incident: didn't run `git status` / `node --version`
# upfront, so spent 10+ messages reactively patching symptoms (one merge marker at a time,
# Node version mismatch surfaced after npm install, etc.).

cd "$(jq -r '.cwd // "."' <<< "$(cat)")" 2>/dev/null || cd .

unmerged=$(git ls-files -u 2>/dev/null | awk '{print $4}' | sort -u | wc -l | tr -d ' ')
node_ver=$(node --version 2>/dev/null || echo "NOT_INSTALLED")
required_node=$(jq -r '.engines.node // "any"' package.json 2>/dev/null)
branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "no-git")
modified=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')

ctx="DIAGNÓSTICO INICIAL (executado pelo hook SessionStart, não por Claude):"
ctx="$ctx\n- Branch: $branch"
ctx="$ctx\n- Node instalado: $node_ver | engines.node requerido: $required_node"
ctx="$ctx\n- Arquivos com conflito de merge não resolvido: $unmerged"
ctx="$ctx\n- Arquivos modificados/untracked: $modified"

if [ "$unmerged" -gt 0 ]; then
  ctx="$ctx\n\n⚠️  AÇÃO OBRIGATÓRIA: existem conflitos de merge. NÃO sugira npm/build/install antes de resolvê-los. Hook block-build-on-conflict bloqueará automaticamente."
fi

if [ "$node_ver" != "NOT_INSTALLED" ] && [ "$required_node" != "any" ]; then
  required_major=$(echo "$required_node" | grep -oE '[0-9]+' | head -1)
  current_major=$(echo "$node_ver" | grep -oE '[0-9]+' | head -1)
  if [ -n "$required_major" ] && [ -n "$current_major" ] && [ "$current_major" -lt "$required_major" ]; then
    ctx="$ctx\n\n⚠️  Node desatualizado: $node_ver < requerido $required_node. Avise o usuário ANTES de propor npm install/run."
  fi
fi

jq -n --arg c "$(printf "%b" "$ctx")" '{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": $c}}'
