# 🚀 Path-Fast Landing Page

Uma landing page moderna e responsiva criada para promover o **Path-Fast**, uma ferramenta CLI que simplifica a navegação entre projetos.

## ✨ Características

- **Next.js 15** com App Router
- **TailwindCSS** para estilização moderna
- **Framer Motion** para animações fluidas  
- **Tema Dark/Light** com `next-themes`
- **SEO Otimizado** com metadados, Open Graph e JSON-LD
- **Performance Otimizada** para Lighthouse Score 90+
- **Responsiva** para todos os dispositivos
- **Copy-to-clipboard** para comandos de instalação
- **Terminal Animado** com demonstração interativa

## 🛠️ Tecnologias

- [Next.js 15](https://nextjs.org) - React Framework
- [TailwindCSS](https://tailwindcss.com) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animações
- [Lucide React](https://lucide.dev) - Ícones
- [next-themes](https://github.com/pacocoursey/next-themes) - Tema Dark/Light
- [TypeScript](https://typescriptlang.org) - Tipagem estática

## 📁 Estrutura do Projeto

```
path-fast-landing/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── layout.tsx         # Layout principal com SEO
│   │   ├── page.tsx           # Página inicial
│   │   └── globals.css        # Estilos globais
│   ├── components/
│   │   ├── ui/                # Componentes reutilizáveis
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── CopyButton.tsx
│   │   │   ├── Terminal.tsx
│   │   │   └── ThemeToggle.tsx
│   │   └── sections/          # Seções da página
│   │       ├── Header.tsx
│   │       ├── HeroSection.tsx
│   │       ├── FeaturesSection.tsx
│   │       ├── DemoSection.tsx
│   │       ├── InstallationSection.tsx
│   │       ├── OpenSourceSection.tsx
│   │       └── Footer.tsx
│   └── lib/                   # Utilitários
│       ├── constants.ts       # Constantes do projeto
│       └── utils.ts           # Funções utilitárias
├── public/                    # Assets estáticos
├── package.json
├── vercel.json               # Configuração do Vercel
└── README.md
```

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado)

### Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd path-fast-landing
```

2. Instale as dependências:
```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
pnpm run dev:webpack
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts Disponíveis

```bash
# Desenvolvimento (com Turbopack)
pnpm dev

# Desenvolvimento (com Webpack tradicional)
pnpm dev:webpack

# Build de produção (com Turbopack)
pnpm build

# Build de produção (com Webpack)
pnpm build:webpack

# Iniciar servidor de produção
pnpm start

# Linting
pnpm lint
```

## 📱 Seções da Landing Page

1. **Hero Section** - Apresentação principal com terminal animado
2. **Features** - Funcionalidades principais do Path-Fast
3. **Demo** - Demonstração interativa com cenários de uso
4. **Installation** - Instruções de instalação com copy-to-clipboard
5. **Open Source** - Informações sobre contribuição e comunidade
6. **Footer** - Links, informações e navegação

## 🎨 Design System

### Cores (Tema Dark)
- Background: `#0a0a0b`
- Surface: `#1a1a1b`  
- Primary: `#00ff88` (Verde terminal)
- Secondary: `#0077ff` (Azul)
- Accent: `#bb88ff` (Roxo)

### Tipografia
- Sans: System fonts (Geist)
- Mono: Fira Code, JetBrains Mono

### Componentes
- Botões com hover effects
- Cards com animações de hover
- Terminal com animação de digitação
- Copy-to-clipboard funcional

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Manual

```bash
# Build de produção
pnpm run build:webpack

# Os arquivos estarão em `.next/`
```

## 📊 Performance

A landing page foi otimizada para:
- **Lighthouse Score 90+**
- **Core Web Vitals** otimizados
- **SEO** completo com meta tags
- **Acessibilidade** com ARIA labels
- **Progressive Enhancement**

## 🔧 Configuração de SEO

O SEO está configurado em [`src/app/layout.tsx`](./src/app/layout.tsx) com:

- Meta tags essenciais
- Open Graph para redes sociais
- Twitter Cards
- JSON-LD para rich snippets
- Sitemap e robots.txt (adicionar se necessário)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Eduardo Nicola Possani**
- GitHub: [@eduardo-nicola](https://github.com/eduardo-nicola)
- Projeto Path-Fast: [path-fast](https://github.com/eduardo-nicola/path-fast)

---

Criado com ❤️ para promover o **Path-Fast** - a ferramenta CLI que acelera seu fluxo de desenvolvimento!
