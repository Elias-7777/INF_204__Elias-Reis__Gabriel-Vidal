
set -e
[ -d .git ] || git init
git checkout -b feature/pratica-05

git add package.json package-lock.json app.json index.js assets .gitignore LICENSE AGENTS.md 2>/dev/null || true
git commit -m "chore: inicia projeto Expo da pratica 05" || true

git add App.js
git commit -m "feat: agenda com FlatList, separador e estado vazio, pull-to-refresh e rolagem infinita"

git add -A
git commit -m "docs: adiciona instrucoes de uso" || true
git push -u origin feature/pratica-05
