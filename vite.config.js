import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnWarning: false, // Ensure warnings are not treated as errors
      failOnError: true, // Keep errors as errors
    }),
  ],
});
