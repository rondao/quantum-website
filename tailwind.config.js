module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        fill: "repeat(auto-fill, minmax(300px, 1fr))",
        fit: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      backgroundImage: (theme) => ({
        bookcase: "url('/bookcase_1.jpg')",
        "gradient-border":
          "linear-gradient(to top, rgba(255, 255, 255, 255), rgba(255, 255, 255, 0)), linear-gradient(to bottom, rgba(255, 255, 255, 255), rgba(255, 255, 255, 0))",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
