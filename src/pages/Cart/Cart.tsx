/**
 * Cart.tsx
 * Página do carrinho de compras: lista itens, controla quantidades,
 * exibe resumo do pedido (subtotal, qtd total, total geral) e usa Context API.
 */

import { Link } from 'react-router-dom'
import { FiShoppingCart, FiArrowLeft, FiTrash2 } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'
import { useCart } from '../../contexts/CartContext'
import CartItem from '../../components/CartItem/CartItem'
import Button from '../../components/Button/Button'

const formatPrice = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function Cart() {
  const { items, clearCart, totalItems, totalPrice } = useCart()

  const isEmpty = items.length === 0

  // ── Carrinho vazio ──────────────────────────────────────────────────────────
  if (isEmpty) {
    return (
      <div className="min-h-screen bg-forest-950 font-body flex flex-col items-center justify-center gap-6 px-4 pt-20">
        <div className="w-24 h-24 bg-forest-900/60 border border-forest-800 rounded-full flex items-center justify-center">
          <FiShoppingCart className="text-forest-600 text-4xl" />
        </div>
        <div className="text-center">
          <h1 className="text-white font-display text-2xl mb-2">Seu carrinho está vazio</h1>
          <p className="text-forest-300 text-sm max-w-xs">
            Explore nosso catálogo e adicione animais exóticos ao seu carrinho.
          </p>
        </div>
        <Link to="/catalogo">
          <Button variant="primary" size="lg">
            <FiShoppingCart /> Explorar Catálogo
          </Button>
        </Link>
      </div>
    )
  }

  // ── Carrinho com itens ──────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-forest-950 font-body pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── Cabeçalho ── */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              to="/catalogo"
              className="flex items-center gap-1.5 text-forest-300 hover:text-gold transition-colors text-sm mb-3 group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Continuar comprando
            </Link>
            <h1 className="font-display text-3xl text-white">
              Carrinho de Compras
            </h1>
            <p className="text-forest-300 text-sm mt-1">
              {totalItems} {totalItems === 1 ? 'item' : 'itens'} no carrinho
            </p>
          </div>

          {/* Limpar carrinho */}
          <button
            onClick={() => {
              if (window.confirm('Deseja remover todos os itens do carrinho?')) {
                clearCart()
              }
            }}
            className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm transition-colors px-3 py-2 rounded-lg hover:bg-red-900/20"
          >
            <FiTrash2 />
            <span className="hidden sm:inline">Limpar carrinho</span>
          </button>
        </div>

        {/* ── Layout: itens + resumo ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* ── Lista de itens ── */}
          <ul className="lg:col-span-2 flex flex-col gap-4" aria-label="Itens no carrinho">
            {items.map(item => (
              <CartItem key={item.produto.id} item={item} />
            ))}
          </ul>

          {/* ── Resumo do pedido ── */}
          <aside
            className="bg-forest-900/50 border border-forest-800 rounded-2xl p-6 flex flex-col gap-5 sticky top-24"
            aria-label="Resumo do pedido"
          >
            <h2 className="text-white font-semibold text-lg">Resumo do Pedido</h2>

            {/* Linhas do resumo */}
            <div className="flex flex-col gap-3">
              {/* Subtotal por item */}
              {items.map(({ produto, quantidade }) => (
                <div key={produto.id} className="flex justify-between text-sm">
                  <span className="text-forest-300 truncate max-w-[180px]">
                    {produto.nome} × {quantidade}
                  </span>
                  <span className="text-forest-200 flex-shrink-0">
                    {formatPrice(produto.preco * quantidade)}
                  </span>
                </div>
              ))}

              <div className="border-t border-forest-700 pt-3" />

              {/* Total de itens */}
              <div className="flex justify-between text-sm">
                <span className="text-forest-300">Total de itens</span>
                <span className="text-white font-medium">{totalItems}</span>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between text-sm">
                <span className="text-forest-300">Subtotal</span>
                <span className="text-white font-medium">{formatPrice(totalPrice)}</span>
              </div>

              {/* Frete */}
              <div className="flex justify-between text-sm">
                <span className="text-forest-300">Frete</span>
                <span className="text-forest-300 italic">A calcular</span>
              </div>

              <div className="border-t border-forest-700 pt-3" />

              {/* Total geral */}
              <div className="flex justify-between items-baseline">
                <span className="text-white font-semibold text-base">Total</span>
                <span className="text-gold font-bold text-2xl">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>

            {/* Botão finalizar */}
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() =>
                alert(
                  '🦎 Pedido recebido!\n\nEm breve nossa equipe entrará em contato para confirmar os dados de envio e pagamento.\n\nObrigado por escolher a Exotic Pets Store!'
                )
              }
            >
              <FiShoppingCart /> Finalizar Pedido
            </Button>

            {/* Certificação */}
            <div className="flex items-start gap-2 p-3 bg-gold/5 border border-gold/20 rounded-xl">
              <MdVerified className="text-gold text-base flex-shrink-0 mt-0.5" />
              <p className="text-forest-300 text-xs leading-relaxed">
                Todos os animais acompanham documentação IBAMA e laudo veterinário.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
