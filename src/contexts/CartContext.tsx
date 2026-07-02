/**
 * CartContext.tsx
 * Gerenciamento de estado global do carrinho via Context API + useReducer.
 * Persiste automaticamente no localStorage para manter o carrinho entre sessões.
 */

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from 'react'
import type { Product, CartItemType } from '../types/Product'

// ─── Estado do carrinho ─────────────────────────────────────────────────────

interface CartState {
  items: CartItemType[]
}

// ─── Ações disponíveis ───────────────────────────────────────────────────────

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }       // payload = id do produto
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantidade: number } }
  | { type: 'CLEAR_CART' }

// ─── Reducer ─────────────────────────────────────────────────────────────────

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find(i => i.produto.id === action.payload.id)
      if (exists) {
        // Incrementa quantidade se já está no carrinho
        return {
          items: state.items.map(i =>
            i.produto.id === action.payload.id
              ? { ...i, quantidade: Math.min(i.quantidade + 1, i.produto.estoque) }
              : i
          ),
        }
      }
      return { items: [...state.items, { produto: action.payload, quantidade: 1 }] }
    }

    case 'REMOVE_ITEM':
      return { items: state.items.filter(i => i.produto.id !== action.payload) }

    case 'UPDATE_QUANTITY': {
      const { id, quantidade } = action.payload
      if (quantidade <= 0) {
        return { items: state.items.filter(i => i.produto.id !== id) }
      }
      return {
        items: state.items.map(i =>
          i.produto.id === id
            ? { ...i, quantidade: Math.min(quantidade, i.produto.estoque) }
            : i
        ),
      }
    }

    case 'CLEAR_CART':
      return { items: [] }

    default:
      return state
  }
}

// ─── Inicializa estado lendo do localStorage ──────────────────────────────────

const STORAGE_KEY = 'exotic-pets-cart'

function getInitialState(): CartState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? { items: JSON.parse(saved) as CartItemType[] } : { items: [] }
  } catch {
    return { items: [] }
  }
}

// ─── Contexto e hook ──────────────────────────────────────────────────────────

interface CartContextType {
  items: CartItemType[]
  addItem: (product: Product) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantidade: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

// ─── Provider ─────────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, getInitialState)

  // Persiste no localStorage sempre que o carrinho muda
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
  }, [state.items])

  // Valores derivados
  const totalItems = state.items.reduce((acc, i) => acc + i.quantidade, 0)
  const totalPrice = state.items.reduce(
    (acc, i) => acc + i.produto.preco * i.quantidade,
    0
  )

  const value: CartContextType = {
    items: state.items,
    addItem: (product) => dispatch({ type: 'ADD_ITEM', payload: product }),
    removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    updateQuantity: (id, quantidade) =>
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantidade } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// ─── Hook personalizado ────────────────────────────────────────────────────────

export function useCart(): CartContextType {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart deve ser usado dentro de <CartProvider>')
  return ctx
}
