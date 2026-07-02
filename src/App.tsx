/**
 * App.tsx
 * Componente raiz da aplicação.
 * Configura o HashRouter (compatível com GitHub Pages sem servidor),
 * o CartProvider (estado global) e todas as rotas da aplicação.
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import Header          from './components/Header/Header'
import Footer          from './components/Footer/Footer'
import Home            from './pages/Home/Home'
import Catalog         from './pages/Catalog/Catalog'
import ProductDetails  from './pages/ProductDetails/ProductDetails'
import Cart            from './pages/Cart/Cart'
import About           from './pages/About/About'
import Contact         from './pages/Contact/Contact'
import PrivacyPolicy   from './pages/PrivacyPolicy/PrivacyPolicy'

export default function App() {
  return (
    // CartProvider envolve toda a árvore para que o carrinho seja acessível em qualquer página
    <CartProvider>
      {/* HashRouter: usa #/ em vez de /. Ideal para deploy estático (GitHub Pages) */}
      <Router>
        <div className="min-h-screen flex flex-col bg-forest-950 font-body">
          {/* Header fixo: sempre visível */}
          <Header />

          {/* Área principal: cresce para ocupar o espaço restante */}
          <main className="flex-grow">
            <Routes>
              <Route path="/"                          element={<Home />} />
              <Route path="/catalogo"                  element={<Catalog />} />
              <Route path="/produto/:id"               element={<ProductDetails />} />
              <Route path="/carrinho"                  element={<Cart />} />
              <Route path="/sobre"                     element={<About />} />
              <Route path="/contato"                   element={<Contact />} />
              <Route path="/politica-de-privacidade"   element={<PrivacyPolicy />} />
              {/* Rota 404 — redireciona para Home */}
              <Route path="*"                          element={<Home />} />
            </Routes>
          </main>

          {/* Footer: sempre ao fundo */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}
