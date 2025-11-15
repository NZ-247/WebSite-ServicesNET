import React from "react"
import {Shield, FileText} from 'lucide-react'
import Header from "../components/Header"
import Footer from "../components/Footer"

/**
 * Políticas Page - Políticas de Privacidade e Termos de Uso
 * EDITÁVEL: Adicione suas políticas aqui
 */
const Politicas: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header da página */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Políticas e Termos
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Informações sobre privacidade e termos de uso
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Política de Privacidade */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                  <Shield size={24} className="text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Política de Privacidade
                </h2>
              </div>

              <div className="text-gray-400 space-y-4">
                <p>
                  A Services.Net está comprometida com a proteção dos seus dados pessoais 
                  e com a transparência no tratamento de informações.
                </p>
                
                <h3 className="text-white font-semibold mt-6 mb-2">Coleta de Dados</h3>
                <p>
                  Coletamos apenas informações necessárias para prestar nossos serviços, 
                  como nome, e-mail e telefone de contato.
                </p>

                <h3 className="text-white font-semibold mt-6 mb-2">Uso de Dados</h3>
                <p>
                  Suas informações são utilizadas exclusivamente para comunicação sobre 
                  nossos serviços e atendimento de solicitações.
                </p>

                <h3 className="text-white font-semibold mt-6 mb-2">Segurança</h3>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para 
                  proteger seus dados contra acessos não autorizados.
                </p>

                <p className="text-sm text-gray-500 mt-6">
                  Última atualização: {new Date().getFullYear()}
                </p>
              </div>
            </div>

            {/* Termos de Uso */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                  <FileText size={24} className="text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Termos de Uso
                </h2>
              </div>

              <div className="text-gray-400 space-y-4">
                <p>
                  Ao utilizar nossos serviços, você concorda com os seguintes termos e condições.
                </p>

                <h3 className="text-white font-semibold mt-6 mb-2">Serviços Oferecidos</h3>
                <p>
                  A Services.Net oferece soluções em infraestrutura de TI, desenvolvimento 
                  de software e consultoria tecnológica.
                </p>

                <h3 className="text-white font-semibold mt-6 mb-2">Responsabilidades</h3>
                <p>
                  Nos comprometemos a entregar serviços de qualidade, seguindo as melhores 
                  práticas do mercado e respeitando prazos acordados.
                </p>

                <h3 className="text-white font-semibold mt-6 mb-2">Propriedade Intelectual</h3>
                <p>
                  Todo o conteúdo e materiais desenvolvidos pela Services.Net são protegidos 
                  por direitos autorais e propriedade intelectual.
                </p>

                <p className="text-sm text-gray-500 mt-6">
                  Última atualização: {new Date().getFullYear()}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <p className="text-gray-400 mb-4">
                Dúvidas sobre nossas políticas?
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

export default Politicas
