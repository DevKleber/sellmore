# Wiseller — Front-end

Interface do Wiseller, um CRM simples para vendedores acompanharem leads e os contatos indicados por eles ("referidos"). A API fica em outro repositório (`sellmore-api`, Laravel). Sistema antigo e em produção: mude com cuidado e sempre com teste.

## Stack

- Angular 13.1, TypeScript 4.5, RxJS 7.4.
- Angular Material, `@ng-select/ng-select`, `angular-calendar`, `ngx-mask`, `sweetalert2`, `ngx-lottie`.
- Bootstrap 3 e jQuery embutidos em `src/assets/lib` (carregados pelo `angular.json`, não pelo npm).
- Node 16 para instalar e fazer o build. Não use Node mais novo na raiz do projeto.

## Como rodar

O ambiente fica na pasta acima deste repositório (`docker-compose.yml` com front, API, MySQL e Mailpit).

```bash
docker compose up -d            # na pasta acima
docker compose logs -f web      # acompanha o build
```

- Front em `http://localhost:4200`, API em `http://localhost:8000`.
- **O `src/environments/environment.ts` versionado aponta para a API de produção.** O compose monta por cima dele um arquivo que aponta para a API local. Rodar `ng serve` fora do Docker faz a tela ler e gravar em produção: não faça isso.
- `environment.prod.ts` é usado no build de produção (`ng build`, configuração padrão).

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `src/app/app.routes.ts` | rotas: `/login`, `/login/:to`, `/request-recover-password`, `/` (tela principal), `/access_log`, `/not-found` |
| `src/app/security/` | login, cadastro de conta, recuperação de senha, guard e interceptors do token JWT |
| `src/app/sellmore/` | a tela principal: um único componente grande (`sell-more.component.*`) com leads, referidos, filtros, busca, agenda, roteiro e importação |
| `src/app/log/` | relatório de acesso (só o usuário administrador enxerga) |
| `src/app/layout/` | cabeçalho e menu |
| `src/app/shared/` | campos, mensagens, tema escuro, serviços auxiliares |
| `src/app/app.api.ts` | endereços da API, lidos de `environment` |
| `e2e/` | testes de ponta a ponta (Playwright), pacote npm separado |

## Aparência

- **Cores, fontes e medidas** são variáveis CSS em `src/assets/css/colors.css`, com os temas claro e escuro. Nunca escreva cor fixa: use as variáveis. O tema é o atributo `data-theme` do `<html>`, controlado por `ThemeService`.
- **Componentes visuais** (`ws-btn`, `ws-card`, `ws-pill`, `ws-tag`, `ws-stat`, `ws-avatar`...) ficam em `src/assets/css/wiseller-ui.css`. O CSS dos componentes Angular tem limite de tamanho no build (10 kB), então o que for reutilizável vai para esse arquivo.
- **Base** (botões, campos, modais do Bootstrap, menus do Material, SweetAlert, agenda) em `src/styles.css`.
- **Ícones**: `<app-icon name="..." [size]="20"></app-icon>` (`src/app/shared/icon/`). O Font Awesome ainda é usado dentro dos modais.
- **Filtros de status** são pílulas de seleção única ("Todos" ou um status); por trás continuam os cinco campos `boShow*` enviados à API.
- Fontes: Inter (texto) e Plus Jakarta Sans (títulos), carregadas do Google Fonts.
- O modelo que originou o layout está em `tarefas/modelo-painel/`, na pasta acima do repositório.

- O usuário logado e o token ficam no `localStorage` (chave `user`); o tema em `darkmodeWiseller`; a versão vista em `wiseller_version`.
- O aviso de versão nova compara o valor guardado em `wiseller_version` com o que `GET /api/currentVersion` devolve; quem define a versão é a API.
- Modais são do Bootstrap 3, abertos por jQuery.

## Domínio (o que a tela mostra)

- **Lead**: cliente raiz, exibido como um card. **Referido**: contato indicado por um lead, listado dentro do card. Um referido pode virar lead ("Tornar Lead") e ter os próprios referidos.
- **Status do atendimento**: aberto, ligar depois, problemas com cartão, não tem interesse, comprou. Os filtros da tela ligam e desligam cada status.
- **Arquivar** esconde o cliente sem apagar; dá para reativar.
- **Roteiro** ("estratégia"): texto e link de venda do vendedor, usados no modal de ligação e nas mensagens de WhatsApp.
- **Agenda**: compromissos de "ligar depois".
- **Importação**: arquivo `.vcf` de contatos, que vira uma lista de referidos de um lead.

## Testes E2E

```bash
cd e2e
npm ci                      # primeira vez
npm run install:browser     # primeira vez em máquina nova
npm test                    # precisa do Docker no ar
npm run test:ui             # modo interativo
npm run report              # relatório da última execução
npm run typecheck
```

- Rodam no host com Node 18 ou mais novo, e não no container do front. O `e2e/` tem `package.json` e lockfile próprios para **não afetar o build do Angular**: não acrescente dependências de teste ao `package.json` da raiz.
- `pages/`: page objects das telas, componentes e modais. `support/`: fixtures, contas de teste, clientes de API e mocks. `tests/`: specs por área.
- Dois projetos do Playwright: `chromium` (desktop, 1440x900) roda tudo menos `tests/celular/`; `celular` (390x844) roda só essa pasta.
- Cada arquivo cria um vendedor novo pela API, com e-mail `@wiseller.test`. Nunca use usuários reais do banco.
- A API limita a 60 requisições por minuto por usuário; a suíte controla o ritmo por conta. Ao criar um arquivo de teste, use as fixtures existentes para herdar esse controle.
- O navegador dos testes só alcança `localhost`. O envio de bug (`POST /api/issue`, que cria cartão no Trello) é sempre simulado, e a recuperação de senha só é testada com e-mail inexistente. Mantenha essas proteções.
- Não use `waitForTimeout`; use as esperas e asserts do Playwright.
- **Não altere `src/` para facilitar teste** (por exemplo com `data-testid`) sem combinar antes; os seletores ficam centralizados nos page objects.
- `test.fixme` marca um defeito conhecido da aplicação, com um comentário explicando o que acontece hoje. Ao corrigir o defeito, troque por `test`.
- Os demais testes descrevem o que a tela faz hoje. Se você mudar um comportamento de propósito, atualize o teste na mesma mudança.

## Site de apresentação

A pasta `site/` é a página pública de `https://wiseller.com.br`: HTML e CSS estáticos, sem build e sem JavaScript. A plataforma (este projeto Angular) fica em `https://app.wiseller.com.br`.

- Para ver localmente: `python3 -m http.server 8099 --directory site`.
- As cores repetem as de `src/assets/css/colors.css`; o tema escuro segue a preferência do sistema.
- O texto da página de dúvidas aparece duas vezes: no HTML e no bloco `application/ld+json`. Altere os dois.
- `site/assets/img/system/wiseller.png` precisa continuar nesse caminho: o e-mail de recuperação de senha da API aponta para ele.
- `site/.htaccess` é versionado: força `https` sem `www`, redireciona os endereços antigos da plataforma (`/login`, `/request-recover-password`, `/access_log`, `/not-found`) para `app.wiseller.com.br` e define o cache.
- Página nova: crie o `.html` em `site/` e acrescente o endereço ao `site/sitemap.xml`.

## Deploy

Todo push em `master` ou `main` publica em produção. São dois workflows, que nunca rodam ao mesmo tempo:

| Workflow | Dispara quando muda | Publica em |
|---|---|---|
| `.github/workflows/deploy.yml` | qualquer coisa fora de `site/` | `app.wiseller.com.br` |
| `.github/workflows/deploy-site.yml` | `site/` | `wiseller.com.br` |

Plataforma:

1. `npm ci` e `ng build` de produção, em Node 16.
2. Envia `dist/wiseller` por `rsync` com `--delete` para o destino `app/`.
3. Confere a página inicial e a rota interna `/login`.

Site: envia `site/` por `rsync` com `--delete` e confere a página inicial, o `robots.txt` e o redirecionamento de `/login`.

- A mesma chave de deploy atende os dois. No servidor, `~/scripts/deploy/wiseller-front-acesso.sh` só aceita `rsync` e escolhe a pasta pelo destino (`app/` é a plataforma, o resto é o site).
- **O `.htaccess` da plataforma não é versionado nem enviado.** É ele que faz o F5 funcionar nas rotas do Angular, define o cache e manda o `noindex`. Tudo que começa com ponto na raiz fica preservado, e a conferência de `/login` falha se ele sumir.
- Não coloque na raiz do build arquivos que comecem com ponto: eles não são publicados. No site, só o `.htaccess` é enviado.
- Para avisar os usuários de uma versão nova, altere a rota `currentVersion` na API; o `version` do `package.json` não é usado pela tela.

## Convenções

- Código e textos da interface em português.
- Clean Code e SOLID: funções pequenas, nomes descritivos, sem números mágicos, retorno antecipado em vez de `else` e de condicionais aninhadas.
- Commits: mensagem começando com `[branch]`, um commit por mudança lógica, sem linhas de coautoria.
- Indentação com tab, como no restante do projeto (`.editorconfig` e `.prettierrc.js`).
