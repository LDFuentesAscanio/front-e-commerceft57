import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'old-rose': '#D7263D',
        'pearl-white': '#F5F3F5',
        'black-tag': '#141414',
        'green-tent': '#ABACAD',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'scroll-continuous': 'scroll 15s linear infinite',
      },
      boxShadow: {
        neon: '0 0 15px 5px rgba(215, 38, 61, 0.7), 0 0 30px 10px rgba(215, 38, 61, 0.5)',
        custom: '5px 5px 15px rgba(203, 203, 203, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
