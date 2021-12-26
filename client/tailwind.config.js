module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled'])
  },
  plugins: [],
}
