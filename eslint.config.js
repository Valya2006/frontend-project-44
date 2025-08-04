import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "semi": ["error", "always"],        // Точки с запятой обязательны
      "indent": ["error", 2],             // Отступы: 2 пробела
      "space-infix-ops": "error",         // Пробелы вокруг операторов
      "keyword-spacing": "error",         // Пробелы после ключевых слов
    },
  },
]);