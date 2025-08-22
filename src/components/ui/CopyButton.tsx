'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button, ButtonProps } from './Button'
import { copyToClipboard } from '@/lib/utils'

interface CopyButtonProps extends Omit<ButtonProps, 'children'> {
  text: string
  children?: React.ReactNode
  showText?: boolean
  successMessage?: string
}

export function CopyButton({ 
  text, 
  children, 
  showText = false, 
  successMessage = 'Copiado!',
  variant = 'outline',
  size = 'sm',
  ...props 
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const success = await copyToClipboard(text)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleCopy}
      disabled={copied}
      {...props}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          {showText && <span className="ml-1">{successMessage}</span>}
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          {showText && <span className="ml-1">Copiar</span>}
          {children}
        </>
      )}
    </Button>
  )
}

interface CodeBlockWithCopyProps {
  code: string
  language?: string
  showLineNumbers?: boolean
}

export function CodeBlockWithCopy({ 
  code, 
  language = 'bash',
  showLineNumbers = false 
}: CodeBlockWithCopyProps) {
  return (
    <div className="relative group">
      <div className="code-block">
        {showLineNumbers && (
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-surface-elevated border-r border-border flex flex-col text-text-muted text-xs font-mono">
            {code.split('\n').map((_, index) => (
              <div key={index} className="px-2 py-1 text-right">
                {index + 1}
              </div>
            ))}
          </div>
        )}
        <pre className={showLineNumbers ? 'ml-12' : ''}>
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyButton 
          text={code}
          variant="secondary"
          size="sm"
        />
      </div>
    </div>
  )
}

interface InlineCodeWithCopyProps {
  code: string
  className?: string
}

export function InlineCodeWithCopy({ code, className }: InlineCodeWithCopyProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-surface border border-border rounded px-3 py-2 font-mono text-sm">
      <code className={className}>{code}</code>
      <CopyButton 
        text={code}
        size="sm"
        variant="ghost"
      />
    </div>
  )
}