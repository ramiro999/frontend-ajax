module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'custom-xl': '410px', // Adjust the height value as needed
      },
      right: {
        '88': '22rem', // Customize '88' as you wish
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
}
