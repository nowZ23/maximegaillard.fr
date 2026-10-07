#!/bin/zsh
# Publie le portfolio sur Cloudflare Pages depuis une copie propre : seuls les fichiers du site partent en ligne.
set -e
SRC="${0:A:h}"
OUT="$(mktemp -d)"
mkdir -p "$OUT/public"
rsync -a --exclude='.git' --exclude='.netlify' --exclude='.wrangler' --exclude='.DS_Store' --exclude='.gitignore' \
  --exclude='index.backup*' --exclude='functions' --exclude='wrangler.toml' --exclude='deploy-cloudflare.sh' \
  --exclude='README.md' --exclude='netlify' "$SRC/" "$OUT/public/"
cp -R "$SRC/functions" "$OUT/functions"
cp "$SRC/wrangler.toml" "$OUT/wrangler.toml"
cd "$OUT"
npx -y wrangler@latest pages deploy --branch main --commit-dirty=true "$@"
rm -rf "$OUT"
