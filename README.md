# Services.Net - Site Corporativo

**Description**: Site corporativo completo, moderno e responsivo para a Services.Net - empresa especializada em soluções de Tecnologia da Informação, infraestrutura de redes, servidores, virtualização, automação e gestão de TI.

**Tech Stack**: React + TypeScript + Vite + Tailwind CSS + Framer Motion | Backend: N/A | Auth: N/A

## User Preferences
- **Language**: pt-BR (Português Brasil)
- **Code Style**: Componentes modulares e reutilizáveis, código comentado para fácil edição
- **Design System**: Minimalista tecnológico com tons de azul (#0066CC, #003D7A), preto e cinza

## Directory Structure
- `/src/components`: Componentes reutilizáveis (Header, Footer, Logo)
- `/src/pages`: Páginas do site (Home, Servicos, Sobre, Contato, Projetos, Politicas)
- `/src/lib`: Configuração do Lumi SDK
- `/public`: Assets públicos (imagens, favicons)

## Current Features

### Implementado
1. **Landing Page "Em Breve"**: Página inicial elegante com animações fade-in, logo provisória e CTA para contato - Key files: `src/pages/Home.tsx`
2. **Navegação Responsiva**: Header com menu hamburger mobile e links para todas as páginas - Key files: `src/components/Header.tsx`
3. **Página de Serviços**: Grid de 8 serviços com cards detalhados (redes, servidores, virtualização, automação, segurança, monitoramento, gestão TI, criação de sites) - Key files: `src/pages/Servicos.tsx`
4. **Página Sobre**: Informações da empresa com missão, visão e valores - Key files: `src/pages/Sobre.tsx`
5. **Página de Contato**: Formulário de contato e informações (email, telefone/WhatsApp) - Key files: `src/pages/Contato.tsx`
6. **Página Projetos**: Preparada para futuro portfólio (atualmente em construção) - Key files: `src/pages/Projetos.tsx`
7. **Página Políticas**: Política de privacidade e termos de uso - Key files: `src/pages/Politicas.tsx`
8. **Rodapé Completo**: Com redes sociais, contatos e copyright - Key files: `src/components/Footer.tsx`
9. **SEO Otimizado**: Meta tags, OpenGraph e título personalizado em `index.html`

### Known Limitations
- Formulário de contato sem backend (apenas alert de demonstração)
- Links de redes sociais placeholder (aguardando URLs reais)
- Página de projetos em estado "Em Breve"

## Database Schema
**Type**: N/A (site estático sem backend)

## Deno Functions
N/A - Site não requer funções serverless no momento

## API Endpoints
N/A - Site estático sem integração com backend

## Improvement Opportunities

### High Priority
- [ ] Integrar formulário de contato com serviço de email (Lumi Email Tool ou serviço terceiro)
- [ ] Adicionar casos de sucesso/portfolio na página Projetos

### Medium Priority
- [ ] Implementar lazy loading de imagens para performance
- [ ] Adicionar blog/notícias sobre tecnologia
- [ ] Criar animações mais elaboradas nas transições entre páginas

### Low Priority / Future Enhancements
- [ ] Dashboard de clientes (área restrita)
- [ ] Sistema de orçamento online
- [ ] Chat/chatbot para atendimento
