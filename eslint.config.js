import tsParser from "@typescript-eslint/parser";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";

import perfectionistRules from "./perfectionist.js";

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
    },

    rules: {
      ...perfectionistRules,
    },
  },
  {
    ignores: ["node_modules", "build"],
  },
];
