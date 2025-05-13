import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      prettier: pluginPrettier,
      react: pluginReact,
    },
    rules: {
      'prettier/prettier': 'error', // ativa o prettier como regra
    },
  },
  pluginReact.configs.recommended,
]);
