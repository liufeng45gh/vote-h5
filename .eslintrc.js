module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended'],
  plugins: ['vue'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'space-before-function-paren': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    'vue/no-v-for-template-key-on-child': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    // 'indent': ['error', 2, { 'SwitchCase': 1 }],
    'generator-star-spacing': 'off',
    // 'object-curly-spacing': ['error', 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
