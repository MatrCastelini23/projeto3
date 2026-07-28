import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import ListaProdutos from "./pages/ListaProdutos"
import Main from "./pages/Main"
export function App() {

  return (
    <>
      <BrowserRouter>
        <header className="header-app">
            <div className="header-content">
                <Link
                    to={"/"}>
                    <span className="header-logo"><img src="/logo_orbita_ecommerce.png" alt="" className="object-contain" /></span>
                </Link>
                <nav className="header-nav">
                    <Link
                        to="/produtos"
                        className="header-dropDown"
                    >Produtos</Link>
                    <Link
                        to="/ofertas"
                        className="header-link"
                    >
                        Ofertas
                    </Link>
                    <Link
                        to="/contatos"
                        className="header-link"
                    >
                        Contato
                    </Link>
                </nav>
                <div className="header-actions">
                    <input type="text" className="header-seach" />
                    <button className="header-icon-btn header-cart-badge">
                        🛒 <span className="header-cart-count">1</span>
                    </button>
                </div>
            </div>
        </header>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/produtos" element={<ListaProdutos/>}/>
        </Routes>


        <footer className="footer-app">
          <div className="footer-content">
            <div>
              <h4 className="footer-title">Órbita</h4>
              <p className="text-sm text-gray-300">Seu universo de compras.</p>
            </div>
            <div>
              <h4 className="footer-title">Ajuda</h4>
              <div className="footer-links">
                <a href="#">FAQ</a>
                <a href="#">Trocas e devoluções</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Órbita</span>
            <span>Todos os direitos reservados</span>
          </div>
        </footer>
      </BrowserRouter>
    </>
  )
}

