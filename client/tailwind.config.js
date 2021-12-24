module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    opacity: ({ after }) => after(['disabled'])
  },
  plugins: [],
}
