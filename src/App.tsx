import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"
import Servicos from "./pages/Servicos"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import Projetos from "./pages/Projetos"
import Politicas from "./pages/Politicas"

/**
 * App Component - Router Principal
 * EDITÁVEL: Adicione novas rotas conforme necessário
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/politicas" element={<Politicas />} />
      </Routes>
    </Router>
  )
}

export default App
