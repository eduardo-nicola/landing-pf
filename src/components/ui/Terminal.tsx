'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn, sleep } from '@/lib/utils'

interface TerminalLine {
  type: 'command' | 'output' | 'success' | 'error' | 'comment'
  content: string
  delay?: number
}

interface TerminalProps {
  lines: TerminalLine[]
  autoPlay?: boolean
  loop?: boolean
  className?: string
  title?: string
  onComplete?: () => void
}

export function Terminal({ 
  lines, 
  autoPlay = true, 
  loop = false, 
  className,
  title = "Terminal",
  onComplete 
}: TerminalProps) {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [currentText, setCurrentText] = useState('')

  useEffect(() => {
    if (!autoPlay || currentLineIndex >= lines.length) {
      if (currentLineIndex >= lines.length && loop) {
        // Reset for loop
        setTimeout(() => {
          setVisibleLines([])
          setCurrentLineIndex(0)
          setCurrentText('')
        }, 2000)
      } else if (currentLineIndex >= lines.length && onComplete) {
        onComplete()
      }
      return
    }

    const typeNextLine = async () => {
      const currentLine = lines[currentLineIndex]
      setIsTyping(true)
      
      // Delay antes de começar a digitar
      if (currentLine.delay) {
        await sleep(currentLine.delay)
      }

      // Simular digitação
      const text = currentLine.content
      for (let i = 0; i <= text.length; i++) {
        setCurrentText(text.slice(0, i))
        await sleep(30 + Math.random() * 50) // Velocidade variável de digitação
      }

      // Adicionar linha completa à lista
      setVisibleLines(prev => [...prev, currentLine])
      setCurrentText('')
      setIsTyping(false)
      setCurrentLineIndex(prev => prev + 1)
    }

    typeNextLine()
  }, [currentLineIndex, lines, autoPlay, loop, onComplete])

  const getLineClassName = (type: TerminalLine['type']) => {
    switch (type) {
      case 'command':
        return 'text-primary'
      case 'output':
        return 'text-text-muted'
      case 'success':
        return 'text-success'
      case 'error':
        return 'text-error'
      case 'comment':
        return 'text-text-muted italic'
      default:
        return 'text-text'
    }
  }

  const formatLine = (line: TerminalLine) => {
    if (line.type === 'command') {
      return `$ ${line.content}`
    }
    return line.content
  }

  return (
    <div className={cn('terminal max-w-full', className)}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm text-text-muted font-medium">{title}</span>
        </div>
      </div>
      
      <div className="terminal-content min-h-[200px]">
        <AnimatePresence>
          {visibleLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn('mb-1', getLineClassName(line.type))}
            >
              <pre className="whitespace-pre-wrap font-mono">
                {formatLine(line)}
              </pre>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && currentText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              'mb-1',
              getLineClassName(lines[currentLineIndex]?.type || 'command')
            )}
          >
            <pre className="whitespace-pre-wrap font-mono">
              {lines[currentLineIndex]?.type === 'command' ? '$ ' : ''}
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="bg-primary w-2 h-5 inline-block ml-1"
              />
            </pre>
          </motion.div>
        )}
      </div>
    </div>
  )
}

interface SimpleTerminalProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export function SimpleTerminal({ children, title = "Terminal", className }: SimpleTerminalProps) {
  return (
    <div className={cn('terminal', className)}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm text-text-muted font-medium">{title}</span>
        </div>
      </div>
      
      <div className="terminal-content">
        {children}
      </div>
    </div>
  )
}

interface TerminalCommandProps {
  command: string
  output?: string
  success?: boolean
  className?: string
}

export function TerminalCommand({ command, output, success, className }: TerminalCommandProps) {
  return (
    <div className={cn('mb-4 last:mb-0', className)}>
      <div className="text-primary font-mono mb-1">
        $ {command}
      </div>
      {output && (
        <div className={cn(
          'font-mono text-sm whitespace-pre-wrap',
          success ? 'text-success' : 'text-text-muted'
        )}>
          {output}
        </div>
      )}
    </div>
  )
}