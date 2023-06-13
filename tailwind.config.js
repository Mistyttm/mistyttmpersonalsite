/** @type {import('tailwindcss').Config} */
import { defaultTheme } from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                bagel: [
                    '"Bagel Fat One"',
                    "cursive",
                ],
            },
        },
    },
    plugins: [],
};
