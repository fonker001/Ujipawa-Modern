'use client'

import { motion } from 'framer-motion'
import { Heart, Leaf, Sprout, Truck, Shield, Users } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Heart Health',
    description: 'Our blends contain ingredients known to support cardiovascular health and improve circulation.',
    color: 'text-red-500'
  },
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'All ingredients are sourced locally and free from artificial additives, preservatives, or chemicals.',
    color: 'text-[var(--light-green)]'
  },
  {
    icon: Sprout,
    title: 'Sustainably Sourced',
    description: 'We work directly with Kenyan farmers to ensure ethical and sustainable sourcing practices.',
    color: 'text-emerald-500'
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Enjoy free delivery within Nairobi for orders above KSh 1000. Fast and reliable service.',
    color: 'text-[var(--accent-orange)]'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every batch is tested for quality and purity. Your satisfaction is 100% guaranteed.',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'A portion of every purchase supports local farming communities and health initiatives.',
    color: 'text-purple-500'
  },
]

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--dark-green)] mb-4">
            Why Choose UjiPawa
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We combine traditional wisdom with modern quality standards to bring you the best of Kenyan heritage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-8 hover:border-[var(--primary-green)] border-2 border-transparent transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-2xl bg-opacity-10 ${benefit.color.replace('text-', 'bg-')}`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Traditional Kenyan Ingredients"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[var(--dark-green)] mb-6">
                Our Heritage & Mission
              </h3>
              <p className="text-gray-600 mb-6">
                UjiPawa draws from generations of Kenyan tradition, combining nourishing porridge with carefully 
                selected local herbs. Our recipes have been passed down through families and perfected over decades.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we blend this ancestral wisdom with modern nutritional science to create products that 
                not only taste authentic but also provide measurable health benefits.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-[var(--primary-green)] mb-2">50+</div>
                  <div className="text-gray-700">Years of Tradition</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-[var(--primary-green)] mb-2">1000+</div>
                  <div className="text-gray-700">Happy Families</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}