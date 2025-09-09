import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f8f9fb',
          dark: '#0a0a0b',
        },
        foreground: {
          light: '#0a0a0b',
          dark: '#f5f6f8',
        },
        muted: {
          light: '#e5e7eb',
          dark: '#2b2d31',
        },
        accent: '#4f74c8' // muted blue
      },
      fontFamily: {
        heading: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Inter', 'Helvetica Neue', 'Arial'],
        body: ['ui-sans-serif', 'system-ui', 'Humanist', 'Inter', 'Helvetica Neue', 'Arial']
      },
      letterSpacing: {
        wideplus: '0.08em'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 600ms smooth forwards'
      }
    },
  },
  plugins: [],
}

export default config

