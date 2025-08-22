'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Github, Package } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { navigation, siteConfig } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigationClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href.slice(1))
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 text-xl font-bold text-gradient-primary">
              <span className="text-2xl">🚀</span>
              {siteConfig.name}
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigationClick(item.href)}
                className="text-text-muted hover:text-text transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(siteConfig.links.npm, '_blank')}
              className="flex items-center gap-2"
            >
              <Package className="w-4 h-4" />
              NPM
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(siteConfig.links.github, '_blank')}
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3, ease: "easeOut" }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: { duration: 0.3, ease: "easeIn" }
            }
          }}
          className="md:hidden overflow-hidden bg-surface border-t border-border"
        >
          <div className="py-4 space-y-4">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigationClick(item.href)}
                className="block w-full text-left px-4 py-2 text-text-muted hover:text-text hover:bg-surface-elevated transition-colors rounded-lg"
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            <div className="flex gap-2 px-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  window.open(siteConfig.links.npm, '_blank')
                  setIsMobileMenuOpen(false)
                }}
                className="flex-1 flex items-center justify-center gap-2"
              >
                <Package className="w-4 h-4" />
                NPM
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.open(siteConfig.links.github, '_blank')
                  setIsMobileMenuOpen(false)
                }}
                className="flex-1 flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}