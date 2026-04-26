'use client'

import { motion } from 'framer-motion'
import { useCart } from './CartProvider'
import { Coffee, Sparkles } from 'lucide-react'

export default function Hero() {
  const { openModal } = useCart()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Traditional Kenyan Porridge"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay - this darkens the image behind text */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)'
          }}
        />
      </div>

      {/* Content - NO text shadows needed */}
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles size={20} className="text-[var(--accent-orange)]" />
            <span className="text-sm font-medium">Authentic Kenyan Recipe</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Nourish Your Body</span>
            <span className="block text-[var(--accent-orange)]">With UjiPawa</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Experience the healing power of traditional Kenyan porridge blended with natural herbs 
            for optimal health and vitality. Made from the finest local ingredients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="bg-[var(--accent-orange)] hover:bg-[#F57C00] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-3 text-lg"
            >
              <Coffee size={24} />
              Order Now - No Account Needed
            </button>
            <a
              href="#products"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 border border-white/20"
            >
              Explore Products
            </a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-white">Natural Ingredients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-white">Years Tradition</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-white">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-white">Delivery Available</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}