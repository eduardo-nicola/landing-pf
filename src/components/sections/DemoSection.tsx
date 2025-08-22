'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, RotateCcw, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Terminal } from '@/components/ui/Terminal'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { codeExamples } from '@/lib/constants'

const demoScenarios = [
  {
    id: 'basic',
    title: 'Uso Básico',
    description: 'Comandos essenciais para começar a usar o Path-Fast',
    lines: [
      { type: 'command' as const, content: 'pf add . meu-projeto', delay: 500 },
      { type: 'success' as const, content: '✅ Caminho salvo: meu-projeto → /home/user/workspace/meu-projeto', delay: 800 },
      { type: 'command' as const, content: 'pf list', delay: 1200 },
      { type: 'output' as const, content: '📁 Projetos salvos:\n└── meu-projeto → /home/user/workspace/meu-projeto', delay: 600 },
      { type: 'command' as const, content: 'pf go meu-projeto', delay: 1000 },
      { type: 'success' as const, content: '🚀 Abrindo meu-projeto no VS Code...', delay: 500 }
    ]
  },
  {
    id: 'advanced',
    title: 'Recursos Avançados',
    description: 'Comandos extras e funcionalidades avançadas',
    lines: [
      { type: 'command' as const, content: 'pf add . api --cmd "npm run dev"', delay: 600 },
      { type: 'success' as const, content: '✅ Projeto salvo com comando extra configurado', delay: 800 },
      { type: 'command' as const, content: 'pf go api', delay: 1000 },
      { type: 'success' as const, content: '🚀 Abrindo api no VS Code...', delay: 500 },
      { type: 'output' as const, content: '⚡ Executando: npm run dev', delay: 800 },
      { type: 'success' as const, content: '🔥 Servidor iniciado na porta 3000!', delay: 600 }
    ]
  },
  {
    id: 'workflow',
    title: 'Fluxo de Trabalho',
    description: 'Como usar no dia a dia de desenvolvimento',
    lines: [
      { type: 'command' as const, content: 'pf add /home/user/projects/frontend frontend', delay: 500 },
      { type: 'success' as const, content: '✅ Caminho salvo: frontend', delay: 600 },
      { type: 'command' as const, content: 'pf add /home/user/projects/backend api', delay: 800 },
      { type: 'success' as const, content: '✅ Caminho salvo: api', delay: 600 },
      { type: 'command' as const, content: 'pf list', delay: 1000 },
      { type: 'output' as const, content: '📁 Projetos salvos:\n├── frontend → /home/user/projects/frontend\n├── api → /home/user/projects/backend\n└── meu-projeto → /home/user/workspace/meu-projeto', delay: 800 },
      { type: 'command' as const, content: 'pf go frontend', delay: 1200 },
      { type: 'success' as const, content: '🚀 Mudando para frontend...', delay: 500 }
    ]
  }
]

export function DemoSection() {
  const [activeDemo, setActiveDemo] = useState(demoScenarios[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [terminalKey, setTerminalKey] = useState(0)

  const handleDemoChange = (scenario: typeof demoScenarios[0]) => {
    setActiveDemo(scenario)
    setTerminalKey(prev => prev + 1)
    setIsPlaying(true)
  }

  const handleRestart = () => {
    setTerminalKey(prev => prev + 1)
    setIsPlaying(true)
  }

  return (
    <section id="demo" className="section-padding bg-gradient-to-b from-surface/30 to-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 space-y-responsive"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance">
            <span className="text-gradient-primary">Demonstração</span>
            <span className="text-text block mt-2">Interativa</span>
          </h2>
          <p className="text-responsive text-text-muted max-w-3xl mx-auto text-balance">
            Explore os diferentes cenários de uso e veja como o Path-Fast pode
            otimizar seu fluxo de trabalho em tempo real.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3 sm:space-y-4 order-2 lg:order-1"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <Code2 className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
              <span>Cenários de Uso</span>
            </h3>
            
            {demoScenarios.map((scenario) => (
              <Card
                key={scenario.id}
                className={`!h-auto cursor-pointer transition-all duration-300 ${
                  activeDemo.id === scenario.id
                    ? 'border-primary bg-primary/5'
                    : 'hover:border-primary/50'
                }`}
                onClick={() => handleDemoChange(scenario)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base sm:text-lg">{scenario.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-text-muted text-balance">
                    {scenario.description}
                  </p>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="outline"
              onClick={handleRestart}
              className="w-full mt-4 sm:mt-6 group"
              disabled={!isPlaying}
            >
              <RotateCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
              <span className="text-sm sm:text-base">Reiniciar Demo</span>
            </Button>
          </motion.div>

          {/* Terminal Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 order-1 lg:order-2 pb-4 h-full"
          >
          <div className="relative h-full flex flex-col">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-2xl blur-2xl scale-105" />
            
            <div className="relative z-10 flex-1 flex flex-col">
                <Terminal
                  key={terminalKey}
                  lines={activeDemo.lines}
                  autoPlay={true}
                  loop={false}
                  title={`Path-Fast Demo - ${activeDemo.title}`}
                  className="min-h-[300px] sm:min-h-[400px] shadow-2xl border-2 border-border/50 max-w-full flex-1"
                  onComplete={() => setIsPlaying(false)}
                />
              </div>

              {/* Status Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-background border-2 border-border rounded-full p-2 sm:p-3 shadow-lg z-20"
              >
                {isPlaying ? (
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-success hidden sm:inline">Executando</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-2 h-2 bg-text-muted rounded-full" />
                    <span className="text-xs font-medium text-text-muted hidden sm:inline">Concluído</span>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-gradient-accent text-balance">
            Exemplos de Código
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Básico</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs sm:text-sm bg-surface rounded p-3 sm:p-4 overflow-x-auto font-mono">
                  <code className="text-text-muted">{codeExamples.basic}</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Avançado</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs sm:text-sm bg-surface rounded p-3 sm:p-4 overflow-x-auto font-mono">
                  <code className="text-text-muted">{codeExamples.advanced}</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="overflow-hidden sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs sm:text-sm bg-surface rounded p-3 sm:p-4 overflow-x-auto font-mono">
                  <code className="text-text-muted">{codeExamples.workflow}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Interactive Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 sm:p-8 border border-primary/20"
        >
          <h4 className="text-lg sm:text-xl font-semibold mb-4 text-center">
            💡 Dicas Interativas
          </h4>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
            <div>
              <h5 className="font-medium mb-2 text-primary">Produtividade</h5>
              <ul className="space-y-1 text-text-muted">
                <li>• Use aliases curtos e memoráveis</li>
                <li>• Configure comandos extras para automação</li>
                <li>• Combine com scripts de desenvolvimento</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2 text-accent">Organização</h5>
              <ul className="space-y-1 text-text-muted">
                <li>• Agrupe projetos por cliente ou tipo</li>
                <li>• Use prefixos para categorização</li>
                <li>• Mantenha a lista sempre atualizada</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}