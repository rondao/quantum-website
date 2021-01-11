module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        fill: "repeat(auto-fill, minmax(300px, 1fr))",
        fit: "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
