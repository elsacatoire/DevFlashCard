/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'sitecolors': {
                    background: '#274077',
                    cards: '#14213D',
                    text: '#FFFFFF',
                }
            }
        },

        fontFamily: {
            sans: ['Martian Mono', 'sans-serif'],
        }
    },
    plugins: [],
}