module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@sqrtthree/eslint-config-node',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'import/extensions': [
      'error',
      {
        ts: 'never',
        js: 'never',
      },
    ],
  },
}
