/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        haaf: {
          navy: '#101e2b',
          navy2: '#1b3040',
          olive: '#6d755a',
          gold: '#c9aa73',
          goldDark: '#80623b',
          cream: '#f5f3ed',
          ink: '#1a2832',
          surface: '#e6e3d9',
          border: '#d7d9d8'
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Arial', 'Helvetica', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
