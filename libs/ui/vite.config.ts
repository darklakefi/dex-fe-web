/// <reference types='vitest' />
import { join, resolve } from "node:path";

import { nxCopyAssetsPlugin } from "@nx/vite/plugins/nx-copy-assets.plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, mergeConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

const baseConfig = {
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es" as const],
      name: "@dex-web/ui",
    },
    outDir: "./dist",
    reportCompressedSize: true,
  },
  cacheDir: "../../node_modules/.vite/libs/ui",
  root: __dirname,

  test: {
    coverage: {
      provider: "v8" as const,
      reportsDirectory: "../../coverage/libs/ui",
    },
    deps: {
      web: {
        transformAssets: true,
      },
    },
    environment: "happy-dom",
    globals: true,
    hookTimeout: 30000,
    include: [
      "src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    ],
    name: "ui",
    pool: "forks" as const,
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
    reporters: ["default"],
    setupFiles: ["@testing-library/jest-dom"],
    teardownTimeout: 10000,
    testTimeout: 30000,
    watch: false,
  },
};

export const config = mergeConfig(baseConfig, {
  assetsInclude: ["**/*.svg"],
  plugins: [
    react(),
    tailwindcss(),
    svgr({ include: "**/*.svg" }),
    nxCopyAssetsPlugin(["*.md"]),
    dts({
      entryRoot: "src",
      tsconfigPath: join(__dirname, "tsconfig.lib.json"),
    }),
  ],
});

export default defineConfig(config);
