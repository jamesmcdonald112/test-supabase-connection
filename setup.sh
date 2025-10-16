#!/usr/bin/env bash
set -euo pipefail

echo "🔧 Setting up environment files..."
repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$repo_root"

require_or_create() {
  local example="$1"
  local target="$2"
  local default_content="$3"

  if [[ -f "$target" ]]; then
    echo "⚠️  $target already exists (leaving it as-is)"
    return
  fi

  if [[ -f "$example" ]]; then
    cp "$example" "$target"
    echo "✅ Created $target from $example"
  else
    printf "%s\n" "$default_content" > "$target"
    echo "🧪 $example missing — created $target with safe defaults"
  fi
}

# backend/.env
require_or_create "backend/.env.example" "backend/.env" \
"SPRING_PROFILES_ACTIVE=dev
# Supabase (only used in 'supabase' profile)
SUPABASE_JDBC_URL=
SUPABASE_USERNAME=
SUPABASE_PASSWORD=
# Docker Postgres (used in 'prod' profile)
POSTGRES_USER=admin
POSTGRES_PASSWORD=password
POSTGRES_DB=appdb
"

# frontend/.env
require_or_create "frontend/.env.example" "frontend/.env" \
"VITE_API_URL=http://localhost:8080/api
"

# (optional) root .env used by some flows
require_or_create ".env.example" ".env" \
"SPRING_PROFILES_ACTIVE=dev
"

echo "✨ Environment setup complete!"
echo "   - backend/.env → $( [[ -f backend/.env ]] && echo OK || echo MISSING )"
echo "   - frontend/.env → $( [[ -f frontend/.env ]] && echo OK || echo MISSING )"
echo "   - .env (root, optional) → $( [[ -f .env ]] && echo OK || echo MISSING )"