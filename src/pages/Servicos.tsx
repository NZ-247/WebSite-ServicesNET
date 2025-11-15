import React from "react"
import {Network, Server, Box, Code, Shield, Activity, Briefcase, Globe} from 'lucide-react'
import Header from "../components/Header"
import Footer from "../components/Footer"

/**
 * Serviços Page - Lista de Serviços da Empresa
 * EDITÁVEL: Modifique serviços, descrições e ícones conforme necessário
 */

// EDITÁVEL: Lista de serviços
const services = [
  {
    icon: Network,
    title: "Infraestrutura de Redes",
    description: "Soluções completas em LAN, WAN, VLAN, VPN e Wi-Fi corporativo. Implementação e otimização de redes com alta disponibilidade e segurança.",
  },
  {
    icon: Server,
    title: "Servidores Linux e Windows",
    description: "Administração de Active Directory, DNS, DHCP, GPO, file server e Linux hardening. Gerenciamento completo de ambientes corporativos.",
  },
  {
    icon: Box,
    title: "Virtualização",
    description: "Implementação e gestão de ambientes virtualizados com Proxmox, VMware e Hyper-V. Otimização de recursos e alta disponibilidade.",
  },
  {
    icon: Code,
    title: "Automação de Sistemas",
    description: "Desenvolvimento de scripts e automações em Bash, PowerShell e Python. Integrações personalizadas para otimizar processos.",
  },
  {
    icon: Shield,
    title: "Segurança da Informação",
    description: "Hardening de sistemas, auditoria de segurança, políticas de backup e disaster recovery. Proteção completa dos seus dados.",
  },
  {
    icon: Activity,
    title: "Monitoramento e Observabilidade",
    description: "Implementação de Zabbix, Grafana e outras ferramentas de monitoramento. Visibilidade completa da infraestrutura 24/7.",
  },
  {
    icon: Briefcase,
    title: "Gestão Completa de TI",
    description: "Terceirização profissional de TI. Gestão completa da infraestrutura tecnológica com SLA e suporte dedicado.",
  },
  {
    icon: Globe,
    title: "Criação de Sites Profissionais",
    description: "Desenvolvimento de sites modernos, responsivos e adaptados ao seu negócio. Programação, SEO básico, integração e publicação completa.",
  },
]

const Servicos: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header da página */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nossos Serviços
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Soluções completas em Tecnologia da Informação para profissionalizar 
              e padronizar a TI da sua empresa
            </p>
          </div>

          {/* Grid de serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {/* Ícone */}
                  <div className="w-14 h-14 rounded-lg bg-blue-600/10 flex items-center justify-center mb-4">
                    <Icon size={28} className="text-blue-500" />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Botão */}
                  <button className="text-blue-500 text-sm font-semibold hover:text-blue-400 transition-colors">
                    Saiba Mais →
                  </button>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Precisa de uma solução personalizada?
              </h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos ajudar sua empresa
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

export default Servicos
