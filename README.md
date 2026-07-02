# 🦎 Exotic Pets Store

E-commerce moderno de animais exóticos legalizados, desenvolvido com React + TypeScript + Vite + TailwindCSS.

> **Projeto Final — Tecnologias para Interfaces de Aplicações Web**  
> Prof. Dr. Ernani Viriato de Melo — IFTM  
> Entrega: 14/06/2026

---

## 📋 Tabela de Requisitos × Implementação

| Etapa | Requisito do PDF | Implementado em |
|-------|-----------------|-----------------|
| **1** | Tema de e-commerce definido | Exotic Pets Store — loja de animais exóticos |
| **2** | Projeto em React | Vite + React 18 + TypeScript |
| **2** | Página inicial (Home) | `src/pages/Home/Home.tsx` |
| **2** | Catálogo de produtos/serviços | `src/pages/Catalog/Catalog.tsx` |
| **2** | Página de detalhes de produto | `src/pages/ProductDetails/ProductDetails.tsx` |
| **2** | Carrinho de compras | `src/pages/Cart/Cart.tsx` |
| **2** | Página de Contato | `src/pages/Contact/Contact.tsx` |
| **2** | Página Sobre | `src/pages/About/About.tsx` |
| **2** | Componentes reutilizáveis | `src/components/` (Header, Footer, ProductCard, Button, etc.) |
| **3** | Framework CSS escolhido | TailwindCSS v3 (`tailwind.config.js`) |
| **3** | Design responsivo | Classes `sm:`, `md:`, `lg:` em todos os componentes |
| **3** | Tema visual | Paleta verde-floresta + dourado + preto |
| **4** | Arquivo JSON com produtos | `src/data/products.json` (12 produtos) |
| **4** | Listagem dinâmica via JSON | `Catalog.tsx` importa e filtra `products.json` |
| **4** | Filtro por categoria | `CategoryFilter` component + estado local |
| **4** | Busca por nome/palavra-chave | `SearchBar` component + `useMemo` no Catalog |
| **4** | Ordenação por preço/nome | `<select>` com Ordenacao type no Catalog |
| **5** | Adicionar ao carrinho | `CartContext.tsx` → action `ADD_ITEM` |
| **5** | Remover do carrinho | `CartContext.tsx` → action `REMOVE_ITEM` |
| **5** | Atualizar quantidade | `CartContext.tsx` → action `UPDATE_QUANTITY` |
| **5** | Limpar carrinho | `CartContext.tsx` → action `CLEAR_CART` |
| **5** | Gerenciamento de estado | Context API + `useReducer` |
| **5** | Persistência no LocalStorage | `useEffect` no `CartProvider` salva automaticamente |
| **5** | Subtotal por item | `CartItem.tsx` — `preco × quantidade` |
| **5** | Total de itens | `CartContext.tsx` — `totalItems` derivado |
| **5** | Total geral | `CartContext.tsx` — `totalPrice` derivado |
| **5** | Resumo do pedido | `Cart.tsx` — aside com resumo completo |
| **6** | Página de detalhes dinâmica | `ProductDetails.tsx` com `useParams` (React Router) |
| **6** | Animais relacionados | `ProductDetails.tsx` filtra mesma categoria |
| **6** | Página Sobre (estática) | `About.tsx` — história, valores, equipe |
| **6** | Página Política de Privacidade | `PrivacyPolicy.tsx` — texto completo com LGPD |
| **6** | Deploy no GitHub Pages | `gh-pages` no `package.json` + instruções abaixo |

---

## 🚀 Instalação e Execução Local

### Pré-requisitos
- Node.js 18+ instalado
- npm 9+ ou yarn

### Passos

```bash
# 1. Entre na pasta do projeto
cd exotic-pets-store

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 🏗 Build para Produção

```bash
npm run build
```

O build gerado fica em `dist/`. Para visualizar localmente:

```bash
npm run preview
```

---

## 🌐 Deploy no GitHub Pages

### Passo a passo completo

**1. Crie um repositório no GitHub**
```
Nome sugerido: exotic-pets-store
```

**2. Configure o `vite.config.ts`**

Altere a propriedade `base` para o nome do seu repositório:
```ts
export default defineConfig({
  plugins: [react()],
  base: '/exotic-pets-store/',   // ← altere aqui
})
```

**3. Inicialize o Git e suba o código**
```bash
git init
git add .
git commit -m "feat: Exotic Pets Store - Projeto Final TIAW"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/exotic-pets-store.git
git push -u origin main
```

**4. Faça o deploy**
```bash
npm run deploy
```

Isso executa `npm run build` + `gh-pages -d dist`, publicando na branch `gh-pages`.

**5. Ative o GitHub Pages**
- Vá em **Settings → Pages**
- Em **Source**, selecione: `Deploy from a branch`
- Branch: `gh-pages` / Folder: `/ (root)`
- Clique em **Save**

**6. Acesse o site**
```
https://SEU_USUARIO.github.io/exotic-pets-store/
```

---

## 📁 Estrutura de Pastas

```
exotic-pets-store/
├── public/
│   ├── favicon.svg
│   └── images/              ← Imagens dos produtos (reaproveitadas do projeto original)
│       ├── hero-bg.jpg
│       ├── tarantula-rose-hair.jpg
│       └── ...
├── src/
│   ├── components/
│   │   ├── Button/          ← Botão reutilizável (5 variantes)
│   │   ├── CartItem/        ← Item do carrinho com controles
│   │   ├── CategoryFilter/  ← Filtro por categoria
│   │   ├── Footer/          ← Rodapé
│   │   ├── Header/          ← Cabeçalho com menu mobile
│   │   ├── ProductCard/     ← Card de produto
│   │   └── SearchBar/       ← Campo de busca
│   ├── contexts/
│   │   └── CartContext.tsx  ← Estado global do carrinho
│   ├── data/
│   │   └── products.json    ← 12 produtos exóticos
│   ├── pages/
│   │   ├── About/
│   │   ├── Cart/
│   │   ├── Catalog/
│   │   ├── Contact/
│   │   ├── Home/
│   │   ├── PrivacyPolicy/
│   │   └── ProductDetails/
│   ├── types/
│   │   └── Product.ts       ← Interfaces TypeScript
│   ├── App.tsx              ← Roteamento com HashRouter
│   ├── index.css            ← Tailwind + estilos globais
│   └── main.tsx             ← Ponto de entrada
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.app.json
└── vite.config.ts
```

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | 18.3 | Biblioteca principal de UI |
| TypeScript | 5.5 | Tipagem estática |
| Vite | 5.3 | Build tool e dev server |
| TailwindCSS | 3.4 | Framework CSS responsivo |
| React Router DOM | 6.24 | Roteamento SPA |
| React Icons | 5.2 | Ícones (FI, FA, GI, MD) |
| gh-pages | 6.1 | Deploy no GitHub Pages |
| Context API | nativa | Gerenciamento de estado do carrinho |
| LocalStorage | nativa | Persistência do carrinho |

---

## 📦 Produtos disponíveis no JSON

| # | Nome | Categoria | Preço |
|---|------|-----------|-------|
| 1 | Tarântula Rose Hair | Aranhas | R$ 280,00 |
| 2 | Tarântula Goliath Bird-Eater | Aranhas | R$ 650,00 |
| 3 | Escorpião Imperador | Escorpiões | R$ 320,00 |
| 4 | Escorpião da Floresta Negra | Escorpiões | R$ 180,00 |
| 5 | Jiboia Arco-Íris | Serpentes | R$ 1.200,00 |
| 6 | Corn Snake | Serpentes | R$ 380,00 |
| 7 | Python Real | Serpentes | R$ 890,00 |
| 8 | Gecko Leopardo | Lagartos | R$ 520,00 |
| 9 | Dragão Barbudo | Lagartos | R$ 780,00 |
| 10 | Camaleão do Iêmen | Lagartos | R$ 1.500,00 |
| 11 | Sapo Pacman | Anfíbios | R$ 220,00 |
| 12 | Sapo Dendrobate | Anfíbios | R$ 450,00 |

---

## 💡 Como o Código Foi Implementado

### Carrinho de Compras (Context API + useReducer)
O carrinho usa o padrão **Flux** com `useReducer`. O estado é um array de `CartItemType[]`.
Toda alteração dispara um `dispatch` com a ação correspondente. O `useEffect` ouve as mudanças
e persiste automaticamente no `localStorage`.

### Catálogo Dinâmico
O `Catalog.tsx` usa `useMemo` para recalcular a lista filtrada somente quando `search`,
`categoria` ou `ordenacao` mudam — evitando re-renders desnecessários.

### Roteamento
Usa `HashRouter` em vez de `BrowserRouter` para garantir compatibilidade com GitHub Pages
sem configuração adicional de servidor.

### TypeScript
Todos os componentes e contextos estão corretamente tipados. Nenhum `any` foi utilizado.

---

## ✅ Checklist do Projeto

- [x] React + TypeScript + Vite
- [x] TailwindCSS com tema customizado
- [x] Design responsivo (mobile / tablet / desktop)
- [x] 7 páginas implementadas
- [x] 7 componentes reutilizáveis
- [x] JSON com 12 produtos
- [x] Busca por nome e palavra-chave
- [x] Filtro por 5 categorias
- [x] Ordenação por preço e nome
- [x] Carrinho com add / remove / update / clear
- [x] Context API + useReducer
- [x] Persistência no localStorage
- [x] Resumo do pedido com subtotais
- [x] Página de detalhes dinâmica com React Router
- [x] Animais relacionados na página de detalhes
- [x] Páginas estáticas: Sobre, Contato, Política de Privacidade
- [x] Formulário de contato com validação
- [x] Deploy configurado para GitHub Pages
- [x] Imagens reaproveitadas do projeto original

---

*Projeto desenvolvido para a disciplina de Tecnologias para Interfaces de Aplicações Web — IFTM Uberaba.*
