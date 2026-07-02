// ============================================================
// Tipos do domínio: Produto e Carrinho
// ============================================================

/** Categorias disponíveis na loja */
export type Categoria =
  | 'Todos'
  | 'Aranhas'
  | 'Escorpiões'
  | 'Serpentes'
  | 'Lagartos'
  | 'Anfíbios';

/** Opções de ordenação do catálogo */
export type Ordenacao =
  | 'padrao'
  | 'preco-asc'
  | 'preco-desc'
  | 'nome-asc'
  | 'nome-desc';

/** Representa um produto disponível na loja */
export interface Product {
  id: number;
  nome: string;
  categoria: Categoria;
  preco: number;
  descricaoBreve: string;
  descricaoCompleta: string;
  imagem: string;
  estoque: number;
  destaque?: boolean;
}

/** Representa um item no carrinho de compras */
export interface CartItemType {
  produto: Product;
  quantidade: number;
}
