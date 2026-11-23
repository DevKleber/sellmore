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
- Cada arquivo cria um vendedor novo pela API, com e-mail `@wiseller.test`. Nunca use usuários reais do banco.
- A API limita a 60 requisições por minuto por usuário; a suíte controla o ritmo por conta. Ao criar um arquivo de teste, use as fixtures existentes para herdar esse controle.
- O navegador dos testes só alcança `localhost`. O envio de bug (`POST /api/issue`, que cria cartão no Trello) é sempre simulado, e a recuperação de senha só é testada com e-mail inexistente. Mantenha essas proteções.
- Não use `waitForTimeout`; use as esperas e asserts do Playwright.
- **Não altere `src/` para facilitar teste** (por exemplo com `data-testid`) sem combinar antes; os seletores ficam centralizados nos page objects.
- `test.fixme` marca um defeito conhecido da aplicação, com um comentário explicando o que acontece hoje. Ao corrigir o defeito, troque por `test`.
- Os demais testes descrevem o que a tela faz hoje. Se você mudar um comportamento de propósito, atualize o teste na mesma mudança.

## Deploy

`.github/workflows/deploy.yml`: todo push em `master` ou `main` publica em produção.

1. `npm ci` e `ng build` de produção, em Node 16.
2. Envia `dist/wiseller` por `rsync` com `--delete`.
3. Confere a página inicial e a rota interna `/login`.

- **O `.htaccess` do servidor não é versionado nem enviado.** É ele que faz o F5 funcionar nas rotas do Angular. Tudo que começa com ponto na raiz do site fica preservado, e a conferência de `/login` falha se ele sumir.
- Não coloque na raiz do build arquivos que comecem com ponto: eles não são publicados.
- Para avisar os usuários de uma versão nova, altere a rota `currentVersion` na API; o `version` do `package.json` não é usado pela tela.

## Convenções

- Código e textos da interface em português.
- Clean Code e SOLID: funções pequenas, nomes descritivos, sem números mágicos, retorno antecipado em vez de `else` e de condicionais aninhadas.
- Commits: mensagem começando com `[branch]`, um commit por mudança lógica, sem linhas de coautoria.
- Indentação com tab, como no restante do projeto (`.editorconfig` e `.prettierrc.js`).
