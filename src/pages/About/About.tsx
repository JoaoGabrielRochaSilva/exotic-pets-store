/**
 * About.tsx
 * Página institucional com a história fictícia da Exotic Pets Store,
 * missão, valores e equipe.
 */

import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { MdVerified, MdFavorite, MdNature } from 'react-icons/md'
import { GiGecko } from 'react-icons/gi'
import Button from '../../components/Button/Button'

const values = [
  {
    Icon: MdVerified,
    title: 'Legalidade',
    desc: 'Trabalhamos exclusivamente com criadouros certificados pelo IBAMA. Toda comercialização segue rigorosamente a legislação ambiental brasileira e os tratados CITES.',
  },
  {
    Icon: MdFavorite,
    title: 'Bem-estar Animal',
    desc: 'Cada animal passa por quarentena veterinária antes de ser disponibilizado para venda. O bem-estar dos bichos é nossa prioridade número um, sempre.',
  },
  {
    Icon: MdNature,
    title: 'Conservação',
    desc: 'Parte da nossa receita é destinada a projetos de conservação de espécies ameaçadas no Brasil. Acreditamos que o mercado responsável pode ajudar a proteger a fauna.',
  },
  {
    Icon: GiGecko,
    title: 'Educação',
    desc: 'Disponibilizamos guias de cuidado completos, suporte veterinário pós-venda e conteúdo educativo para todos os nossos clientes, iniciantes ou experientes.',
  },
]

const team = [
  {
    name: 'Dr. Felipe Andrade',
    role: 'Médico Veterinário — Fauna Silvestre',
    initials: 'FA',
    bio: 'Especialista em répteis e anfíbios com mais de 12 anos de experiência. Responsável pelos protocolos de saúde e quarentena de todos os animais.',
  },
  {
    name: 'Camila Rocha',
    role: 'Fundadora & Criadora',
    initials: 'CR',
    bio: 'Criadora de tarântulas e répteis há 15 anos. Fundou a Exotic Pets Store em 2018 com a missão de tornar o hobby de animais exóticos mais acessível e legalizado.',
  },
  {
    name: 'Lucas Mendes',
    role: 'Especialista em Serpentes',
    initials: 'LM',
    bio: 'Herpetologista amador e criador licenciado de boids e colubrídeos. Responsável pelo plantel de serpentes e pela produção de conteúdo educativo da loja.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-forest-950 font-body pt-20">

      {/* ── Hero da página ── */}
      <div
        className="relative py-28 text-center"
        style={{
          backgroundImage: 'url(/images/page-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-forest-950/88" />
        <div className="relative z-10 px-4">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Nossa História</p>
          <h1 className="font-display text-4xl lg:text-5xl text-white mb-4">
            Sobre a Exotic Pets Store
          </h1>
          <p className="text-forest-300 text-base max-w-xl mx-auto">
            Nascemos do amor por animais exóticos e da certeza de que é possível criar
            com responsabilidade, legalidade e respeito pela natureza.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── História ── */}
        <section className="mb-16" aria-label="História da loja">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Como Tudo Começou</p>
              <h2 className="font-display text-3xl text-white mb-6 leading-tight">
                De uma paixão de infância<br />
                <span className="text-gold">a uma loja referência</span>
              </h2>
              <div className="space-y-4 text-forest-200 text-sm leading-relaxed">
                <p>
                  A <strong className="text-white">Exotic Pets Store</strong> nasceu em 2018 no interior de Minas Gerais, das mãos
                  de Camila Rocha, criadora apaixonada de tarântulas desde os 14 anos. O que
                  começou como um hobby em um quarto de 10m² se transformou em uma das lojas
                  de animais exóticos mais respeitadas do Brasil.
                </p>
                <p>
                  Insatisfeita com a escassez de informação confiável e a informalidade que
                  dominava o mercado, Camila decidiu criar um negócio diferente: uma loja onde
                  cada animal viesse com documentação, suporte veterinário e guias de cuidado
                  detalhados — tornando o hobby mais seguro e acessível para todos.
                </p>
                <p>
                  Hoje, com uma equipe de especialistas, parcerias com criadouros em 8 países
                  e mais de 500 animais comercializados, a Exotic Pets Store é sinônimo de
                  confiança, legalidade e cuidado genuíno com a fauna exótica.
                </p>
              </div>
            </div>

            {/* Imagem da história */}
            <div className="rounded-2xl overflow-hidden border border-forest-800 aspect-square">
              <img
                src="/images/hero-bg.jpg"
                alt="Natureza e fauna exótica"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── Valores ── */}
        <section className="mb-16" aria-label="Nossos valores">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">O Que Nos Move</p>
            <h2 className="font-display text-3xl text-white">Nossos Valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-forest-900/40 border border-forest-800 rounded-2xl p-6 flex gap-4 hover:border-gold/30 transition-all"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="text-gold text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-forest-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Equipe ── */}
        <section className="mb-16" aria-label="Nossa equipe">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Quem Faz Acontecer</p>
            <h2 className="font-display text-3xl text-white">Nossa Equipe</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map(({ name, role, initials, bio }) => (
              <div
                key={name}
                className="bg-forest-900/40 border border-forest-800 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-gold/30 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-forest-700 to-forest-900 border-2 border-gold/30 flex items-center justify-center text-white font-bold text-xl font-display">
                  {initials}
                </div>
                <div>
                  <p className="text-white font-semibold">{name}</p>
                  <p className="text-gold text-xs mt-0.5">{role}</p>
                </div>
                <p className="text-forest-300 text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center py-12 bg-gradient-to-r from-forest-900 via-forest-800 to-forest-900 rounded-2xl border border-forest-700">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Pronto para começar?</p>
          <h2 className="font-display text-2xl text-white mb-4">
            Encontre seu próximo companheiro exótico
          </h2>
          <Link to="/catalogo">
            <Button variant="primary" size="lg">
              Ver Catálogo <FiArrowRight />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}
