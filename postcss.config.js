module.exports = {
    "plugins": [
        require('postcss-import')(),
        require('tailwindcss')('./node_modules/.bin/tailwind-config.js'),
        require('autoprefixer')(),
    ]
}