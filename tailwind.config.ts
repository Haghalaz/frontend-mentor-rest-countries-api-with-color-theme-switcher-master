const withMT = require("@material-tailwind/react/utils/withMT");

const colors = require("tailwindcss/colors");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      maxHeight: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      minHeight: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      minWidth: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      maxWidth: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },

      animation: {
        shake: "shake 1s ease 0s 1 normal forwards;",
        slideInRight: "slideInRight 0.5s normal both",
        scaleUpTr:
          "scaleUpTr 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },

      colors: {
        gray: colors.gray,
        red: colors.red,
        yellow: colors.amber,
        orange: colors.orange,
        teal: colors.teal,
        cyan: colors.cyan,
        zinc: colors.zinc,
        sky: colors.sky,
        darkBlue: {
          DEFAULT: "hsl(209, 23%, 22%)", // Dark Mode Elements
        },
        veryDarkBlue: {
          DEFAULT: "hsl(207, 26%, 17%)", // Dark Mode Background
          light: "hsl(200, 15%, 8%)", // Light Mode Text
        },
        darkGray: {
          DEFAULT: "hsl(0, 0%, 52%)", // Light Mode Input
        },
        veryLightGray: {
          DEFAULT: "hsl(0, 0%, 98%)", // Light Mode Background
        },
        white: {
          DEFAULT: "hsl(0, 0%, 100%)", // Dark Mode Text & Light Mode Elements
        },
      },

      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%": { transform: "translateX(10px)" },
          "80%": { transform: "translateX(8px)" },
          "90%": { transform: "translateX(-8px)" },
        },

        scaleUpTr: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(1000px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
});
