module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended', 'next', 'next/core-web-vitals'],
  plugins: ['react', 'prettier', 'import', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_.*?$',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['type', 'builtin', 'object', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'react/self-closing-comp': 'warn',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['return', 'export'] },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
  },
};
