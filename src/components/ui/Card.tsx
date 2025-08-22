import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, ...props }, ref) => {
    return (
      <div
        className={cn(
          'card',
          {
            'hover:border-primary hover:-translate-y-1': hover,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="card-content-flex">
          {children}
        </div>
      </div>
    )
  }
)

Card.displayName = 'Card'

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn('mb-3 sm:mb-4 flex-shrink-0', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, as: Component = 'h3', ...props }, ref) => {
    return (
      <Component
        className={cn('text-lg sm:text-xl font-semibold text-text text-balance', className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

CardTitle.displayName = 'CardTitle'

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn('text-text-muted text-sm sm:text-base flex-1', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn('mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border flex-shrink-0', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardContent, CardFooter }
export type { CardProps, CardHeaderProps, CardTitleProps, CardContentProps, CardFooterProps }