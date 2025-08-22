'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Package, Terminal as TerminalIcon, CheckCircle, Copy, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { CopyButton, CodeBlockWithCopy, InlineCodeWithCopy } from '@/components/ui/CopyButton'
import { packageInfo, installationSteps } from '@/lib/constants'

const packageManagers = [
  {
    name: 'pnpm',
    command: packageInfo.installCommand,
    icon: '📦',
    recommended: true,
    description: 'Rápido e eficiente'
  },
  {
    name: 'npm',
    command: packageInfo.npmInstallCommand,
    icon: '📋',
    recommended: false,
    description: 'Padrão do Node.js'
  },
  {
    name: 'yarn',
    command: packageInfo.yarnInstallCommand,
    icon: '🧶',
    recommended: false,
    description: 'Alternativa popular'
  }
]

export function InstallationSection() {
  const [selectedManager, setSelectedManager] = useState(packageManagers[0])
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepNumber)
        ? prev.filter(s => s !== stepNumber)
        : [...prev, stepNumber]
    )
  }

  return (
    <section id="installation" className="py-20 bg-gradient-to-b from-background to-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Instalação</span>
            <span className="text-text block mt-2">Rápida e Simples</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto">
            Comece a usar o Path-Fast em menos de 1 minuto. 
            Escolha seu gerenciador de pacotes favorito e siga os passos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Package Manager Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Package className="w-6 h-6 text-primary" />
              Escolha seu Gerenciador
            </h3>

            <div className="space-y-4 mb-8">
              {packageManagers.map((manager) => (
                <Card
                  key={manager.name}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedManager.name === manager.name
                      ? 'border-primary bg-primary/5 shadow-lg scale-105'
                      : 'hover:border-primary/50 hover:scale-102'
                  }`}
                  onClick={() => setSelectedManager(manager)}
                >
                  <div className="p-6 flex items-center gap-4">
                    <div className="text-3xl">{manager.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-semibold">{manager.name}</h4>
                        {manager.recommended && (
                          <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                            Recomendado
                          </span>
                        )}
                      </div>
                      <p className="text-text-muted text-sm">{manager.description}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedManager.name === manager.name
                        ? 'border-primary bg-primary'
                        : 'border-border'
                    }`}>
                      {selectedManager.name === manager.name && (
                        <div className="w-full h-full rounded-full bg-primary" />
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Install Command */}
            <motion.div
              key={selectedManager.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-surface border-2 border-primary/20 rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TerminalIcon className="w-5 h-5 text-primary" />
                Comando de Instalação
              </h4>
              
              <div className="bg-background rounded-lg p-4 font-mono">
                <div className="flex items-center justify-between">
                  <code className="text-primary text-lg">{selectedManager.command}</code>
                  <CopyButton 
                    text={selectedManager.command}
                    showText={true}
                    variant="primary"
                    size="sm"
                  />
                </div>
              </div>

              <div className="mt-4 text-sm text-text-muted">
                <p>💡 <strong>Dica:</strong> Use <code className="bg-background px-2 py-1 rounded">-g</code> para instalação global</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Installation Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-success" />
              Passos de Configuração
            </h3>

            <div className="space-y-6">
              {installationSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className={`transition-all duration-300 cursor-pointer ${
                      completedSteps.includes(step.step)
                        ? 'border-success bg-success/5'
                        : 'hover:border-primary/50'
                    }`}
                    onClick={() => toggleStep(step.step)}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Step Number */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                          completedSteps.includes(step.step)
                            ? 'bg-success text-background'
                            : 'bg-primary text-background'
                        }`}>
                          {completedSteps.includes(step.step) ? '✓' : step.step}
                        </div>

                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                          <p className="text-text-muted mb-4">{step.description}</p>

                          {/* Command */}
                          <div className="bg-background border border-border rounded-lg p-3 font-mono text-sm flex items-center justify-between">
                            <code className="text-primary">{step.command}</code>
                            <CopyButton 
                              text={step.command}
                              size="sm"
                              variant="ghost"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Completion Message */}
            {completedSteps.length === installationSteps.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 bg-gradient-to-r from-success/20 to-primary/20 border border-success/30 rounded-lg text-center"
              >
                <div className="text-4xl mb-2">🎉</div>
                <h4 className="text-xl font-bold text-success mb-2">
                  Instalação Concluída!
                </h4>
                <p className="text-text-muted mb-4">
                  Parabéns! O Path-Fast está pronto para usar. Que tal experimentar alguns comandos?
                </p>
                <Button
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group"
                >
                  Ver Demonstração
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Quick Start Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-br from-surface to-surface-elevated border-2 border-border/50">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient-accent">
                🚀 Quick Start
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">1️⃣</span>
                  </div>
                  <h4 className="font-semibold mb-2">Instalar</h4>
                  <InlineCodeWithCopy code="pnpm add -g path-fast" />
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">2️⃣</span>
                  </div>
                  <h4 className="font-semibold mb-2">Configurar</h4>
                  <InlineCodeWithCopy code="pf add . meu-projeto" />
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">3️⃣</span>
                  </div>
                  <h4 className="font-semibold mb-2">Usar</h4>
                  <InlineCodeWithCopy code="pf go meu-projeto" />
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-text-muted mb-4">
                  Pronto para começar? Instale agora e experimente!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => window.open('https://www.npmjs.com/package/path-fast', '_blank')}
                    className="group"
                  >
                    <Package className="w-4 h-4 mr-2" />
                    Ver no NPM
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}