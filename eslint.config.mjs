import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// next/core-web-vitals is the same preset `next lint` expects; FlatCompat
// converts it to ESLint 9 flat config (works locally and on Vercel).
export default [...compat.extends("next/core-web-vitals")];
