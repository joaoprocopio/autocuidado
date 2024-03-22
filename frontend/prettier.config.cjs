/** @type {import("prettier").Config} */
module.exports = {
    semi: false,
    singleQuote: false,
    bracketSameLine: true,
    trailingComma: "all",
    tabWidth: 4,
    printWidth: 100,
    quoteProps: "consistent",
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindFunctions: ["cva", "cn", "clsx"],
}
