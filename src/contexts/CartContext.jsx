import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState([])

  function openCart() {
    setIsOpen(true)
  }

  function closeCart() {
    setIsOpen(false)
  }

  function toggleCart() {
    setIsOpen(v => !v)
  }

  const value = {
    isOpen,
    openCart,
    closeCart,
    toggleCart,
    items,
    setItems
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}

export default CartContext
