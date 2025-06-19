import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import ngPlugin from '@angular-eslint/eslint-plugin';
import tplPlugin from '@angular-eslint/eslint-plugin-template';
import tplParser from '@angular-eslint/template-parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // Ignore common folders
  { ignores: ['**/node_modules/**', '**/dist/**', '**/.git/**'] },

  // TypeScript & Angular code
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@angular-eslint': ngPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.json'],
        },
      },
    },
    rules: {
      // TypeScript recommended
      ...tsPlugin.configs.recommended.rules,
      // Angular recommended
      ...ngPlugin.configs['recommended'].rules,
      // Import recommended
      ...importPlugin.configs.recommended.rules,
      // Prettier recommended
      ...prettierPlugin.configs.recommended.rules,

      // Customizations
      'prettier/prettier': ['error'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component', 'Module'] }],
      '@angular-eslint/directive-class-suffix': ['error', { suffixes: ['Directive'] }],
      '@angular-eslint/no-empty-lifecycle-method': 'warn',
    },
  },

  // Angular HTML templates
  {
    files: ['**/*.html'],
    languageOptions: { parser: tplParser },
    plugins: { '@angular-eslint/template': tplPlugin },
    rules: {
      ...tplPlugin.configs['recommended'].rules,
      // Custom template rules can go here
    },
  },
];
