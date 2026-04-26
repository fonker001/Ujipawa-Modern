'use client'

import OrderModal from '@/components/OrderModal'
import { motion } from 'framer-motion'
import { ShoppingBag, Coffee, Package, Truck } from 'lucide-react'

export default function OrderPage() {
  const orderSteps = [
    {
      icon: ShoppingBag,
      title: 'Browse Products',
      description: 'Select from our authentic Kenyan porridge and herbal blends'
    },
    {
      icon: Coffee,
      title: 'Add to Cart',
      description: 'Choose your preferred items and quantities'
    },
    {
      icon: Package,
      title: 'Checkout',
      description: 'Provide your delivery details and payment information'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Enjoy fresh delivery within Nairobi in under 2 hours'
    }
  ]

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-[var(--dark-green)] mb-6">
              Easy Online Ordering
            </h1>
            <p className="text-xl text-gray-600">
              Order your favorite UjiPawa products in just a few clicks. No account needed!
            </p>
          </div>

          {/* Order Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {orderSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[var(--light-green)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-[var(--primary-green)]" />
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[var(--dark-green)] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Order CTA */}
          <div className="bg-gradient-to-r from-[var(--light-green)]/10 to-[var(--primary-green)]/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-[var(--dark-green)] mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Click the button below to open the order modal and start your UjiPawa journey!
            </p>
            
            {/* This would typically open the modal, but for now we'll show it inline */}
            <OrderModal />
            
            <div className="mt-8 text-sm text-gray-600">
              <p>💳 No payment needed upfront • 🚚 Free delivery on orders over KSh 1000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}