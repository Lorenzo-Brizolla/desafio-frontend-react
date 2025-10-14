import { Link } from 'react-router-dom'
import logoImage from '../assets/logo.svg'
import ToteImage from '../assets/Tote.svg'
import { Cart } from './Cart'
import { useCart } from '../contexts/CartContext'

export function Header() {
  const { toggleCart, isOpen } = useCart()

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img className="header__logo" src={logoImage} alt="logo CoffeeSpresso" />
        </Link>
        <button type="button" className="link__quantity" onClick={toggleCart} aria-expanded={isOpen} aria-controls="cart-panel">
          <img src={ToteImage} alt="Carrinho" />
          <span className="badge__quantity">1</span>
        </button>
      </div>
      <Cart />
    </header>
  )
}
