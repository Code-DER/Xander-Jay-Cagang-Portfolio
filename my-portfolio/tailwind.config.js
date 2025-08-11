/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: "#FFD6E0",
        pastelBlue: "#A8DADC",
        pastelYellow: "#FFF3B0",
        pastelGreen: "#BEE3DB",
        pastelPurple: "#CDB4DB",
      },
    },
  },
  plugins: [],
};
