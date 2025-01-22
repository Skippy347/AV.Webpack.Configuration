import tsParser from "@typescript-eslint/parser";
import unusedImports from "eslint-plugin-unused-imports";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";


/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,

      globals: {
        ...globals.browser,
      },

      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          impliedStrict: true,
          jsx: true,
        },
      },
    },

    plugins: {
      perfectionist,
      "unused-imports": unusedImports,
    },

    rules: {
      "no-unused-vars": "off",

      // Use unused-imports rule for unused imports
      "unused-imports/no-unused-imports": "warn",  // Only show warning for unused imports
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",  // Warn about unused variables (including imports)
          varsIgnorePattern: "^_",  // Ignore unused vars starting with underscore
          args: "after-used",  // Warn for unused arguments after the last used argument
          argsIgnorePattern: "^_",  // Ignore unused args starting with underscore
        },
      ],
    },
  },
  {
    ignores: ["node_modules", "build"],
  },
];
