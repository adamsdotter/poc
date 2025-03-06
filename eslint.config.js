import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:prettier/recommended',
      'prettier',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: 'eslint-plugin-prettier',
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': 'warn',
      'no-shadow': 'warn',
      'eqeqeq': ['error', 'always'],
      'no-duplicate-imports': 'error',
      'no-redeclare': 'error',
      'no-duplicate-case': 'error',
      'no-else-return': 'error',
      'prefer-const': 'error',
      'consistent-this': ['warn', 'self'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-empty-function': 'error',
      'no-magic-numbers': 'warn',
      'no-unneeded-ternary': 'error',
    },
  },
)