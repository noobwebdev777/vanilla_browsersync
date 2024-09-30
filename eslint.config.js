module.exports = {
  extends: [
    'eslint:recommended', // your preferred base configuration
    'plugin:prettier/recommended', // enables eslint-plugin-prettier and displays Prettier errors as ESLint errors
    'prettier' // disables ESLint rules that conflict with Prettier
  ],
  // Your other ESLint configurations
  rules: {
    'no-unused-vars': 'warn',
  'no-undef': 'error',
  'semi': ['error', 'always'],
  'no-extra-semi': 'warn',
  'no-console': 'warn',
  'no-empty': 'warn',
  'no-extra-parens': 'warn',
  'no-magic-numbers': ['warn', { ignore: [0, 1] }],
  'prefer-template': 'warn',
  'no-nested-ternary': 'warn',
  },
};
