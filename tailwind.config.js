module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      colors: {
        black: "#051c28",
        blue: {
          default: "#2260bf",
          dark: "#1d4a8f"
        },
        gray: {
          blue: "#4b6a8a",
          dark: "#1b3846",
          default: "#eaeced",
          light: "#eef1f5"
        },
        green: {
          default: "#2260bf"
        },
        lime: "#9ce736",
        orange: "#ff6b00",
        pink: "#eea2bf",
        white: "#ffffff",
        yellow: "#ffd445,"
      }
    },
    fontFamily: {
      headings: ["DM Serif Display", "Lora", "serif"],
      sans: ["Lato", "sans-serif"],
      serif: ["Lora", "serif"],
      subheadings: ["Lato", "sans-serif"]
    }
  },
  variants: {},
  plugins: []
}
