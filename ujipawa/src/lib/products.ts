export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
  ingredients: string[]
  benefits: string[]
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Traditional UjiPawa Porridge',
    price: 150,
    description: 'A nutritious blend of millet, sorghum, and maize flour with natural sweeteners and a hint of cinnamon.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Classic',
    ingredients: ['Millet', 'Sorghum', 'Maize Flour', 'Cinnamon', 'Natural Honey'],
    benefits: ['Energy Boosting', 'Rich in Fiber', 'Supports Digestion']
  },
  {
    id: '2',
    name: 'Herbal Immunity Boost',
    price: 250,
    description: 'A powerful blend of ginger, turmeric, lemon, and local herbs to strengthen your immune system.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Wellness',
    ingredients: ['Ginger', 'Turmeric', 'Lemon', 'Moringa', 'Garlic'],
    benefits: ['Immune Support', 'Anti-inflammatory', 'Antioxidant Rich']
  },
  {
    id: '3',
    name: 'Digestive Health Blend',
    price: 200,
    description: 'Special porridge with added mint, fennel, and other digestive herbs to promote gut health.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Digestive',
    ingredients: ['Mint', 'Fennel', 'Chamomile', 'Ginger', 'Probiotics'],
    benefits: ['Gut Health', 'Reduces Bloating', 'Improves Digestion']
  },
  {
    id: '4',
    name: 'Energy & Vitality Mix',
    price: 300,
    description: 'Premium blend with maca, ashwagandha, and adaptogens for sustained energy and stress relief.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Premium',
    ingredients: ['Maca Root', 'Ashwagandha', 'Cacao', 'Coconut Milk', 'Dates'],
    benefits: ['Energy Boosting', 'Stress Relief', 'Hormone Balance']
  }
]

// Export categories for filtering
export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'classic', name: 'Classic Porridge' },
  { id: 'wellness', name: 'Wellness Blends' },
  { id: 'digestive', name: 'Digestive Health' },
  { id: 'premium', name: 'Premium Mixes' }
]