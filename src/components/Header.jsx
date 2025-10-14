import { Link } from 'react-router-dom'
import logoImage from '../assets/logo.svg'
import ToteImage from '../assets/Tote.svg'
import { Cart } from './Cart'

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img className="header__logo" src={logoImage} alt="logo CoffeeSpresso" />
        </Link>
        <Link to="#" className="link__quantity">
          <img src={ToteImage} alt="Carrinho" />
          <span className="badge__quantity">1</span>
        </Link>
      </div>
      <Cart />
    </header>
  )
}
