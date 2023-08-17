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
                40: "40deg",
                50: "50deg",
            },
            scale: {
                100: "1",
                80: ".80",
                75: ".75",
                60: ".60",
                50: ".50",
                45: ".45",
                30: ".30",
                25: ".25",
                15: ".15",
                10: ".10",
            },
        },
    },
    plugins: [],
};
