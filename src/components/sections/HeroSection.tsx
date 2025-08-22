'use client'

import { motion } from 'framer-motion'
import { Download, Github, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Terminal } from '@/components/ui/Terminal'
import { InlineCodeWithCopy } from '@/components/ui/CopyButton'
import { siteConfig, packageInfo, terminalCommands } from '@/lib/constants'
import { copyToClipboard } from '@/lib/utils'

export function HeroSection() {
  const handleInstallCopy = async () => {
    await copyToClipboard(packageInfo.installCommand)
  }

  const terminalLines = [
    {
      type: 'command' as const,
      content: 'pf add . projeto',
      delay: 1000
    },
    {
      type: 'success' as const,
      content: '✅ Caminho salvo: projeto → /home/user/meu-projeto',
      delay: 500
    },
    {
      type: 'command' as const,
      content: 'pf go projeto',
      delay: 1500
    },
    {
      type: 'success' as const,
      content: '🚀 Abrindo projeto no VS Code...',
      delay: 500
    },
    {
      type: 'command' as const,
      content: 'pf list',
      delay: 1500
    },
    {
      type: 'output' as const,
      content: `📁 Projetos salvos:
├── projeto → /home/user/meu-projeto
├── api → /home/user/projects/my-api
└── frontend → /home/user/projects/react-app`,
      delay: 800
    }
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm text-text-muted font-medium">
                Open Source • MIT License
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-gradient-primary">Path-Fast</span>
              <span className="block text-text mt-2">
                Gerencie caminhos com{' '}
                <span className="text-gradient-accent">um único comando</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-text-muted mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Uma ferramenta CLI moderna que simplifica a navegação entre projetos. 
              Salve caminhos com aliases personalizados, abra rapidamente no VS Code e 
              execute comandos extras.
            </motion.p>

            {/* Installation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-sm text-text-muted mb-3 font-medium">
                Instalação rápida:
              </p>
              <InlineCodeWithCopy 
                code={packageInfo.installCommand}
                className="text-primary"
              />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={handleInstallCopy}
                className="group relative overflow-hidden"
              >
                <Download className="w-5 h-5 mr-2" />
                Instalar via pnpm
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(siteConfig.links.github, '_blank')}
                className="group"
              >
                <Github className="w-5 h-5 mr-2" />
                Ver no GitHub
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-sm text-text-muted"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>Instalação Global</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Zero Configuração</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Cross-Platform</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Terminal Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-3xl scale-110 opacity-30" />
            
            <div className="relative">
              <Terminal
                lines={terminalLines}
                autoPlay={true}
                loop={true}
                title="Path-Fast Demo"
                className="shadow-2xl border-2 border-border/50"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-primary rounded-lg shadow-lg flex items-center justify-center text-background font-bold"
            >
              🚀
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-accent to-secondary rounded-full shadow-lg"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-muted cursor-pointer"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm font-medium">Descobrir funcionalidades</span>
            <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}