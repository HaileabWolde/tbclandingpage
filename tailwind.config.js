/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      pointerEvents: {
        'none': 'none',
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
