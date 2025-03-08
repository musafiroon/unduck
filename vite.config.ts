import { join, resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import transformPlugin from "vite-plugin-transform";
import { VitePWA } from "vite-plugin-pwa";

// Load env file
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "/unduck/",

    plugins: [
      transformPlugin({
        tStart: "%{",
        tEnd: "}%",
        replaceFiles: [resolve(join(__dirname, "/build/opensearch.xml"))],
        replace: {
          VITE_PUBLIC_URL: "https://musafiroon.github.io/unduck",
          
        },
      }),
      VitePWA({
        registerType: "autoUpdate",
      }),
    ],
    build: {
      base: "/unduck/",
      outDir: "build",
    },
  };
});
