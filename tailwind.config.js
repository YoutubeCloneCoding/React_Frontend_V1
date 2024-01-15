/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "border-gray": "#ccc",
        "hover-border-gray": "#c6c6c6",
        "button-gray": "#f8f8f8",
        "hover-button-gray": "#f0f0f0",
        "login-blue": "#065fd4",
        "hover-login-bg": "#def1ff",
      },
    },
  },
  plugins: [],
};
