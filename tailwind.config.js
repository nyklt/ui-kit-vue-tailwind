module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["Gilroy", "sans-serif"],
        body: ["Graphik", "sans-serif"]
      },
      colors: {
        cyan: "#9cdbff",
        primary: "#553C9A",
        secondary: "#9F7AEA",
        success: "#72b339",
        info: "#5A67D8",
        warning: "#ED8936",
        danger: "#E53E3E",
        light: "#EDF2F7", 
        dark: "#000000"
      },
      margin: {
        "96": "24rem",
        "128": "32rem"
      },
      spacing: {
        auto: "0 auto",
        "72": "18rem"
      }
    },
    variants: {
      backgroundColor: ["responsive", "hover", "focus", "active"]
    },
    plugins: [
    ]
  }
};
