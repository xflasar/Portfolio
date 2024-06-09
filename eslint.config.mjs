import globals from "globals";
import react from "eslint-plugin-react";

export default [
  {
    languageOptions: { globals: globals.browser }
  },{
    files: ['src/**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ignores: ['**/*.d.ts'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // ... any rules you want
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
     },
    // ... others are omitted for brevity
  },
];