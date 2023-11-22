module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      extends: ['plugin:typescript-sort-keys/recommended'],
      files: ['./**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      rules: {
        'react/no-unstable-nested-components': 'warn',
        'react/no-unstable-nested-components': 'warn',
        '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-use-before-define': 'off',
        'no-unused-vars': 'off',
        'typescript-sort-keys/interface': 'warn',
        'typescript-sort-keys/string-enum': 'warn',
      },
    },
  ],
  plugins: [
    'prettier',
    'no-only-tests',
    'react-refresh',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'eslint-plugin-sort-keys-fix',
    'eslint-plugin-no-inline-styles',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'no-unused-vars': 'off',
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    'prettier/prettier': 'warn',
    'react/boolean-prop-naming': ['warn', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
    'react/jsx-handler-names': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        reservedFirst: ['ref'],
        shorthandFirst: true,
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  settings: {
    'import/external-module-folders': ['node_modules'],
    // "import/resolver": {
    //   node: {
    //     paths: ["./src", "./lib"],
    //   },
    // },
    react: {
      version: 'detect',
    },
  },
};
