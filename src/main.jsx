import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Product } from './pages/Product'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
