module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // If you're using Node.js
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    // 'plugin:prettier/recommended', // If you use Prettier for formatting
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    // Enforce single quotes
    'quotes': ['error', 'single'],
    // Adjust line length
    'max-len': ['warn', {
      code: 140,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    // Other potential improvements:
    'indent': ['error', 2, { SwitchCase: 1 }], // Consistent indentation

    'react/jsx-no-target-blank': 'off',
    'no-unused-vars': 'warn', // Warn about unused variables
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}