/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  // Default
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  bracketSpacing: true,

  printWidth: 120,
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],

  // @ianvs/prettier-plugin-sort-imports
  importOrder: ["<BUILTIN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^[./]"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};
