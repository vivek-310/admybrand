/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          light: '#FFFFFF', // white
          DEFAULT: '#E5E5E5', // gray-200
          dark: '#A3A3A3', // gray-400
        },
        secondary: {
          light: '#F5F5F5', // gray-100
          DEFAULT: '#D4D4D4', // gray-300
          dark: '#737373', // gray-500
        },
        background: {
          light: '#FFFFFF',
          DEFAULT: '#F3F4F6', // gray-100
          dark: '#000000', // black
        },
        surface: {
          light: '#F9FAFB', // gray-50
          DEFAULT: '#FFFFFF',
          dark: '#000000', // black
        },
        text: {
          light: '#6B7280', // gray-500
          DEFAULT: '#374151', // gray-700
          dark: '#1F2937', // gray-800
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'scale': 'scale 0.3s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 