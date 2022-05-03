module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        refloat: {
          "0%, 100%": {
            transform: "translateY(-20px)",
          },
          "50%": {
            transform: "translateY(0px)",
          },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation:{
        float: "float 3s ease-in-out infinite",
        refloat: "refloat 3s ease-in-out infinite",
        'waving-hand': 'wave 2s linear infinite',
      }
    },
  },
  plugins: [],
};
