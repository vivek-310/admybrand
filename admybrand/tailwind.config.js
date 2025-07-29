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
          light: '#60A5FA', // blue-400
          DEFAULT: '#3B82F6', // blue-500
          dark: '#2563EB', // blue-600
        },
        secondary: {
          light: '#A5B4FC', // indigo-400
          DEFAULT: '#6366F1', // indigo-500
          dark: '#4F46E5', // indigo-600
        },
        background: {
          light: '#FFFFFF',
          DEFAULT: '#F3F4F6', // gray-100
          dark: '#1F2937', // gray-800
        },
        surface: {
          light: '#F9FAFB', // gray-50
          DEFAULT: '#FFFFFF',
          dark: '#111827', // gray-900
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