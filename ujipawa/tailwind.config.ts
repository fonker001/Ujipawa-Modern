import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-montserrat)'],
      },
      colors: {
        'primary-green': 'var(--primary-green)',
        'secondary-green': 'var(--secondary-green)',
        'light-green': 'var(--light-green)',
        'dark-green': 'var(--dark-green)',
        'accent-orange': 'var(--accent-orange)',
        'light-bg': 'var(--light-bg)',
        'dark-text': 'var(--dark-text)',
        'light-text': 'var(--light-text)',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease',
        'slide-out': 'slideOut 0.3s ease',
      },
    },
  },
  plugins: [],
}

export default config