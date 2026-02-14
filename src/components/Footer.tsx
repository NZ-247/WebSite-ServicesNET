import React from "react"
import {Mail, Phone, Facebook, Instagram, Linkedin, Twitter} from 'lucide-react'
import Logo from "./Logo"

/**
 * Footer Component - Rodapé do Site
 * EDITÁVEL: Atualize informações de contato e links de redes sociais
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  // EDITÁVEL: Links de redes sociais - Preencha com suas URLs
  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/people/ServicesNET/61584040283574/", label: "Facebook" },
    { icon: Instagram, url: "https://www.instagram.com/servicesnet.it/", label: "Instagram" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Twitter, url: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-black border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div>
            <Logo />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Soluções completas de TI para empresas de qualquer porte. 
              Profissionalização e padronização com segurança e escalabilidade.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              {/* EDITÁVEL: E-mail */}
              <a 
                href="mailto:atendimento@services.net.br"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Mail size={16} />
                atendimento@services.net.br
              </a>
              
              {/* EDITÁVEL: Telefone/WhatsApp */}
              <a 
                href="https://wa.me/5566999064658"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Phone size={16} />
                (66) 9 9906-4658
              </a>
            </div>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Services.Net - Tecnologia e Infraestrutura Inteligente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
