module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [2, {
      'maxSingular': 1,
      'maxMulti': 1,
      'when': 'always',
    }],
    'react/jsx-indent': [2, 'tab'|2],
    'react/jsx-indent-props': [2, 'tab'|2],
    'react/jsx-curly-spacing': [2, {'when': 'always'}],
    'react/jsx-no-duplicate-props': [2, {'ignoreCase': false}],
    'react/jsx-one-expression-per-line': [2, {'allow': 'single-child'}],
    'react/jsx-tag-spacing': [2, {'beforeSelfClosing': 'always'}],
    'react/jsx-closing-bracket-location': [2, {
      'nonEmpty': 'tag-aligned' || false,
      'selfClosing': 'tag-aligned' || false,
    }],
  },
};
