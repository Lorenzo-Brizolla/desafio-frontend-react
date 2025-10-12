import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/global.css'
// import { Product } from './pages/Product'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Product } from './pages/Product'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    {/* <Product /> */}
    <Home />
    <Footer />
  </StrictMode>,
)
