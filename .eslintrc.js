module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
