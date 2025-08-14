import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold-beige': '#cdb483',
        'royal-blue': '#467edd',
        'lavender-blue': '#b1b4e5',
      },
    },
  },
  plugins: [],
} satisfies Config;