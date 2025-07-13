import { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "eslint/config";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default defineConfig([
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
  ),
  eslintConfigPrettier,
  {
    rules: {
      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".tsx"],
        },
      ],
    },
  },
]);
