/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

const config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        nextui({
            defaultTheme: "light",
            defaultExtendTheme: "light",
            themes: {
                light: {
                    colors: {
                        primary: {
                            DEFAULT: "#FB923C",
                        },
                    },
                },
            },
        }),
    ],
};

export default config;
