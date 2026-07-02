/**
 * CategoryFilter.tsx
 * Botões de filtro por categoria com emojis e estado ativo destacado.
 */

import type { Categoria } from '../../types/Product'

interface CategoryFilterProps {
  selected:  Categoria
  onChange:  (cat: Categoria) => void
}

// Categorias disponíveis com ícones
const categories: { label: Categoria; emoji: string }[] = [
  { label: 'Todos',      emoji: '🐾' },
  { label: 'Aranhas',    emoji: '🕷️' },
  { label: 'Escorpiões', emoji: '🦂' },
  { label: 'Serpentes',  emoji: '🐍' },
  { label: 'Lagartos',   emoji: '🦎' },
  { label: 'Anfíbios',   emoji: '🐸' },
]

export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-2">
      {categories.map(({ label, emoji }) => {
        const isActive = selected === label
        return (
          <button
            key={label}
            onClick={() => onChange(label)}
            aria-pressed={isActive}
            className={[
              'flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              isActive
                ? 'bg-gold text-forest-950 shadow-md shadow-gold/20'
                : 'bg-forest-900/60 text-forest-300 border border-forest-700 hover:border-gold/50 hover:text-white',
            ].join(' ')}
          >
            <span role="img" aria-hidden="true">{emoji}</span>
            {label}
          </button>
        )
      })}
    </div>
  )
}
