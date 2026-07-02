/**
 * SearchBar.tsx
 * Campo de busca com ícone e botão de limpar.
 */

import { useRef } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

interface SearchBarProps {
  value:       string
  onChange:    (value: string) => void
  placeholder?: string
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Buscar por nome ou descrição...',
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClear = () => {
    onChange('')
    inputRef.current?.focus()
  }

  return (
    <div className="relative">
      {/* Ícone de busca */}
      <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-300 text-lg pointer-events-none" />

      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Buscar produtos"
        className={[
          'w-full bg-forest-900/60 border border-forest-700 rounded-xl',
          'pl-10 pr-10 py-3 text-white placeholder:text-forest-300',
          'focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold',
          'transition-all duration-200 text-sm',
        ].join(' ')}
      />

      {/* Botão limpar */}
      {value && (
        <button
          onClick={handleClear}
          aria-label="Limpar busca"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-forest-300 hover:text-white transition-colors"
        >
          <FiX className="text-lg" />
        </button>
      )}
    </div>
  )
}
