module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    'vue/max-attributes-per-line': [0],
    'vue/multi-word-component-names': [0],
    'prettier/prettier': ['warn'],
  },
}
