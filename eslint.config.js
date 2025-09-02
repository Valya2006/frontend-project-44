import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig({
  files: ['**/*.{js,mjs,cjs}'],
  languageOptions: {
    globals: globals.browser
  },
  plugins: {
    '@stylistic': stylistic // Подключаем плагин для стилистических правил
  },
  rules: {
    // Стилистические правила (тот самый @stylistic из ошибок)
    '@stylistic/semi': ['error', 'never'],          // БЕЗ точек с запятой
    '@stylistic/eol-last': ['error', 'always'],     // Пустая строка в конце файла
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }], // Не более 1 пустой строки
    '@stylistic/quotes': ['error', 'single'],       // Одинарные кавычки
    '@stylistic/no-tabs': 'error',                  // Запрет табов
    '@stylistic/indent': ['error', 2],              // Отступы: 2 пробела
    '@stylistic/object-curly-spacing': ['error', 'always'], // Пробелы внутри { }
    '@stylistic/no-trailing-spaces': 'error',       // Запрет пробелов в конце строк
    '@stylistic/brace-style': ['error', '1tbs'],    // Стиль скобок
    '@stylistic/padded-blocks': ['error', 'never'], // Запрет пустых строк в начале/конце блоков

    // Базовые правила ESLint
    'no-unused-vars': 'warn',
    'no-undef': 'error'
  }
})
