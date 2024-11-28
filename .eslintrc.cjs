module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    './.eslintrc-auto-import.json',
    'plugin:prettier/recommended',
    '@unocss'
  ],
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-v-model-argument': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        // 关闭空类型检查 {}
        extendDefaults: true,
        types: {
          '{}': false,
          Function: false
        }
      }
    ],
    'space-infix-ops': [
      'error',
      {
        int32Hint: false
      }
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'indent-legacy': ['error', 2],
    indent: ['error', 2],
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 3
      }
    ],
    'array-bracket-spacing': ['error', 'always'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error', 'always'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    semi: ['error', 'always']
  },
  globals: {
    DialogOption: 'readonly',
    OptionType: 'readonly'
  }
};
