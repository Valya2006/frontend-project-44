import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig({
  files: ['**/*.{js,mjs,cjs}'],
  languageOptions: {
    globals: globals.browser,
  },
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {

    '@stylistic/semi': ['error', 'never'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/no-tabs': 'error',
    '@stylistic/indent': ['error', 2],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/padded-blocks': ['error', 'never'],

    // Базовые правила ESLint
    'no-unused-vars': 'warn',
    'no-undef': 'error',
  },
})
