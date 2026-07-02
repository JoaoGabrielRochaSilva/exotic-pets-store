/**
 * Catalog.tsx
 * Catálogo completo com busca por nome/palavra-chave, filtro por categoria,
 * ordenação por preço e nome, e listagem dinâmica via products.json.
 */

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiSliders, FiX } from 'react-icons/fi'
import SearchBar from '../../components/SearchBar/SearchBar'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import ProductCard from '../../components/ProductCard/ProductCard'
import productsData from '../../data/products.json'
import type { Product, Categoria, Ordenacao } from '../../types/Product'

// Carrega os produtos do JSON com tipagem correta
const allProducts: Product[] = productsData as Product[]

// Opções de ordenação
const sortOptions: { value: Ordenacao; label: string }[] = [
  { value: 'padrao',     label: 'Padrão'               },
  { value: 'preco-asc',  label: 'Menor Preço'           },
  { value: 'preco-desc', label: 'Maior Preço'           },
  { value: 'nome-asc',   label: 'A → Z'                 },
  { value: 'nome-desc',  label: 'Z → A'                 },
]

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams()

  // ── Estado dos filtros ──────────────────────────────────────────────────────
  const [search,    setSearch]    = useState('')
  const [categoria, setCategoria] = useState<Categoria>('Todos')
  const [ordenacao, setOrdenacao] = useState<Ordenacao>('padrao')
  const [showFilters, setShowFilters] = useState(false)

  // Lê parâmetro de categoria da URL (vindo dos links da Home)
  useEffect(() => {
    const catParam = searchParams.get('categoria') as Categoria | null
    if (catParam) {
      setCategoria(catParam)
      // Remove o param da URL para não poluir
      setSearchParams({})
    }
  }, [searchParams, setSearchParams])

  // ── Filtragem e ordenação ─────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let list = [...allProducts]

    // Filtro de categoria
    if (categoria !== 'Todos') {
      list = list.filter(p => p.categoria === categoria)
    }

    // Filtro de busca (nome + descrição breve)
    if (search.trim()) {
      const term = search.toLowerCase().trim()
      list = list.filter(
        p =>
          p.nome.toLowerCase().includes(term) ||
          p.descricaoBreve.toLowerCase().includes(term) ||
          p.categoria.toLowerCase().includes(term)
      )
    }

    // Ordenação
    switch (ordenacao) {
      case 'preco-asc':  list.sort((a, b) => a.preco - b.preco);               break
      case 'preco-desc': list.sort((a, b) => b.preco - a.preco);               break
      case 'nome-asc':   list.sort((a, b) => a.nome.localeCompare(b.nome));    break
      case 'nome-desc':  list.sort((a, b) => b.nome.localeCompare(a.nome));    break
      default: break // 'padrao': ordem original do JSON
    }

    return list
  }, [search, categoria, ordenacao])

  // Verifica se há algum filtro ativo
  const hasActiveFilters = search !== '' || categoria !== 'Todos' || ordenacao !== 'padrao'

  const clearFilters = () => {
    setSearch('')
    setCategoria('Todos')
    setOrdenacao('padrao')
  }

  return (
    <div className="min-h-screen bg-forest-950 font-body">
      {/* ── Cabeçalho da página ── */}
      <div
        className="relative py-24 text-center"
        style={{
          backgroundImage: 'url(/images/catalog-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-forest-950/85" />
        <div className="relative z-10 px-4 pt-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Nossa Coleção
          </p>
          <h1 className="font-display text-4xl lg:text-5xl text-white mb-4">
            Catálogo de Animais
          </h1>
          <p className="text-forest-300 text-base max-w-xl mx-auto">
            Explore nossa seleção de animais exóticos — todos legalizados, saudáveis
            e provenientes de criadouros certificados.
          </p>
        </div>
      </div>

      {/* ── Área principal ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── Barra de ferramentas ── */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Linha superior: Busca + botão filtros mobile */}
          <div className="flex gap-3">
            <div className="flex-grow">
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Buscar por nome, categoria..."
              />
            </div>
            {/* Botão toggle filtros (mobile) */}
            <button
              onClick={() => setShowFilters(v => !v)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-forest-900/60 border border-forest-700 rounded-xl text-forest-300 hover:text-white hover:border-gold/50 transition-all text-sm"
              aria-expanded={showFilters}
            >
              <FiSliders /> Filtros
            </button>
          </div>

          {/* Linha de filtros (sempre visível em lg, toggle em mobile) */}
          <div className={`${showFilters ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-start lg:items-center gap-4`}>
            {/* Filtro de categoria */}
            <div className="flex-grow">
              <CategoryFilter selected={categoria} onChange={setCategoria} />
            </div>

            {/* Select de ordenação */}
            <select
              value={ordenacao}
              onChange={e => setOrdenacao(e.target.value as Ordenacao)}
              aria-label="Ordenar por"
              className="flex-shrink-0 bg-forest-900/60 border border-forest-700 text-forest-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold transition-all cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value} className="bg-forest-900">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Linha de resultado + limpar filtros */}
          <div className="flex items-center justify-between text-sm">
            <p className="text-forest-300">
              <span className="text-white font-semibold">{filtered.length}</span>
              {' '}
              {filtered.length === 1 ? 'animal encontrado' : 'animais encontrados'}
              {categoria !== 'Todos' && (
                <span className="text-gold"> em "{categoria}"</span>
              )}
            </p>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-red-400 hover:text-red-300 transition-colors"
              >
                <FiX className="text-sm" />
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        {/* ── Grid de produtos ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Estado vazio */
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🔍</p>
            <h2 className="text-white font-semibold text-xl mb-2">
              Nenhum animal encontrado
            </h2>
            <p className="text-forest-300 text-sm mb-6">
              Tente ajustar os filtros ou a busca.
            </p>
            <button
              onClick={clearFilters}
              className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors text-sm"
            >
              Limpar todos os filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
