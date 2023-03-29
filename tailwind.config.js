/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#579D81",
                secondary: "#1D221E",
                accent: "#FF7060",
            },
        },
    },
    plugins: [],
};
