# Leonardo Oliveira Das Neves — Portfólio

Site pessoal em Angular apresentando experiência profissional, no estilo visual da apple.com.

## Stack técnica

- **Angular 18** com **standalone components** (sem NgModules)
- **Signals** (`signal`, `computed`) para estado reativo do menu e scroll
- **Novo control flow** (`@if`, `@for`) em todos os templates
- Diretiva própria com `IntersectionObserver` para o efeito de reveal no scroll
- SCSS puro, sem framework de CSS, com design tokens em `src/styles.scss`

## Como rodar

```bash
npm install
npm start
```

Acesse **http://localhost:4200**.

## Build de produção

```bash
npm run build
```

Os arquivos ficam em `dist/leonardo-portfolio/browser`.

## Testes unitários

O projeto usa **Jasmine + Karma** (padrão do Angular CLI), com cobertura para todos os componentes, a diretiva de scroll-reveal e o serviço de idioma:

```bash
npm test
```

Isso abre uma janela do Chrome e roda a suíte. Os testes cobrem:

- `LangService` — troca de idioma, `toggle()`, persistência em `localStorage`
- `RevealDirective` — aplicação das classes `reveal` / `is-visible` via `IntersectionObserver`
- Cada componente de seção — renderização correta do conteúdo vindo de `content.ts`, contagem de itens (experiências, skills, educação), troca de idioma refletindo no DOM
- `AppComponent` — garante que todas as seções são montadas na página

O workflow de deploy (`.github/workflows/deploy.yml`) roda os testes automaticamente antes de publicar — se algum teste falhar, o deploy não acontece.

## Deploy no GitHub Pages (gratuito)

O projeto já vem com um workflow pronto em `.github/workflows/deploy.yml` que builda e publica o site automaticamente a cada `push` na branch `main`.

**Passo a passo:**

1. Crie um repositório no GitHub e suba o projeto:
   ```bash
   git init
   git add .
   git commit -m "portfolio"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```
2. No GitHub, vá em **Settings > Pages** do repositório.
3. Em **Build and deployment > Source**, selecione **GitHub Actions** (não "Deploy from a branch").
4. Pronto. O workflow já dispara sozinho assim que detecta o push. Acompanhe o progresso na aba **Actions** do repositório.
5. Em 1-2 minutos o site estará no ar em:
   ```
   https://SEU-USUARIO.github.io/SEU-REPO/
   ```

O build usa `--base-href ./` (caminho relativo), então funciona tanto em `usuario.github.io/repo` quanto em `usuario.github.io` sem precisar editar nada — não é necessário saber o nome do repositório de antemão.

Toda vez que você editar `src/app/data/content.ts` (ou qualquer outro arquivo) e der `git push`, o site atualiza sozinho automaticamente.

### Deploy manual (alternativa, sem GitHub Actions)

Se preferir publicar manualmente em vez de usar o workflow:

```bash
npm run build:gh-pages
npx angular-cli-ghpages --dir=dist/leonardo-portfolio/browser
```

(o pacote `angular-cli-ghpages` é instalado automaticamente na primeira execução via `npx`).

## Estrutura

```
src/app/
  components/
    navbar/       -> menu fixo translúcido com blur
    hero/         -> seção de abertura em tela cheia
    about/        -> resumo + números de carreira
    experience/   -> timeline das experiências (cards com glass effect)
    skills/       -> grid de competências técnicas
    education/    -> formação acadêmica
    contact/      -> chamada final + contatos
    footer/
  directives/
    reveal.directive.ts  -> fade-up ao entrar na viewport
  data/
    profile.data.ts      -> todo o conteúdo do currículo (edite aqui)
```

## Editando o conteúdo

Todo o texto (experiências, skills, formação, contatos) está centralizado em
`src/app/data/profile.data.ts`. Não é necessário mexer nos componentes para
atualizar informações — apenas edite esse arquivo.
