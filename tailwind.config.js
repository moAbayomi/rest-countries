/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      grayBg: "hsl(0, 0%, 98%)",
      blueTxt: "hsl(200, 15%, 8%)",
      blueBg: "hsl(207, 26%, 17%)",
      blueEl: "hsl(209, 23%, 22%)",
    },
    extend: {},
  },

  plugins: [require("flowbite/plugin")],
};
