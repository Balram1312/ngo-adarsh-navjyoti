/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF5E6',
          100: '#FAEBD7',
          200: '#F5DEB3',
          300: '#E6B325', // ochre yellow
          400: '#F0B80A',
          500: '#DAA520',
          600: '#CD853F',
          700: '#B8860B',
          800: '#A0522D',
          900: '#8B4513', // earthy brown
        },
        secondary: {
          50: '#FAE5D3',
          100: '#F5CBA7',
          200: '#F0B27A',
          300: '#EB984E',
          400: '#E67E22',
          500: '#D35400', // terracotta orange
          600: '#A04000',
          700: '#873600',
          800: '#6E2C00',
          900: '#581F00',
        },
        accent: {
          50: '#EBF5FB',
          100: '#D6EAF8',
          200: '#AED6F1',
          300: '#85C1E9',
          400: '#5DADE2',
          500: '#3498DB',
          600: '#2E86C1',
          700: '#2874A6',
          800: '#21618C',
          900: '#1A5276', // calming blue
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Hind', 'sans-serif'],
        hindi: ['Hind', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'button': '0 4px 10px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [],
};