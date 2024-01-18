/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#f87073",
        color2: "#FA9C0F",
        color3: "#152F37",
        color4: "#35528B",
        color5: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
