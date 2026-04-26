'use client'

import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight 
} from 'lucide-react'
import { useCart } from './CartProvider'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { openModal } = useCart()

  const businessHours = [
    { day: 'Monday - Friday', time: '7:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '9:00 AM - 4:00 PM' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Order Now', href: '#', isHighlighted: true, onClick: openModal },
  ]

  const handleNavClick = (href: string, onClick?: () => void) => {
    if (onClick) {
      onClick()
      return
    }
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <footer className="bg-[var(--dark-green)] text-white mt-auto" id="contact">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="text-3xl text-[var(--light-green)]">
                <i className="fas fa-mortar-pestle"></i>
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">Uji</span>
                <span className="text-[var(--accent-orange)]">Pawa</span>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Bringing the nourishing power of traditional Kenyan porridge and herbal medicine to your doorstep.
              Authentic recipes passed down through generations.
            </p>
            
            <div className="flex gap-4">
              {/* Using Font Awesome icons instead of lucide-react for social media */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--accent-orange)] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--accent-orange)] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--accent-orange)] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--accent-orange)] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-[var(--light-green)]">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href, link.onClick)}
                    className={`flex items-center gap-2 transition-colors ${
                      link.isHighlighted
                        ? 'text-[var(--accent-orange)] font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.isHighlighted && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-[var(--light-green)]">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--accent-orange)]" />
                </div>
                <div>
                  <h4 className="font-semibold">Our Location</h4>
                  <p className="text-gray-300">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[var(--accent-orange)]" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <a href="tel:+254700123456" className="text-gray-300 hover:text-white">
                    +254 700 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[var(--accent-orange)]" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <a href="mailto:info@ujipawa.co.ke" className="text-gray-300 hover:text-white">
                    info@ujipawa.co.ke
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-[var(--light-green)]">Business Hours</h3>
            <div className="space-y-4">
              {businessHours.map((schedule) => (
                <div key={schedule.day} className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[var(--accent-orange)]" />
                    <span className="font-medium">{schedule.day}</span>
                  </div>
                  <span className="text-gray-300">{schedule.time}</span>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)] text-white placeholder:text-gray-400"
                />
                <button className="bg-[var(--accent-orange)] hover:bg-[#F57C00] px-4 py-3 rounded-r-lg font-semibold transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; {currentYear} UjiPawa. All rights reserved.</p>
              <p className="text-sm mt-1">Traditional Kenyan Porridge & Herbal Medicine</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Delivery Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </button>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-4 text-gray-400">
              <span className="text-sm">We accept:</span>
              <div className="flex items-center gap-3">
                <i className="fab fa-cc-visa text-2xl"></i>
                <i className="fab fa-cc-mastercard text-2xl"></i>
                <i className="fab fa-cc-paypal text-2xl"></i>
                <i className="fas fa-money-bill-wave text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}