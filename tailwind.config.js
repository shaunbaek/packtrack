/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#FF6B54',
          dark: '#E85A44',
          light: '#FF8A76',
          lighter: '#FFB39A',
        },
        navy: {
          DEFAULT: '#1E293B',
          light: '#334155',
        },
        slate: {
          DEFAULT: '#475569',
          light: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
