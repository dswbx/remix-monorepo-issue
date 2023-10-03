import { defineConfig } from "tsup";

export default defineConfig({
   entry: ["src/index.ts"],
   bundle: true,
   splitting: false,
   sourcemap: true,
   clean: true,
   format: "esm",
   tsconfig: "tsconfig.json",
   dts: true,
});
