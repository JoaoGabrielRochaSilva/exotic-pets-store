/**
 * CartItem.tsx
 * Item do carrinho com imagem, nome, controles de quantidade e remoção.
 */

import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi'
import { useCart } from '../../contexts/CartContext'
import type { CartItemType } from '../../types/Product'

interface CartItemProps {
  item: CartItemType
}

const formatPrice = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCart()
  const { produto, quantidade } = item
  const subtotal = produto.preco * quantidade

  return (
    <li className="flex gap-4 p-4 bg-forest-900/40 border border-forest-800 rounded-xl animate-fade-in">
      {/* Imagem */}
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
        loading="lazy"
      />

      {/* Detalhes */}
      <div className="flex flex-col flex-grow gap-2 min-w-0">
        {/* Nome e categoria */}
        <div>
          <p className="text-white font-semibold text-sm leading-tight truncate">
            {produto.nome}
          </p>
          <p className="text-forest-300 text-xs">{produto.categoria}</p>
        </div>

        {/* Preço unitário */}
        <p className="text-gold text-sm font-medium">
          {formatPrice(produto.preco)} / un.
        </p>

        {/* Controles de quantidade + remover */}
        <div className="flex items-center justify-between mt-auto">
          {/* Stepper de quantidade */}
          <div className="flex items-center gap-1 bg-forest-800 rounded-lg p-1">
            <button
              onClick={() => updateQuantity(produto.id, quantidade - 1)}
              aria-label="Diminuir quantidade"
              className="w-7 h-7 flex items-center justify-center text-forest-300 hover:text-white hover:bg-forest-700 rounded-md transition-all"
            >
              <FiMinus className="text-sm" />
            </button>
            <span
              className="w-8 text-center text-white text-sm font-semibold"
              aria-live="polite"
              aria-label={`Quantidade: ${quantidade}`}
            >
              {quantidade}
            </span>
            <button
              onClick={() => updateQuantity(produto.id, quantidade + 1)}
              disabled={quantidade >= produto.estoque}
              aria-label="Aumentar quantidade"
              className="w-7 h-7 flex items-center justify-center text-forest-300 hover:text-white hover:bg-forest-700 rounded-md transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FiPlus className="text-sm" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Subtotal */}
            <span className="text-gold font-bold text-sm">
              {formatPrice(subtotal)}
            </span>

            {/* Remover */}
            <button
              onClick={() => removeItem(produto.id)}
              aria-label={`Remover ${produto.nome} do carrinho`}
              className="w-8 h-8 flex items-center justify-center text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded-lg transition-all"
            >
              <FiTrash2 className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
