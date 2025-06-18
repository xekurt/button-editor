// eslint.config.js
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import ngPlugin from '@angular-eslint/eslint-plugin';
import tplPlugin from '@angular-eslint/eslint-plugin-template';
import tplParser from '@angular-eslint/template-parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // ignore build artifacts
  { ignores: ['node_modules/', 'dist/', '.git/'] },

  // TS / Angular code
  {
    files: ['*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.spec.json'],
        createDefaultProgram: false,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@angular-eslint': ngPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    extends: [
      'plugin:@angular-eslint/recommended',
      'plugin:@angular-eslint/template/process-inline-templates',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'prettier',
    ],
    rules: {
      // run Prettier as an ESLint rule
      'prettier/prettier': ['error'],
      // your overrides…
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },

  // Angular HTML templates
  {
    files: ['*.html'],
    plugins: { '@angular-eslint/template': tplPlugin },
    languageOptions: { parser: tplParser },
    extends: ['plugin:@angular-eslint/template/recommended'],
    rules: {
      // e.g. turn warnings into errors
    },
  },
];
