# 🦎 Exotic Pets Store

> **Projeto Final — Tecnologias para Interfaces de Aplicações Web**
> Prof. Dr. Ernani Viriato de Melo — IFTM — Uberaba, MG
> Entrega: 14/06/2026

---

## 📖 Sobre o Projeto

A **Exotic Pets Store** é um e-commerce moderno desenvolvido como evolução direta do projeto **Animais Peçonhentos** — um site estático criado anteriormente na disciplina para apresentar informações sobre animais venenosos do Brasil, utilizando apenas HTML, CSS e JavaScript puro.

### 🔄 De onde viemos: Animais Peçonhentos

O projeto original **Animais Peçonhentos** era composto por:

- Páginas HTML estáticas (`index.html`, `sobre.html`, `contato.html`)
- Estilização com CSS puro e sem responsividade completa
- JavaScript vanilla para interações básicas
- Um arquivo `dados.json` com informações textuais dos animais
- Imagens de tarântulas, escorpiões, cobras, sapos e outros animais, todas tiradas de bancos de imagens livres
- Sem gerenciamento de estado, sem roteamento e sem componentização

O conteúdo era puramente **informativo e educacional** — não havia loja, carrinho de compras nem catálogo interativo.

### ⬆️ Para onde evoluímos: Exotic Pets Store

A **Exotic Pets Store** reaproveitou todo o acervo de imagens do projeto Animais Peçonhentos e transformou a temática em uma **loja virtual completa** de animais exóticos legalizados. A mesma fauna que antes era apresentada como curiosidade científica agora é comercializada com preço, estoque, descrição detalhada e integração com carrinho de compras.

| Aspecto | Animais Peçonhentos (original) | Exotic Pets Store (upgrade) |
|---|---|---|
| Tecnologia | HTML + CSS + JS puro | React + TypeScript + Vite |
| Estilização | CSS manual | TailwindCSS com tema customizado |
| Roteamento | Links entre arquivos `.html` | React Router DOM (SPA) |
| Estado | Sem gerenciamento de estado | Context API + useReducer |
| Dados | `dados.json` informativo | `products.json` com 12 produtos completos |
| Imagens | Reaproveitadas do projeto original | As mesmas, renomeadas e organizadas |
| Carrinho | Não existia | Completo, com LocalStorage |
| Responsividade | Parcial | Mobile, tablet e desktop |
| Páginas | 3 páginas estáticas | 7 páginas (Home, Catálogo, Produto, Carrinho, Sobre, Contato, Política) |
| Deploy | Arquivos estáticos | GitHub Pages via `gh-pages` |

---

## 🚀 Como Executar

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev
# → http://localhost:5173
```

> ⚠️ **Não abra o `index.html` diretamente** nem use o Live Server do VS Code.
> O projeto precisa do servidor Vite para funcionar. Use sempre `npm run dev`.

---

## 🌐 Deploy no GitHub Pages

**1.** Altere o `vite.config.ts` para refletir o nome do seu repositório:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/nome-do-seu-repositorio/',
})
```

**2.** Suba o código para o GitHub (via GitHub Desktop ou terminal).

**3.** Execute o deploy:

```bash
npm run deploy
```

**4.** Acesse **Settings → Pages** no repositório e configure:
- Source: `Deploy from a branch`
- Branch: `gh-pages` / `/ (root)`

**5.** Acesse: `https://seu-usuario.github.io/nome-do-repositorio/`

---

## 📁 Estrutura de Pastas

```
exotic-pets-store/
├── public/
│   ├── favicon.svg
│   └── images/              ← Imagens reaproveitadas do projeto Animais Peçonhentos
├── src/
│   ├── components/
│   │   ├── Button/          ← Botão reutilizável (5 variantes)
│   │   ├── CartItem/        ← Item do carrinho com controles de quantidade
│   │   ├── CategoryFilter/  ← Filtro por categoria com botões toggle
│   │   ├── Footer/          ← Rodapé com links e redes sociais
│   │   ├── Header/          ← Cabeçalho fixo com menu mobile e badge do carrinho
│   │   ├── ProductCard/     ← Card de produto com hover e CTA
│   │   └── SearchBar/       ← Campo de busca com ícone e botão limpar
│   ├── contexts/
│   │   └── CartContext.tsx  ← Estado global do carrinho (Context API + useReducer)
│   ├── data/
│   │   └── products.json    ← 12 produtos exóticos com todos os campos
│   ├── pages/
│   │   ├── About/           ← História fictícia da loja, valores e equipe
│   │   ├── Cart/            ← Carrinho completo com resumo do pedido
│   │   ├── Catalog/         ← Catálogo com busca, filtro e ordenação
│   │   ├── Contact/         ← Formulário com validação e estado de sucesso
│   │   ├── Home/            ← Hero, features, destaques, categorias, depoimentos
│   │   ├── PrivacyPolicy/   ← Política completa em conformidade com LGPD
│   │   └── ProductDetails/  ← Página dinâmica via React Router + animais relacionados
│   ├── types/
│   │   └── Product.ts       ← Interfaces TypeScript (Product, CartItemType, etc.)
│   ├── App.tsx              ← HashRouter + CartProvider + 7 rotas
│   ├── index.css            ← Tailwind directives + scroll, scrollbar, seleção
│   └── main.tsx             ← Ponto de entrada React
├── index.html
├── package.json
├── tailwind.config.js       ← Paleta customizada: verde-floresta + dourado + preto
├── tsconfig.app.json
└── vite.config.ts
```

---

## 🛠 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18.3 | Biblioteca principal de UI |
| TypeScript | 5.5 | Tipagem estática em todos os componentes |
| Vite | 5.3 | Build tool e servidor de desenvolvimento |
| TailwindCSS | 3.4 | Framework CSS utilitário com tema customizado |
| React Router DOM | 6.24 | Roteamento SPA com `HashRouter` |
| React Icons | 5.2 | Ícones (FI, FA, GI, MD) |
| Context API | nativa React | Gerenciamento de estado do carrinho |
| localStorage | nativa Web | Persistência do carrinho entre sessões |
| gh-pages | 6.1 | Deploy automatizado no GitHub Pages |

---

## 📦 Catálogo de Produtos

Os 12 produtos do `products.json` são todos animais que já apareciam no projeto **Animais Peçonhentos**, agora com ficha comercial completa:

| Animal | Categoria | Preço |
|---|---|---|
| Tarântula Rose Hair | Aranhas | R$ 280,00 |
| Tarântula Goliath Bird-Eater | Aranhas | R$ 650,00 |
| Escorpião Imperador | Escorpiões | R$ 320,00 |
| Escorpião da Floresta Negra | Escorpiões | R$ 180,00 |
| Jiboia Arco-Íris | Serpentes | R$ 1.200,00 |
| Corn Snake | Serpentes | R$ 380,00 |
| Python Real | Serpentes | R$ 890,00 |
| Gecko Leopardo | Lagartos | R$ 520,00 |
| Dragão Barbudo | Lagartos | R$ 780,00 |
| Camaleão do Iêmen | Lagartos | R$ 1.500,00 |
| Sapo Pacman | Anfíbios | R$ 220,00 |
| Sapo Dendrobate | Anfíbios | R$ 450,00 |

Cada produto possui: `id`, `nome`, `categoria`, `preco`, `descricaoBreve`, `descricaoCompleta`, `imagem`, `estoque` e `destaque`.

---

## 📋 Requisitos do Professor Atendidos

| Etapa | Requisito | Onde está |
|---|---|---|
| 1 | Tema de e-commerce | Exotic Pets Store — animais exóticos |
| 2 | Projeto em React + estrutura de páginas | `src/pages/` — 7 páginas |
| 2 | Componentes reutilizáveis | `src/components/` — 7 componentes |
| 3 | TailwindCSS + design responsivo | `tailwind.config.js` + classes `sm:` `lg:` |
| 3 | Tema visual coerente | Paleta verde-floresta + dourado + preto |
| 4 | JSON com produtos | `src/data/products.json` |
| 4 | Listagem dinâmica do JSON | `Catalog.tsx` com `useMemo` |
| 4 | Filtro por categoria e busca | `CategoryFilter` + `SearchBar` |
| 4 | Ordenação | Select com 5 opções no `Catalog.tsx` |
| 5 | Adicionar / remover / atualizar no carrinho | `CartContext.tsx` — actions do reducer |
| 5 | Gerenciamento de estado | Context API + `useReducer` |
| 5 | Persistência | `localStorage` via `useEffect` |
| 5 | Resumo do pedido | `Cart.tsx` — subtotais, total de itens, total geral |
| 6 | Página de detalhes dinâmica | `ProductDetails.tsx` com `useParams` |
| 6 | Páginas estáticas (Sobre, Contato, Privacidade) | `About`, `Contact`, `PrivacyPolicy` |
| 6 | Deploy no GitHub Pages | `gh-pages` no `package.json` |

---

*Desenvolvido para a disciplina de Tecnologias para Interfaces de Aplicações Web — IFTM Uberaba, 2026.*
