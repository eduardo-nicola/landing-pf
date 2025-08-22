export const siteConfig = {
  name: "Path-Fast",
  title: "Path-Fast - Gerencie caminhos e abra projetos com um único comando",
  description: "Uma ferramenta CLI moderna que simplifica a navegação entre projetos, permitindo salvar caminhos com aliases personalizados, abrir rapidamente no VS Code e executar comandos extras.",
  url: "https://path-fast.vercel.app",
  ogImage: "/og-image.png",
  favicon: "/favicon.ico",
  keywords: [
    "CLI",
    "terminal",
    "productivity",
    "developer tools",
    "npm",
    "path management",
    "project navigation",
    "VS Code",
    "command line",
    "aliases"
  ],
  author: {
    name: "Eduardo Nicola Possani",
    github: "https://github.com/eduardo-nicola",
    email: "eduardo.possani@gmail.com"
  },
  links: {
    github: "https://github.com/eduardo-nicola/path-fast",
    npm: "https://www.npmjs.com/package/path-fast",
    issues: "https://github.com/eduardo-nicola/path-fast/issues",
    discussions: "https://github.com/eduardo-nicola/path-fast/discussions"
  }
}

export const packageInfo = {
  name: "path-fast",
  installCommand: "pnpm add -g path-fast",
  npmInstallCommand: "npm install -g path-fast",
  yarnInstallCommand: "yarn global add path-fast",
  repository: "eduardo-nicola/path-fast",
  license: "MIT"
}

export const features = [
  {
    id: "aliases",
    icon: "🔖",
    title: "Aliases Personalizados",
    description: "Salve caminhos longos com nomes curtos e fáceis de lembrar. Transforme `/home/user/projects/my-awesome-project` em simplesmente `projeto`.",
    command: "pf add . projeto"
  },
  {
    id: "quick-open",
    icon: "⚡",
    title: "Abertura Rápida",
    description: "Abra qualquer projeto no VS Code instantaneamente, não importa onde você esteja no terminal.",
    command: "pf go projeto"
  },
  {
    id: "extra-commands",
    icon: "🛠️",
    title: "Comandos Extras",
    description: "Execute comandos automaticamente ao navegar para um projeto. Perfeito para iniciar servidores ou ativar ambientes virtuais.",
    command: "pf add . projeto --cmd 'npm run dev'"
  },
  {
    id: "interactive-edit",
    icon: "✏️",
    title: "Edição Interativa",
    description: "Modifique, remova ou visualize seus aliases de forma interativa com uma interface amigável no terminal.",
    command: "pf edit"
  },
  {
    id: "global-install",
    icon: "🌍",
    title: "Instalação Global",
    description: "Uma vez instalado globalmente, use o Path-Fast em qualquer lugar do seu sistema, em qualquer projeto.",
    command: "pf --version"
  }
]

export const terminalCommands = [
  {
    command: "pf add . projeto",
    output: "✅ Caminho salvo: projeto → /home/user/meu-projeto",
    delay: 1000
  },
  {
    command: "pf go projeto",
    output: "🚀 Abrindo projeto no VS Code...",
    delay: 1500
  },
  {
    command: "pf list",
    output: `📁 Projetos salvos:
├── projeto → /home/user/meu-projeto
├── api → /home/user/projects/my-api
└── frontend → /home/user/projects/react-app`,
    delay: 2000
  }
]

export const installationSteps = [
  {
    step: 1,
    title: "Instalar globalmente",
    command: "pnpm add -g path-fast",
    description: "Instala o Path-Fast globalmente no seu sistema"
  },
  {
    step: 2,
    title: "Adicionar um projeto",
    command: "pf add . meu-projeto",
    description: "Salva o diretório atual com um alias"
  },
  {
    step: 3,
    title: "Navegar rapidamente",
    command: "pf go meu-projeto",
    description: "Abre o projeto no VS Code de qualquer lugar"
  }
]

export const socialProof = {
  githubStars: "⭐ GitHub Stars",
  npmDownloads: "📦 Downloads NPM",
  openSource: "🔓 Open Source",
  mitLicense: "📝 Licença MIT"
}

export const navigation = [
  {
    name: "Início",
    href: "#hero"
  },
  {
    name: "Funcionalidades",
    href: "#features"
  },
  {
    name: "Demonstração",
    href: "#demo"
  },
  {
    name: "Instalação",
    href: "#installation"
  },
  {
    name: "Contribuir",
    href: "#contribute"
  }
]

export const codeExamples = {
  basic: `# Salvar um projeto
pf add . meu-projeto

# Navegar para o projeto
pf go meu-projeto

# Listar todos os projetos
pf list`,

  advanced: `# Salvar com comando extra
pf add . api --cmd "npm run dev"

# Salvar um caminho específico
pf add /path/to/project frontend

# Editar aliases interativamente
pf edit

# Remover um alias
pf remove projeto`,

  workflow: `# Workflow típico de desenvolvimento
pf add . current-project
pf go api           # Abrir API
pf go frontend      # Abrir Frontend
pf go current-project # Voltar ao projeto atual`
}