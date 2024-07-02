/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-color": "#39496A",
        "code-primary": "#657B83",
        "code-secondary": "#6078A9",
        link: "#1C7CD6",
        muted: "#6D727C",
        body: "#39496A",
      },
      fontFamily: {
        "body-text": ["Arial"],
        monospace: ["Courier New", "Bold"],
        montserrat: ["Montserrat"],
      },
      fontWeight: {
        "body-text": 400,
        header: 600,
        // monospace: 700, // Bold
      },
      fontSize: {
        "body-text": "14px",
        header: "16px",
        monospace: "12px",
        "link-monospace": "13px",
      },
      lineHeight: {
        "body-text": "20px",
        header: "24px",
      },
    },
  },
  plugins: [],
};
