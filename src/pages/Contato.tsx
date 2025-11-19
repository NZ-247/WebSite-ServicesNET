import React, { useRef, useState } from "react"
import {Mail, Phone, MapPin, Send, CheckCircle, AlertCircle} from 'lucide-react'
import emailjs from '@emailjs/browser'
import Header from "../components/Header"
import Footer from "../components/Footer"

/**
 * Contato Page - Formulário e Informações de Contato
 * EDITÁVEL: Modifique informações de contato e formulário
 * 
 * CONFIGURAÇÃO EMAILJS:
 * 1. Obtenha sua Public Key em: https://dashboard.emailjs.com/admin/account
 * 2. Substitua "YOUR_PUBLIC_KEY_HERE" abaixo pela sua chave
 */
const Contato: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EDITÁVEL: Substitua "YOUR_PUBLIC_KEY_HERE" pela sua Public Key do EmailJS
      await emailjs.sendForm(
        'service_ph98cku',      // Service ID (SMTP server)
        'template_89ss8kl',     // Template ID (Contact Us)
        formRef.current!,
        'K79p6eQqic_O5nuLb'  // ⚠️ SUBSTITUA PELA SUA PUBLIC KEY
      )
      
      setSubmitStatus('success')
      formRef.current?.reset()
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header da página */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Estamos prontos para atender sua empresa. Fale conosco!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Informações de contato */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                {/* E-mail */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">E-mail</h3>
                    <a 
                      href="mailto:contato@services.net.br"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      contato@services.net.br
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefone / WhatsApp</h3>
                    <a 
                      href="https://wa.me/5566999064658"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      (66) 9 9906-4658
                    </a>
                  </div>
                </div>

                {/* Localização (EDITÁVEL) */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Localização</h3>
                    <p className="text-gray-400">
                      Brasil
                    </p>
                  </div>
                </div>
              </div>

              {/* Horário de atendimento */}
              <div className="mt-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Horário de Atendimento</h3>
                <p className="text-gray-400 text-sm">
                  Segunda a Sexta: 08:00 - 18:00<br />
                  Sábado: 08:00 - 12:00
                </p>
              </div>
            </div>

            {/* Formulário de contato */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Envie uma Mensagem
              </h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    placeholder="Seu nome"
                  />
                </div>

                {/* E-mail */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-50"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                {/* Mensagens de Status */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-900/20 border border-green-700 rounded-lg text-green-400">
                    <CheckCircle size={20} />
                    <span>Mensagem enviada com sucesso! Retornaremos em breve.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-900/20 border border-red-700 rounded-lg text-red-400">
                    <AlertCircle size={20} />
                    <span>Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.</span>
                  </div>
                )}

                {/* Botão */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contato
