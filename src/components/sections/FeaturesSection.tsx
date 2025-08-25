'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { TerminalCommand } from '@/components/ui/Terminal'
import { features } from '@/lib/constants'

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-background to-surface/30">
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
            <span className="text-gradient-primary">Funcionalidades</span>
            <span className="text-text block mt-2">que fazem a diferença</span>
          </h2>
          <p className="text-responsive text-text-muted max-w-3xl mx-auto text-balance">
            Descubra como o Path-Fast pode revolucionar seu fluxo de trabalho de desenvolvimento
            com ferramentas poderosas e intuitivas.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid-responsive"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group h-full"
            >
              <Card className="h-full relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full flex flex-col">
                  <CardHeader className="pb-4 flex-shrink-0">
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl sm:text-4xl mb-3 sm:mb-4 inline-block"
                    >
                      {feature.icon}
                    </motion.div>
                    
                    <CardTitle className="text-lg sm:text-xl font-semibold group-hover:text-gradient-primary transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-text-muted mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-1">
                      {feature.description}
                    </p>

                    {/* Command Example */}
                    <div className="bg-surface/50 rounded-lg border border-border/50 p-3 sm:p-4 group-hover:bg-surface transition-colors duration-300 mt-auto">
                      <div className="text-primary font-mono text-xs sm:text-sm break-all">
                        $ {feature.command}
                      </div>
                    </div>

                    {/* Feature Number */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-xs sm:text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-surface to-surface-elevated rounded-2xl p-6 sm:p-8 border-2 border-border/50 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-accent text-balance">
              Workflow Típico de Desenvolvimento
            </h3>
            <p className="text-sm sm:text-base text-text-muted mb-6 sm:mb-8 max-w-2xl mx-auto text-balance">
              Veja como o Path-Fast se integra perfeitamente ao seu dia a dia de desenvolvimento:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-surface border border-border rounded-lg p-4 sm:p-6"
              >
                <div className="text-xl sm:text-2xl mb-2 sm:mb-3">📂</div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">1. Salvar Projeto</h4>
                <TerminalCommand
                  command="pf add . meu-app"
                  output="✅ Projeto salvo com sucesso!"
                  success={true}
                  className="text-xs sm:text-sm"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-surface border border-border rounded-lg p-4 sm:p-6"
              >
                <div className="text-xl sm:text-2xl mb-2 sm:mb-3">⚡</div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">2. Navegação Rápida</h4>
                <TerminalCommand
                  command="pf go meu-app"
                  output="🚀 Abrindo no VS Code..."
                  success={true}
                  className="text-xs sm:text-sm"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-surface border border-border rounded-lg p-4 sm:p-6 sm:col-span-2 lg:col-span-1"
              >
                <div className="text-xl sm:text-2xl mb-2 sm:mb-3">🛠️</div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">3. Comandos Extras</h4>
                <TerminalCommand
                  command="pf edit api"
                  output="📝 Edição dos comandos"
                  success={true}
                  className="text-xs sm:text-sm"
                />
              </motion.div>
            </div>

            <Button
              size="lg"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              Ver Demonstração Completa
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.span>
            </Button>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-gradient-primary text-balance">
            Por que escolher Path-Fast?
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: "⚡",
                title: "Ultra Rápido",
                description: "Navegue entre projetos em milissegundos"
              },
              {
                icon: "🎯",
                title: "Zero Setup",
                description: "Funciona imediatamente após instalação"
              },
              {
                icon: "🔄",
                title: "Multiplataforma",
                description: "Windows, macOS e Linux suportados"
              },
              {
                icon: "🛡️",
                title: "Confiável",
                description: "Testado em milhares de projetos"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-4 sm:p-6 rounded-lg bg-surface/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{benefit.icon}</div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">{benefit.title}</h4>
                <p className="text-xs sm:text-sm text-text-muted text-balance">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}