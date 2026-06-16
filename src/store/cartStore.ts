import { create } from 'zustand'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  shade: string
}

interface CartStore {
  isOpen: boolean
  items: CartItem[]
  toggleCart: () => void
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
}

export const useCartStore = create<CartStore>((set) => ({
  isOpen: false,
  items: [],
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  addItem: (newItem) => set((state) => {
    const existing = state.items.find(i => i.id === newItem.id && i.shade === newItem.shade)
    if (existing) {
      return {
        items: state.items.map(i => i.id === newItem.id && i.shade === newItem.shade ? { ...i, quantity: i.quantity + newItem.quantity } : i),
        isOpen: true
      }
    }
    return { items: [...state.items, newItem], isOpen: true }
  }),
  removeItem: (id) => set((state) => ({ items: state.items.filter(i => i.id !== id) })),
  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map(i => i.id === id ? { ...i, quantity } : i)
  }))
}))
