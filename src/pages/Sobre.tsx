import React from "react"
import {Target, Eye, Award} from 'lucide-react'
import Header from "../components/Header"
import Footer from "../components/Footer"

/**
 * Sobre Page - Informações sobre a Empresa
 * EDITÁVEL: Modifique textos e informações conforme necessário
 */
const Sobre: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header da página */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre a Services.Net
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Tecnologia e Infraestrutura Inteligente
            </p>
          </div>

          {/* Descrição principal */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                A <span className="text-blue-500 font-semibold">Services.Net</span> é uma empresa especializada em soluções de 
                Tecnologia da Informação, atuando em infraestrutura de redes, servidores Linux e Windows, 
                virtualização, automação de sistemas, segurança da informação, dados, monitoramento, 
                criação de sites e gestão de TI.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nossa missão é profissionalizar e padronizar a TI de empresas de qualquer porte, 
                entregando ambiente seguro, confiável, escalável e alinhado às melhores práticas.
              </p>
            </div>
          </div>

          {/* Cards de valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Missão */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center hover:border-blue-600 transition-all">
              <div className="w-14 h-14 rounded-lg bg-blue-600/10 flex items-center justify-center mx-auto mb-4">
                <Target size={28} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Missão</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Profissionalizar e padronizar a TI de empresas de qualquer porte, 
                entregando soluções seguras, confiáveis e escaláveis.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center hover:border-blue-600 transition-all">
              <div className="w-14 h-14 rounded-lg bg-blue-600/10 flex items-center justify-center mx-auto mb-4">
                <Eye size={28} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Visão</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ser referência em soluções de TI, reconhecida pela excelência, 
                inovação e compromisso com os resultados dos nossos clientes.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center hover:border-blue-600 transition-all">
              <div className="w-14 h-14 rounded-lg bg-blue-600/10 flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Valores</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Qualidade, segurança, inovação, transparência e compromisso 
                com as melhores práticas do mercado.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Quer conhecer melhor nossas soluções?
              </h2>
              <p className="text-gray-400 mb-6">
                Entre em contato e descubra como podemos transformar a TI da sua empresa
              </p>
              <a
                href="mailto:contato@services.net.br"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Sobre
