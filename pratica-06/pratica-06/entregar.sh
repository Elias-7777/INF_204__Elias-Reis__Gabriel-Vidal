#!/usr/bin/env bash
# Uso: dentro da pasta do projeto, já com o repositório criado no GitHub:
#   git remote add origin <URL-DO-REPO>   (se ainda não existir)
#   bash entregar.sh
set -e
[ -d .git ] || git init
git checkout -b feature/pratica-06

git add package.json package-lock.json app.json index.js assets .gitignore 2>/dev/null || true
git commit -m "chore: inicia projeto Expo e instala React Navigation" || true

git add src/screens
git commit -m "feat: cria telas Home, Configuracoes e DetalhesUsuario com passagem de parametros"

git add src/routes/AppTabs.js
git commit -m "feat: adiciona Bottom Tabs com cores e icones"

git add src/routes/AppStack.js App.js
git commit -m "feat: aninha Tabs dentro da Stack e configura NavigationContainer"

git add -A
git commit -m "docs: adiciona instrucoes de uso" || true
git push -u origin feature/pratica-06
