/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Color Palette extracted from logo
        brand: {
          primary: "#0A2540", // Deep Metallic Base
          blue: "#0072CE",    // Vibrant Royal Accent
          cyan: "#00C4B4",    // Cyan Accent
          orange: "#FF6B00",  // Warm Orange Accent
          lime: "#4CD964",    // Logo Arc Spectrum - Lime Green
          yellow: "#FFCC00",  // Logo Arc Spectrum - Yellow
          red: "#FF3B30",     // Logo Arc Spectrum - Red
        },
        'primary-blue': '#0A2540',
        'accent-blue': '#0072CE',
        'cyan-accent': '#00C4B4',
        'warm-orange': '#FF6B00',
        'arc-lime': '#4CD964',
        'arc-yellow': '#FFCC00',
        'arc-red': '#FF3B30',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 25px -5px rgba(10, 37, 64, 0.08), 0 8px 10px -6px rgba(10, 37, 64, 0.04)',
        'orange-glow': '0 4px 14px 0 rgba(255, 107, 0, 0.39)',
        'cyan-glow': '0 4px 14px 0 rgba(0, 196, 180, 0.35)',
      }
    },
  },
  plugins: [],
};
