'use client'

import { motion } from 'framer-motion'
import { useCart } from './CartProvider'
import { Plus, Leaf } from 'lucide-react'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    description: string
    image: string
    category: string
    benefits?: string[]
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card group"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[var(--primary-green)] text-white px-3 py-1 rounded-full text-sm font-semibold">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-[var(--dark-green)]">
            {product.name}
          </h3>
          <div className="text-2xl font-bold text-[var(--primary-green)]">
            KSh {product.price}
          </div>
        </div>

        <p className="text-gray-600 mb-4">{product.description}</p>

        {product.benefits && (
          <div className="mb-4">
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--primary-green)] mb-2">
              <Leaf size={16} />
              <span>Benefits:</span>
            </div>
            <ul className="space-y-1">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-[var(--light-green)] mt-1">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className="w-full bg-[var(--light-green)] hover:bg-[var(--secondary-green)] text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          Add to Order
        </button>
      </div>
    </motion.div>
  )
}