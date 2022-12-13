module.exports = {
    trailingComma: "es5",
    tabWidth: 2,
    semi: false,
    singleQuote: true,
    plugins: [
        "prettier-plugin-organize-imports",
        "prettier-plugin-tailwindcss" // prettier-plugin-tailwindcss must be loaded last
    ],
    pluginSearchDirs: false
}