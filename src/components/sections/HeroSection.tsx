'use client'

import { motion } from 'framer-motion'
import { Download, Github, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Terminal } from '@/components/ui/Terminal'
import { InlineCodeWithCopy } from '@/components/ui/CopyButton'
import { usePackageManager } from '@/contexts/PackageManagerContext'
import { siteConfig, packageInfo, terminalCommands } from '@/lib/constants'
import { copyToClipboard } from '@/lib/utils'

export function HeroSection() {
  const { getInstallCommand, selectedManager } = usePackageManager()
  
  const handleInstallCopy = async () => {
    await copyToClipboard(getInstallCommand())
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
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding-lg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left space-y-responsive"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-3 sm:px-4 py-2 text-sm"
            >
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-text-muted font-medium">
                Open Source • MIT License
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance"
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
              className="text-responsive text-text-muted max-w-2xl mx-auto lg:mx-0 text-balance"
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
              className="space-y-3"
            >
              <p className="text-sm text-text-muted font-medium">
                Instalação rápida:
              </p>
              <InlineCodeWithCopy
                code={getInstallCommand()}
                className="text-primary text-sm sm:text-base"
              />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={handleInstallCopy}
                className="group relative overflow-hidden"
              >
                <Download className="w-5 h-5 mr-2" />
                Instalar via {selectedManager}
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
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-text-muted"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span className="whitespace-nowrap">Instalação Global</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="whitespace-nowrap">Zero Configuração</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="whitespace-nowrap">Cross-Platform</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Terminal Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="relative order-first lg:order-last"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-3xl scale-110 opacity-30" />
            
            <div className="relative">
              <Terminal
                lines={terminalLines}
                autoPlay={true}
                loop={true}
                title="Path-Fast Demo"
                className="shadow-2xl border-2 border-border/50 max-w-full"
              />
            </div>

            {/* Floating Elements - Hidden on small screens */}
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
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg shadow-lg flex items-center justify-center text-background font-bold text-lg sm:text-xl hidden sm:flex"
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
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-accent to-secondary rounded-full shadow-lg hidden sm:block"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center mt-12 sm:mt-16 lg:mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-muted cursor-pointer hover:text-text transition-colors"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs sm:text-sm font-medium text-center">Descobrir funcionalidades</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-border rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}