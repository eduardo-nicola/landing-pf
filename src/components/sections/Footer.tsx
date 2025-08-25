'use client'

import { motion } from 'framer-motion'
import { Github, Package, Mail, Heart, ExternalLink, Zap, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { usePackageManager } from '@/contexts/PackageManagerContext'
import { siteConfig, packageInfo, navigation } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'

const footerLinks = {
  produto: [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Demonstração', href: '#demo' },
    { name: 'Instalação', href: '#installation' },
    { name: 'Documentação', href: `${siteConfig.links.github}#readme` }
  ],
  comunidade: [
    { name: 'GitHub', href: siteConfig.links.github },
    { name: 'Issues', href: `${siteConfig.links.github}/issues` },
    { name: 'Discussões', href: siteConfig.links.discussions },
    { name: 'Contribuir', href: '#contribute' }
  ],
  recursos: [
    { name: 'NPM Package', href: siteConfig.links.npm },
    { name: 'Changelog', href: `${siteConfig.links.github}/releases` },
    { name: 'Licença MIT', href: `${siteConfig.links.github}/blob/main/LICENSE` },
    { name: 'Roadmap', href: `${siteConfig.links.github}/projects` }
  ]
}

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    href: siteConfig.links.github,
    color: 'hover:text-gray-400'
  },
  {
    name: 'NPM',
    icon: <Package className="w-5 h-5" />,
    href: siteConfig.links.npm,
    color: 'hover:text-red-500'
  }
]

export function Footer() {
  const { getInstallCommand } = usePackageManager()
  
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href.slice(1))
    } else {
      window.open(href, '_blank', 'noopener noreferrer')
    }
  }

  return (
    <footer className="bg-gradient-to-b from-surface to-surface-elevated border-t border-border">
      <div className="container">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient-primary">
                    {siteConfig.name}
                  </h3>
                  <p className="text-sm text-text-muted">
                    v{packageInfo.name.split('-').length > 1 ? '1.0.0' : 'latest'}
                  </p>
                </div>
              </div>
              
              <p className="text-text-muted mb-6 max-w-md leading-relaxed">
                {siteConfig.description}
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4 mb-6">
                {socialLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg bg-surface hover:bg-surface-elevated border border-border ${link.color} transition-all duration-300`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.button>
                ))}
              </div>

              {/* Quick Install */}
              <div className="bg-background border border-border rounded-lg p-4">
                <p className="text-sm text-text-muted mb-2">Instalação rápida:</p>
                <div className="flex items-center justify-between bg-surface rounded px-3 py-2">
                  <code className="text-primary text-sm font-mono">
                    {getInstallCommand()}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigator.clipboard?.writeText(getInstallCommand())}
                    className="p-1 h-6 w-6"
                  >
                    <Zap className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-4 capitalize text-text">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-text-muted hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {link.name}
                        {!link.href.startsWith('#') && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-8 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">1.0.0</div>
              <div className="text-sm text-text-muted">Versão Atual</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success mb-1">MIT</div>
              <div className="text-sm text-text-muted">Licença</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary mb-1">TS</div>
              <div className="text-sm text-text-muted">TypeScript</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">0</div>
              <div className="text-sm text-text-muted">Dependencies</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-6 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <span>Criado com</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>por</span>
              <button
                onClick={() => window.open(siteConfig.author.github, '_blank')}
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                {siteConfig.author.name}
              </button>
            </div>
            
            <div className="text-text-muted text-sm">
              © {new Date().getFullYear()} Path-Fast. Todos os direitos reservados.
            </div>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pb-6 flex justify-center"
        >
          <Button
            variant="ghost"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↑
            </motion.div>
            <span className="ml-2">Voltar ao topo</span>
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}