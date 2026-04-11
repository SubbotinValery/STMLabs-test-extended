import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
    { ignores: ['dist', 'node_modules', 'build', '*.config.js', '*.config.ts'] },

    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended, prettier],
        files: ['src/**/*.{ts,tsx}'],
        ignores: ['**/*.config.js', '**/*.config.ts', 'eslint.config.js'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.app.json',
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: prettierPlugin,
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.app.json',
                },
            },
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'prettier/prettier': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
        },
    },

    {
        files: ['**/*.config.js', '**/*.config.ts', 'eslint.config.js'],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
        rules: {
            '@typescript-eslint/no-var-requires': 'off',
            'no-console': 'off',
        },
    }
);
