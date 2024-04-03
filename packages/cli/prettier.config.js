/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 120,
  htmlWhitespaceSensitivity: 'ignore',
}

export default config
