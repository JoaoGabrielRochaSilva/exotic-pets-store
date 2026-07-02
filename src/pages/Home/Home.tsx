/**
 * Home.tsx
 * Página inicial: banner hero, features, produtos em destaque,
 * categorias, CTA, depoimentos e footer.
 */

import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle, FiStar } from 'react-icons/fi'
import { GiGecko, GiSpiderWeb, GiFrog, GiSnake } from 'react-icons/gi'
import { MdLocalShipping, MdVerified, MdSupportAgent } from 'react-icons/md'
import ProductCard from '../../components/ProductCard/ProductCard'
import Button from '../../components/Button/Button'
import productsData from '../../data/products.json'
import type { Product } from '../../types/Product'

// Carrega produtos tipados do JSON
const allProducts: Product[] = productsData as Product[]

// Seleciona os produtos em destaque
const featuredProducts = allProducts.filter(p => p.destaque).slice(0, 4)

// ─── Dados estáticos ───────────────────────────────────────────────────────────

const features = [
  {
    Icon: MdVerified,
    title: 'Certificação IBAMA',
    desc: 'Todos os animais possuem documentação legal e são provenientes de criadouros registrados.',
  },
  {
    Icon: MdLocalShipping,
    title: 'Envio Especializado',
    desc: 'Embalagem climatizada e transporte especializado para garantir o bem-estar do animal.',
  },
  {
    Icon: MdSupportAgent,
    title: 'Suporte Veterinário',
    desc: 'Nossa equipe inclui médicos veterinários especializados em animais silvestres e exóticos.',
  },
  {
    Icon: FiCheckCircle,
    title: 'Garantia de Saúde',
    desc: 'Garantimos a saúde do animal no recebimento com laudo veterinário de saída.',
  },
]

const categories = [
  { label: 'Aranhas',    emoji: '🕷️', Icon: GiSpiderWeb, color: 'from-amber-900/60 to-amber-800/20',  to: '/catalogo?categoria=Aranhas' },
  { label: 'Escorpiões', emoji: '🦂', Icon: GiGecko,    color: 'from-orange-900/60 to-orange-800/20', to: '/catalogo?categoria=Escorpiões' },
  { label: 'Serpentes',  emoji: '🐍', Icon: GiSnake,     color: 'from-green-900/60 to-green-800/20',   to: '/catalogo?categoria=Serpentes' },
  { label: 'Lagartos',   emoji: '🦎', Icon: GiGecko,    color: 'from-teal-900/60 to-teal-800/20',     to: '/catalogo?categoria=Lagartos' },
  { label: 'Anfíbios',   emoji: '🐸', Icon: GiFrog,      color: 'from-blue-900/60 to-blue-800/20',     to: '/catalogo?categoria=Anfíbios' },
]

const testimonials = [
  {
    name: 'Maria Clara S.',
    location: 'São Paulo, SP',
    rating: 5,
    text: 'Minha Tarântula Rose Hair chegou saudável e com toda a documentação em dia. O suporte pós-venda foi incrível! Recomendo a Exotic Pets Store para qualquer entusiasta de animais exóticos.',
    animal: 'Tarântula Rose Hair',
  },
  {
    name: 'Ricardo P.',
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'Comprei meu Dragão Barbudo aqui há 2 anos e até hoje recebo suporte da equipe sempre que preciso. A qualidade dos animais e o comprometimento com a legalização me conquistaram.',
    animal: 'Dragão Barbudo',
  },
  {
    name: 'Ana Beatriz C.',
    location: 'Curitiba, PR',
    rating: 5,
    text: 'Melhor loja de exóticos que conheço. O Python Real que recebi estava perfeitamente aclimatado e o guia de cuidados que veio junto é o mais completo que já li. Adorei!',
    animal: 'Python Real',
  },
]

// ─── Componente ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="font-body">

      {/* ═══════════════════════════════════════════════════════
          SEÇÃO 1 — HERO
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        aria-label="Banner principal"
      >
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/85 via-forest-950/70 to-forest-950" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <span className="inline-block bg-gold/20 border border-gold/30 text-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            🦎 Animais Exóticos Legalizados
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
            <span className="text-gold">Exotic</span> Pets
            <br />
            <span className="text-forest-300">Store</span>
          </h1>

          <p className="text-forest-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            O seu paraíso de animais exóticos. Tarântulas, serpentes, lagartos e anfíbios
            raros — todos legalizados, saudáveis e prontos para um novo lar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalogo">
              <Button variant="primary" size="lg" className="min-w-[200px]">
                Explorar Catálogo <FiArrowRight />
              </Button>
            </Link>
            <Link to="/sobre">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Conhecer a Loja
              </Button>
            </Link>
          </div>

          {/* Estatísticas rápidas */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { value: '12+', label: 'Espécies' },
              { value: '5★',  label: 'Avaliação' },
              { value: '100%', label: 'Legalizado' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-gold font-display text-2xl font-bold">{value}</p>
                <p className="text-forest-300 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seta animada de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-gold/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SEÇÃO 2 — FEATURES (diferenciais)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-forest-950 border-y border-forest-800" aria-label="Nossos diferenciais">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center gap-3 group">
                <div className="w-14 h-14 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Icon className="text-gold text-2xl" />
                </div>
                <h3 className="text-white font-semibold text-base">{title}</h3>
                <p className="text-forest-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SEÇÃO 3 — PRODUTOS EM DESTAQUE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-forest-950" aria-label="Produtos em destaque">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da seção */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Seleção Especial</p>
              <h2 className="font-display text-3xl lg:text-4xl text-white">
                Destaques da Semana
              </h2>
            </div>
            <Link to="/catalogo">
              <Button variant="ghost" size="sm">
                Ver todos <FiArrowRight />
              </Button>
            </Link>
          </div>

          {/* Grid de produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SEÇÃO 4 — CATEGORIAS
      ═══════════════════════════════════════════════════════ */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: 'url(/images/page-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label="Categorias"
      >
        <div className="absolute inset-0 bg-forest-950/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Explore por Tipo</p>
            <h2 className="font-display text-3xl lg:text-4xl text-white">Categorias</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map(({ label, emoji, color, to }) => (
              <Link
                key={label}
                to={to}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-b ${color} border border-forest-700 hover:border-gold/40 p-6 flex flex-col items-center gap-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/30`}
              >
                <span className="text-4xl" role="img" aria-label={label}>{emoji}</span>
                <span className="text-white font-semibold text-sm group-hover:text-gold-light transition-colors">
                  {label}
                </span>
                <span className="text-forest-300 text-xs flex items-center gap-1 group-hover:text-gold transition-colors">
                  Ver animais <FiArrowRight className="text-xs" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SEÇÃO 5 — CALL TO ACTION
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-forest-900 via-forest-800 to-forest-900" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-white mb-4">
            Pronto para encontrar seu
            <span className="text-gold"> novo companheiro</span>?
          </h2>
          <p className="text-forest-200 text-lg mb-8 leading-relaxed">
            Explore nosso catálogo completo com dezenas de espécies exóticas, todas
            com documentação IBAMA e suporte veterinário especializado.
          </p>
          <Link to="/catalogo">
            <Button variant="primary" size="lg">
              Explorar Catálogo Completo <FiArrowRight />
            </Button>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SEÇÃO 6 — DEPOIMENTOS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-forest-950" aria-label="Depoimentos de clientes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">O Que Dizem</p>
            <h2 className="font-display text-3xl lg:text-4xl text-white">Depoimentos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, location, rating, text, animal }) => (
              <article
                key={name}
                className="bg-forest-900/50 border border-forest-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-gold/30 transition-all"
              >
                {/* Estrelas */}
                <div className="flex gap-0.5" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <FiStar key={i} className="text-gold fill-gold text-sm" />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-forest-200 text-sm leading-relaxed flex-grow">
                  "{text}"
                </p>

                {/* Animal comprado */}
                <span className="text-xs bg-gold/10 text-gold px-2.5 py-1 rounded-full w-fit">
                  {animal}
                </span>

                {/* Autor */}
                <div className="flex items-center gap-3 pt-2 border-t border-forest-800">
                  <div className="w-9 h-9 rounded-full bg-forest-700 flex items-center justify-center text-white font-bold text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{name}</p>
                    <p className="text-forest-300 text-xs">{location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
