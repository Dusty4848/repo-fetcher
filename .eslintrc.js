module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ['jsx-a11y', 'import', 'jest', 'testing-library'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    // "react/jsx-one-expression-per-line": [1, { "allow": "none"|"literal"|"single-child" }]
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': 'off',
    'jest/no-disabled-tests': 'off',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-nested-ternary': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debug': 'warn',
    // default rule causes waning 'React' was used before it was defined.
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    // default rule causes waning when enums are defined
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  globals: {
    window: false,
    navigator: false,
    fetch: false,
    localStorage: false,
    document: false,
    FormData: false,
    FileReader: false,
  },
  env: {
    'jest/globals': true,
  },
};
