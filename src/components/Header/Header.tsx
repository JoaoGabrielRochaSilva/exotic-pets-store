/**
 * Header.tsx
 * Cabeçalho sticky com navegação, badge do carrinho e menu mobile hambúrguer.
 */

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import { GiGecko } from 'react-icons/gi'
import { useCart } from '../../contexts/CartContext'

const navLinks = [
  { label: 'Início',    to: '/' },
  { label: 'Catálogo', to: '/catalogo' },
  { label: 'Sobre',    to: '/sobre' },
  { label: 'Contato',  to: '/contato' },
]

export default function Header() {
  const { totalItems } = useCart()
  const { pathname }   = useLocation()
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  // Muda background do header ao rolar a página
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha menu mobile ao navegar
  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-forest-950/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-forest-950/80 backdrop-blur-sm',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex items-center gap-2 group flex-shrink-0"
            aria-label="Exotic Pets Store - Página Inicial"
          >
            <GiGecko className="text-gold text-2xl lg:text-3xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-display text-white text-sm lg:text-base leading-tight group-hover:text-gold-light transition-colors">
              <span className="text-gold">Exotic</span> Pets
              <br className="hidden sm:block" />
              <span className="text-gold-light"> Store</span>
            </span>
          </Link>

          {/* ── Nav desktop ── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={[
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  pathname === to
                    ? 'bg-gold/20 text-gold'
                    : 'text-forest-300 hover:text-white hover:bg-forest-800',
                ].join(' ')}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Ações direita ── */}
          <div className="flex items-center gap-2">
            {/* Carrinho */}
            <Link
              to="/carrinho"
              aria-label={`Carrinho — ${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`}
              className="relative flex items-center justify-center w-10 h-10 rounded-lg text-forest-300 hover:text-white hover:bg-forest-800 transition-all"
            >
              <FiShoppingCart className="text-xl" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-forest-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-scale-in">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>

            {/* Hambúrguer mobile */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-forest-300 hover:text-white hover:bg-forest-800 transition-all"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>

        {/* ── Menu mobile dropdown ── */}
        {menuOpen && (
          <nav
            className="md:hidden pb-4 animate-fade-in"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-1 pt-2 border-t border-forest-800">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className={[
                    'px-4 py-3 rounded-lg text-base font-medium transition-all',
                    pathname === to
                      ? 'bg-gold/20 text-gold'
                      : 'text-forest-300 hover:text-white hover:bg-forest-800',
                  ].join(' ')}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/carrinho"
                className="px-4 py-3 rounded-lg text-base font-medium text-forest-300 hover:text-white hover:bg-forest-800 flex items-center gap-2"
              >
                <FiShoppingCart />
                Carrinho
                {totalItems > 0 && (
                  <span className="ml-auto bg-gold text-forest-950 text-xs font-bold px-2 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
