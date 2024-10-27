import prettier from 'eslint-plugin-prettier';

export default {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    semi: ['warn', 'always'],
  },
};
