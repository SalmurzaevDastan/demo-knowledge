module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/prop-types': 'off',
    'keyword-spacing': 'error',
    'space-before-blocks': 'error',
    'arrow-spacing': 'error',
    'global-require': 'off',
    'linebreak-style': 'off',
    'no-case-declarations': 'off',
    'no-unused-vars': [
      'error'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1
      }
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': true
      }
    ],
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true
      }
    ],
    'semi': ['error','always'],
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-continue': 'warn',
    'no-useless-escape': 'warn',
    'operator-linebreak': [
      'error',
      'after'
    ],
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'max-len': [
      'error',
      { 'code': 100 }
    ],
    'no-trailing-spaces': [
      'error'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'space-infix-ops': 'error',
    'key-spacing': [
      'error',
      { 'beforeColon': false }
    ],
    'padded-blocks': ['error', 'never'],
    'no-undef': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'off',
      {
        'devDependencies': true,
        'optionalDependencies': true,
        'peerDependencies': true
      }
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-curly-spacing': [
      'error',
      {
        'when': 'always'
      }
    ],
    'react/jsx-tag-spacing': 'off',
    'react/forbid-prop-types': 'off',
    'indent': [
      'error', 2,
      {
        'SwitchCase': 1,
        'ignoredNodes': [
          'TemplateLiteral'
        ]
      }
    ],
    'no-console': 'warn',
    'template-curly-spacing': 0
  }
};
