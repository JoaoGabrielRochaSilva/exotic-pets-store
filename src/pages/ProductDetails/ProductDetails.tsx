/**
 * ProductDetails.tsx
 * Página dinâmica de detalhes do produto via React Router (/produto/:id).
 * Exibe imagem, nome, categoria, preço, estoque, descrição completa e CTA.
 */

import { useParams, Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiShoppingCart, FiCheck, FiPackage } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'
import { useCart } from '../../contexts/CartContext'
import Button from '../../components/Button/Button'
import productsData from '../../data/products.json'
import type { Product } from '../../types/Product'

const allProducts: Product[] = productsData as Product[]

// Cores de badge por categoria (mesmo padrão do ProductCard)
const categoryColors: Record<string, string> = {
  Aranhas:    'bg-amber-900/60  text-amber-300',
  Escorpiões: 'bg-orange-900/60 text-orange-300',
  Serpentes:  'bg-green-900/60  text-green-300',
  Lagartos:   'bg-teal-900/60   text-teal-300',
  Anfíbios:   'bg-blue-900/60   text-blue-300',
}

const formatPrice = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ProductDetails() {
  const { id }     = useParams<{ id: string }>()
  const navigate   = useNavigate()
  const { addItem, items } = useCart()

  // Busca o produto pelo id da URL
  const product = allProducts.find(p => p.id === Number(id))

  // Produto não encontrado → redireciona para o catálogo
  if (!product) {
    return (
      <div className="min-h-screen bg-forest-950 flex flex-col items-center justify-center gap-6 px-4 font-body">
        <p className="text-6xl">🦎</p>
        <h1 className="text-white font-display text-2xl text-center">
          Animal não encontrado
        </h1>
        <p className="text-forest-300 text-center">
          O produto que você está procurando não existe ou foi removido.
        </p>
        <Link to="/catalogo">
          <Button variant="primary">Ver catálogo completo</Button>
        </Link>
      </div>
    )
  }

  const inCart      = items.find(i => i.produto.id === product.id)
  const outOfStock  = product.estoque === 0
  const lowStock    = !outOfStock && product.estoque <= 5

  const handleAddToCart = () => {
    if (!outOfStock) addItem(product)
  }

  // Produtos relacionados: mesma categoria, excluindo o atual
  const related = allProducts
    .filter(p => p.categoria === product.categoria && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-forest-950 font-body pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Navegação estrutural" className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-forest-300 hover:text-gold transition-colors text-sm group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Voltar
          </button>
        </nav>

        {/* ── Layout produto ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

          {/* ── Imagem ── */}
          <div className="rounded-2xl overflow-hidden border border-forest-800 aspect-[4/3] lg:aspect-square">
            <img
              src={product.imagem}
              alt={product.nome}
              className="w-full h-full object-cover"
            />
          </div>

          {/* ── Informações ── */}
          <div className="flex flex-col gap-5">
            {/* Categoria */}
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full w-fit ${
                categoryColors[product.categoria] ?? 'bg-forest-700 text-forest-200'
              }`}
            >
              {product.categoria}
            </span>

            {/* Nome */}
            <h1 className="font-display text-3xl lg:text-4xl text-white leading-tight">
              {product.nome}
            </h1>

            {/* Preço */}
            <div className="flex items-baseline gap-3">
              <span className="text-gold font-bold text-4xl">
                {formatPrice(product.preco)}
              </span>
              <span className="text-forest-300 text-sm">por unidade</span>
            </div>

            {/* Estoque */}
            <div className="flex items-center gap-2">
              <FiPackage
                className={
                  outOfStock ? 'text-red-400' : lowStock ? 'text-amber-400' : 'text-forest-600'
                }
              />
              {outOfStock ? (
                <span className="text-red-400 text-sm font-medium">Esgotado</span>
              ) : lowStock ? (
                <span className="text-amber-400 text-sm font-medium">
                  Últimas {product.estoque} unidades disponíveis
                </span>
              ) : (
                <span className="text-forest-300 text-sm">
                  Em estoque — {product.estoque} unidades
                </span>
              )}
            </div>

            {/* Descrição completa */}
            <div className="bg-forest-900/40 border border-forest-800 rounded-xl p-5">
              <h2 className="text-white font-semibold text-base mb-3">Sobre este animal</h2>
              <p className="text-forest-200 text-sm leading-relaxed">
                {product.descricaoCompleta}
              </p>
            </div>

            {/* Certificação */}
            <div className="flex items-start gap-3 p-4 bg-gold/5 border border-gold/20 rounded-xl">
              <MdVerified className="text-gold text-xl flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-sm font-semibold">Animal certificado</p>
                <p className="text-forest-300 text-xs leading-relaxed mt-0.5">
                  Documentação IBAMA/SISPASS inclusa. Proveniente de criadouro regularizado.
                  Laudo veterinário de saída acompanha o animal.
                </p>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                disabled={outOfStock}
                onClick={handleAddToCart}
                aria-label={`Adicionar ${product.nome} ao carrinho`}
              >
                {inCart ? (
                  <>
                    <FiCheck /> Adicionado ao Carrinho
                  </>
                ) : (
                  <>
                    <FiShoppingCart /> Adicionar ao Carrinho
                  </>
                )}
              </Button>

              {inCart && (
                <Link to="/carrinho" className="sm:flex-shrink-0">
                  <Button variant="outline" size="lg" fullWidth>
                    Ver Carrinho
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* ── Animais relacionados ── */}
        {related.length > 0 && (
          <section aria-label="Animais relacionados">
            <h2 className="font-display text-2xl text-white mb-6">
              Outros <span className="text-gold">{product.categoria}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(rel => (
                <Link
                  key={rel.id}
                  to={`/produto/${rel.id}`}
                  className="group bg-forest-900/40 border border-forest-800 rounded-xl overflow-hidden hover:border-gold/40 transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={rel.imagem}
                      alt={rel.nome}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white font-semibold text-sm group-hover:text-gold-light transition-colors">
                      {rel.nome}
                    </p>
                    <p className="text-gold font-bold text-base mt-1">
                      {formatPrice(rel.preco)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
