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
