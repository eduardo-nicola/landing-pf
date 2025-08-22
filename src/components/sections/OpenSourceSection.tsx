'use client'

import { motion } from 'framer-motion'
import { Github, Star, GitFork, Users, Heart, ExternalLink, MessageSquare, Bug } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { siteConfig, packageInfo } from '@/lib/constants'

const contributionTypes = [
  {
    icon: <Bug className="w-6 h-6" />,
    title: 'Reportar Bugs',
    description: 'Encontrou um problema? Nos ajude a melhorar reportando bugs.',
    action: 'Abrir Issue',
    link: `${siteConfig.links.github}/issues/new?template=bug_report.md`
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Sugerir Features',
    description: 'Tem uma ideia incrível? Compartilhe suas sugestões conosco.',
    action: 'Sugerir Feature',
    link: `${siteConfig.links.github}/issues/new?template=feature_request.md`
  },
  {
    icon: <GitFork className="w-6 h-6" />,
    title: 'Contribuir Código',
    description: 'Faça um fork, implemente suas melhorias e envie um PR.',
    action: 'Fork & PR',
    link: siteConfig.links.github
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Discussões',
    description: 'Participe das discussões da comunidade e compartilhe ideias.',
    action: 'Participar',
    link: siteConfig.links.discussions
  }
]

const badges = [
  {
    title: 'NPM Version',
    image: `https://img.shields.io/npm/v/${packageInfo.name}?style=for-the-badge&logo=npm&logoColor=white&color=cb3837`,
    link: siteConfig.links.npm
  },
  {
    title: 'License',
    image: `https://img.shields.io/badge/license-${packageInfo.license}-blue?style=for-the-badge&logo=opensourceinitiative&logoColor=white`,
    link: `${siteConfig.links.github}/blob/main/LICENSE`
  },
  {
    title: 'GitHub Stars',
    image: `https://img.shields.io/github/stars/${packageInfo.repository}?style=for-the-badge&logo=github&logoColor=white&color=yellow`,
    link: siteConfig.links.github
  },
  {
    title: 'Downloads',
    image: `https://img.shields.io/npm/dt/${packageInfo.name}?style=for-the-badge&logo=npm&logoColor=white&color=green`,
    link: siteConfig.links.npm
  }
]

export function OpenSourceSection() {
  return (
    <section id="contribute" className="section-padding bg-gradient-to-b from-surface/50 to-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Open Source</span>
            <span className="text-text block mt-2">Feito com ❤️ pela Comunidade</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto">
            O Path-Fast é um projeto open source criado para desenvolvedores, por desenvolvedores. 
            Junte-se à nossa comunidade e ajude a torná-lo ainda melhor!
          </p>
        </motion.div>

        {/* Stats and Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {badges.map((badge, index) => (
              <motion.a
                key={badge.title}
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block"
              >
                <img 
                  src={badge.image} 
                  alt={badge.title}
                  className="h-8 rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contribution Types */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gradient-accent">
            Como Contribuir
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributionTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full text-center hover:border-primary/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                      {type.icon}
                    </div>
                    
                    <CardTitle className="text-lg mb-3 group-hover:text-gradient-primary transition-all duration-300">
                      {type.title}
                    </CardTitle>
                    
                    <CardContent className="mb-6">
                      <p className="text-text-muted text-sm leading-relaxed">
                        {type.description}
                      </p>
                    </CardContent>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(type.link, '_blank')}
                      className="group/btn w-full"
                    >
                      {type.action}
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl scale-105" />
          
          <Card className="relative bg-gradient-to-br from-surface to-surface-elevated border-2 border-primary/20 shadow-2xl">
            <div className="p-8 lg:p-12 text-center">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Github className="w-8 h-8 text-background" />
              </motion.div>
              
              <h3 className="text-3xl font-bold mb-4 text-gradient-primary">
                ⭐ Dê uma Estrela no GitHub!
              </h3>
              
              <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
                Se o Path-Fast te ajudou a ser mais produtivo, considere dar uma estrela no repositório. 
                Isso nos motiva a continuar melhorando o projeto!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => window.open(siteConfig.links.github, '_blank')}
                  className="group bg-gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Ver no GitHub
                  <Star className="w-4 h-4 ml-2 group-hover:fill-current transition-all" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(siteConfig.links.issues, '_blank')}
                  className="group"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Reportar Issue
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contributors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h4 className="text-xl font-semibold mb-6 flex items-center justify-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Contribuidores
          </h4>
          
          <div className="bg-surface/50 rounded-lg p-6 border border-border/50">
            <p className="text-text-muted mb-4">
              Agradecemos a todos que contribuem para tornar o Path-Fast melhor! 🚀
            </p>
            
            <div className="flex justify-center">
              <img
                src={`https://contrib.rocks/image?repo=${packageInfo.repository}`}
                alt="Contributors"
                className="rounded-lg shadow-md"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Criado por {siteConfig.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>•</span>
                <span>Licença {packageInfo.license}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>•</span>
                <span>Feito com TypeScript</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}