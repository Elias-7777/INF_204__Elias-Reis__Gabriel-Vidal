
set -e
[ -d .git ] || git init
git checkout -b feature/pratica-07

git add package.json package-lock.json app.json index.js assets .gitignore LICENSE AGENTS.md 2>/dev/null || true
git commit -m "chore: inicia projeto Expo e instala axios" || true

git add .env .env.example src/services
git commit -m "feat: isola instancia do Axios em services/api.js com variavel de ambiente"

git add src/screens/ListaUtilizadores.js
git commit -m "feat: lista de utilizadores com useEffect, try/catch/finally, ActivityIndicator e pull-to-refresh"

git add src/screens/NovoUtilizador.js App.js
git commit -m "feat: formulario POST com Alert e navegacao por abas"

git add -A
git commit -m "docs: adiciona instrucoes de uso" || true
git push -u origin feature/pratica-07
