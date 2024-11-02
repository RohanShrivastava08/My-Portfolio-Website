module.exports = {
  darkMode: 'class', // Retain this if you plan to use dark mode classes later
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust to your project structure
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for your theme
        primary: '#1d4ed8', // Example primary color (blue)
        secondary: '#9333ea', // Example secondary color (purple)
        accent: '#f59e0b', // Example accent color (yellow)
        background: '#1f2937', // Example background color (dark gray)
      },
      fontFamily: {
        // Custom fonts
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
      // You can also extend spacing, borderRadius, etc. if needed
      spacing: {
        '128': '32rem', // Example for custom spacing
      },
    },
  },
  plugins: [],
};
