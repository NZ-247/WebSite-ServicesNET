import React from "react"
import { motion } from "framer-motion"
import {Mail} from 'lucide-react'
import Header from "../components/Header"
import Footer from "../components/Footer"

/**
 * Home Page - Landing Page "Em Breve"
 * EDITÁVEL: Modifique textos e animações conforme necessário
 */
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animation - Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 102, 204, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 204, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Logo provisória animada */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl shadow-blue-500/50">
            <span className="text-white font-mono text-3xl font-bold">&lt;/&gt;_</span>
          </div>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          Em Breve
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-2"
        >
          Estamos construindo algo <span className="text-blue-500 font-semibold">incrível</span>
        </motion.p>

        {/* Nome da empresa */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Services.Net</h2>
          <p className="text-lg text-blue-400">Tecnologia e Infraestrutura Inteligente</p>
        </motion.div>

        {/* Botão CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a
            href="mailto:contato@services.net.br"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Mail size={20} />
            Entre em Contato
          </a>
        </motion.div>

        {/* Informações adicionais */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-gray-500 text-sm"
        >
          <p>Em breve, nosso novo site estará no ar com todas as nossas soluções em TI</p>
        </motion.div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Home
