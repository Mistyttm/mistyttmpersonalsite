/** @type {import('tailwindcss').Config} */

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                bagel: ['"Bagel Fat One"', "cursive"],
            },
            rotate: {
                30: "30deg",
            },
            scale: {
                25: ".25",
                15: ".15",
                10: ".10",
            },
        },
    },
    plugins: [],
};
