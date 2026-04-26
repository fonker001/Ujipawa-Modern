'use client'

import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useCart } from './CartProvider'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart, openModal } = useCart()

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80 // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg" id="home">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="text-3xl text-[var(--primary-green)]">
              <i className="fas fa-mortar-pestle"></i>
            </div>
            <div className="text-2xl font-bold">
              <span className="text-[var(--primary-green)]">Uji</span>
              <span className="text-[var(--accent-orange)]">Pawa</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-700 hover:text-[var(--primary-green)] font-medium transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Cart Button */}
            <button
              onClick={openModal}
              className="relative bg-[var(--primary-green)] hover:bg-[var(--dark-green)] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <ShoppingCart size={20} />
              <span>Order Now</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--accent-orange)] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={openModal}
              className="relative bg-[var(--primary-green)] hover:bg-[var(--dark-green)] text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm"
            >
              <ShoppingCart size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--accent-orange)] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--primary-green)]"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="block text-gray-700 hover:text-[var(--primary-green)] font-medium py-2 w-full text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={openModal}
                  className="w-full bg-[var(--primary-green)] text-white py-3 rounded-lg font-semibold text-center mt-4"
                >
                  Order Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}