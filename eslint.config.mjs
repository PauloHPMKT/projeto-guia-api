import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/**@type {import('eslint').Linter.Config[]} */

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended, ...tseslint.configs.recommended,
  {
    "rules": {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/no-namespace": "off",
    }
  }
];
