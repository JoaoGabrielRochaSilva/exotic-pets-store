/**
 * ProductCard.tsx
 * Card de produto com imagem, categoria, nome, preço e ações.
 * Inclui estado de esgotado e efeito de hover na imagem.
 */

import { Link } from 'react-router-dom'
import { FiShoppingCart, FiEye } from 'react-icons/fi'
import { useCart } from '../../contexts/CartContext'
import Button from '../Button/Button'
import type { Product } from '../../types/Product'

interface ProductCardProps {
  product: Product
}

// Formata preço para BRL
const formatPrice = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// Cores das badges por categoria
const categoryColors: Record<string, string> = {
  Aranhas:    'bg-amber-900/60 text-amber-300',
  Escorpiões: 'bg-orange-900/60 text-orange-300',
  Serpentes:  'bg-green-900/60  text-green-300',
  Lagartos:   'bg-teal-900/60   text-teal-300',
  Anfíbios:   'bg-blue-900/60   text-blue-300',
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCart()
  const noCart = items.find(i => i.produto.id === product.id)
  const outOfStock = product.estoque === 0

  const handleAddToCart = () => {
    if (!outOfStock) addItem(product)
  }

  return (
    <article className="group bg-forest-900/60 border border-forest-800 rounded-2xl overflow-hidden flex flex-col hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 animate-fade-in">

      {/* ── Imagem ── */}
      <Link to={`/produto/${product.id}`} className="relative overflow-hidden block aspect-[4/3]">
        <img
          src={product.imagem}
          alt={product.nome}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay escuro ao hover */}
        <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/30 transition-all duration-300" />

        {/* Badge de destaque */}
        {product.destaque && (
          <span className="absolute top-3 left-3 bg-gold text-forest-950 text-xs font-bold px-2.5 py-1 rounded-full">
            ⭐ Destaque
          </span>
        )}

        {/* Badge esgotado */}
        {outOfStock && (
          <span className="absolute inset-0 flex items-center justify-center bg-forest-950/70">
            <span className="bg-red-900/90 text-red-200 text-sm font-semibold px-4 py-2 rounded-full">
              Esgotado
            </span>
          </span>
        )}

        {/* Ícone "Ver detalhes" ao hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-forest-950/80 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
            <FiEye /> Ver detalhes
          </span>
        </div>
      </Link>

      {/* ── Conteúdo ── */}
      <div className="flex flex-col flex-grow p-4 gap-3">
        {/* Categoria */}
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full w-fit ${
            categoryColors[product.categoria] ?? 'bg-forest-700/60 text-forest-200'
          }`}
        >
          {product.categoria}
        </span>

        {/* Nome */}
        <Link to={`/produto/${product.id}`}>
          <h3 className="text-white font-semibold text-base leading-snug hover:text-gold-light transition-colors line-clamp-2">
            {product.nome}
          </h3>
        </Link>

        {/* Descrição breve */}
        <p className="text-forest-300 text-sm leading-relaxed line-clamp-2 flex-grow">
          {product.descricaoBreve}
        </p>

        {/* Estoque */}
        {!outOfStock && product.estoque <= 5 && (
          <p className="text-amber-400 text-xs font-medium">
            ⚠ Apenas {product.estoque} disponível{product.estoque !== 1 ? 'is' : ''}
          </p>
        )}

        {/* Preço + Ações */}
        <div className="flex items-end justify-between gap-2 mt-auto pt-2 border-t border-forest-800">
          <span className="text-gold font-bold text-lg leading-none">
            {formatPrice(product.preco)}
          </span>

          <div className="flex gap-2">
            <Link to={`/produto/${product.id}`}>
              <Button variant="outline" size="sm" aria-label={`Ver detalhes de ${product.nome}`}>
                Detalhes
              </Button>
            </Link>
            <Button
              variant="primary"
              size="sm"
              disabled={outOfStock}
              onClick={handleAddToCart}
              aria-label={`Adicionar ${product.nome} ao carrinho`}
            >
              {noCart ? (
                <><FiShoppingCart /> +1</>
              ) : (
                <><FiShoppingCart /> Comprar</>
              )}
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
