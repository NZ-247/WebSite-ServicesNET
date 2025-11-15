import React from "react"
import {FolderOpen} from 'lucide-react'
import Header from "../components/Header"
import Footer from "../components/Footer"

/**
 * Projetos Page - Portfolio de Projetos
 * EDITÁVEL: Adicione seus projetos aqui
 */
const Projetos: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header da página */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nossos Projetos
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos
            </p>
          </div>

          {/* Estado vazio - Em construção */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-12">
              <div className="w-20 h-20 rounded-full bg-blue-600/10 flex items-center justify-center mx-auto mb-6">
                <FolderOpen size={40} className="text-blue-500" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">
                Em breve
              </h2>
              
              <p className="text-gray-400 mb-8">
                Estamos preparando nosso portfólio de projetos. 
                Em breve você poderá conhecer os casos de sucesso 
                e soluções que desenvolvemos para nossos clientes.
              </p>

              <a
                href="mailto:contato@services.net.br"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Projetos
