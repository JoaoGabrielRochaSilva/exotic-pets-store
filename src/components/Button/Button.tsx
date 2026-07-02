/**
 * Button.tsx
 * Componente de botão reutilizável com variantes de estilo, tamanho e estado.
 */

import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  Variant
  size?:     Size
  fullWidth?: boolean
  children:  ReactNode
}

// Mapas de classes por variante e tamanho
const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold text-forest-950 font-semibold hover:bg-gold-light active:bg-gold-dark border border-gold',
  secondary:
    'bg-forest-800 text-forest-100 font-semibold hover:bg-forest-700 active:bg-forest-900 border border-forest-700',
  danger:
    'bg-red-700 text-white font-semibold hover:bg-red-600 active:bg-red-800 border border-red-600',
  outline:
    'bg-transparent text-gold font-semibold border border-gold hover:bg-gold hover:text-forest-950',
  ghost:
    'bg-transparent text-forest-300 font-medium hover:text-white hover:bg-forest-800 border border-transparent',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-5 py-2.5 text-base rounded-lg',
  lg: 'px-7 py-3.5 text-lg rounded-xl',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={[
        // Base
        'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer',
        'focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-forest-950',
        // Variante e tamanho
        variantClasses[variant],
        sizeClasses[size],
        // Estados
        fullWidth ? 'w-full' : '',
        disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
        // Extra
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </button>
  )
}
