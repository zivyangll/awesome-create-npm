module.exports = {
  env: {
    mocha: true,
  },
  rules: {
    'func-names': ['warn', 'never'],
  },
  extends: ['airbnb-base', 'prettier'],
};
