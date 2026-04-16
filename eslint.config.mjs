'use strict';
import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: { ...globals.node } } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        rules: {
            semi: 'off',
            quotes: ['error', 'single'],
        },
    },
];