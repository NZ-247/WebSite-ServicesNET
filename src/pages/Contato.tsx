import React, { useRef, useState, useEffect } from "react"
import {Mail, Phone, MapPin, Send, CheckCircle, AlertCircle} from 'lucide-react'
import emailjs from '@emailjs/browser'
import Header from "../components/Header"
import Footer from "../components/Footer"

/**
 * Contato Page - Formulário e Informações de Contato
 * EDITÁVEL: Modifique informações de contato e formulário
 * 
 * CONFIGURAÇÃO EMAILJS:
 * 1. Configure as variáveis de ambiente no arquivo .env
 * 2. VITE_EMAILJS_SERVICE_ID: Service ID do EmailJS
 * 3. VITE_EMAILJS_TEMPLATE_ID: Template ID do EmailJS
 * 4. VITE_EMAILJS_PUBLIC_KEY: Public Key do EmailJS
 */
const Contato: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [userIP, setUserIP] = useState<string>("")

  // Captura o IP do usuário ao carregar a página
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch("https://ipv4.myexternalip.com/json")
        const data = await response.json()
        setUserIP(data.ip)
      } catch (error) {
        console.error("Erro ao capturar IP:", error)
        setUserIP("Não disponível")
      }
    }
    fetchIP()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Captura data e hora no momento do envio
    const now = new Date()
    const dataHora = now.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })

    try {
      // Carrega credenciais do .env
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Validação de variáveis de ambiente
      if (!serviceId || !templateId || !publicKey || publicKey === "YOUR_PUBLIC_KEY_HERE") {
        throw new Error("Configuração do EmailJS incompleta. Verifique o arquivo .env")
      }

      // Adiciona campos extras ao formulário (IP e data/hora)
      const formData = new FormData(formRef.current!)
      formData.append("user_ip", userIP)
      formData.append("submission_date", dataHora)

      // Envia email via EmailJS
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
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
                      href="mailto:atendimento@services.net.br"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      atendimento@services.net.br
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
