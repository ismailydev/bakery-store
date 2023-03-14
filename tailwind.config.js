/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#579D81",
                secondary: "#1D221E",
                tertiary: "#676D7C",
                accent: "#FF7060",
                light: "#F4F4F4",
            },
        },
    },
    plugins: [],
};
