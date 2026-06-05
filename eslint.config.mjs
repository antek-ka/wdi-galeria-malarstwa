import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'node_modules/**']),
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'error',
      'import/order': ['error', { alphabetize: { order: 'asc' } }],
      'jsx-a11y/alt-text': 'error',
    },
  },
  {
    files: ['src/components/ui/**'],
    rules: {
      'import/order': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]);

export default eslintConfig;
