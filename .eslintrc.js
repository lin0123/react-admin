module.exports = {
  // parser: '@typescript-eslint/parser',
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json',
  },
  extends: [
    'airbnb-base',
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    'import/resolver': {
      webpack: {
        config: './config/webpack.config.js',
      },
    },
    'import/ignore': '\.(scss|less|css|styl)$',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 0,
    'max-len': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    'prefer-promise-reject-errors': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-empty-function': 0,
    'import/no-anonymous-default-export': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
  },
};
