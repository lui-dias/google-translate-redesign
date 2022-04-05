const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                'google-sans': ['Google Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                '_dark-text': '#3b4451',
                '_blue': '#c7e7ff',
                '_light-blue': '#d2e3fc',
                '_power-blue': '#1a73e8',
                '_light-gray': '#f4f7fc',
            }
        },
    },
    plugins: [],
}
