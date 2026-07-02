/**
 * Footer.tsx
 * Rodapé com links de navegação, redes sociais e informações legais.
 */

import { Link } from 'react-router-dom'
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { GiGecko } from 'react-icons/gi'
import { MdVerified } from 'react-icons/md'

const loja = [
  { label: 'Catálogo Completo', to: '/catalogo' },
  { label: 'Carrinho',          to: '/carrinho' },
]

const empresa = [
  { label: 'Sobre Nós',  to: '/sobre' },
  { label: 'Contato',    to: '/contato' },
]

const legal = [
  { label: 'Política de Privacidade', to: '/politica-de-privacidade' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-forest-800">
      {/* ── Corpo principal ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Coluna 1 — Marca */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <GiGecko className="text-gold text-2xl group-hover:rotate-12 transition-transform" />
              <span className="font-display text-white text-sm leading-tight">
                <span className="text-gold">Exotic</span> Pets Store
              </span>
            </Link>
            <p className="text-forest-300 text-sm leading-relaxed mb-6">
              Seu destino para animais exóticos legalizados, terrários, acessórios
              e alimentação especializada. Criação responsável e apaixonada.
            </p>

            {/* Redes sociais */}
            <div className="flex items-center gap-3">
              {[
                { Icon: FaInstagram, href: '#', label: 'Instagram' },
                { Icon: FaWhatsapp,  href: '#', label: 'WhatsApp' },
                { Icon: FaYoutube,   href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-forest-800 flex items-center justify-center text-forest-300 hover:text-gold hover:bg-forest-700 transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 — Loja */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Loja</h3>
            <ul className="space-y-2.5">
              {loja.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-forest-300 text-sm hover:text-gold-light transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Empresa</h3>
            <ul className="space-y-2.5">
              {empresa.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-forest-300 text-sm hover:text-gold-light transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — Certificações */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Certificações</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MdVerified className="text-gold text-lg mt-0.5 flex-shrink-0" />
                <p className="text-forest-300 text-xs leading-relaxed">
                  Todos os animais possuem documentação IBAMA/SISPASS e são provenientes de criadouros legalizados.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <MdVerified className="text-gold text-lg mt-0.5 flex-shrink-0" />
                <p className="text-forest-300 text-xs leading-relaxed">
                  Espécies exóticas importadas acompanham certificado CITES conforme legislação brasileira.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Rodapé inferior ── */}
      <div className="border-t border-forest-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-forest-300 text-xs">
            © {new Date().getFullYear()} Exotic Pets Store. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {legal.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="text-forest-300 text-xs hover:text-gold-light transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
