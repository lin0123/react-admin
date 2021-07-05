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
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
  },
};
