import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { copyFileSync } from "fs";

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    {
      name: "generate-404",
      closeBundle: () => {
        const distDir = resolve(__dirname, "dist");
        const indexPath = resolve(distDir, "index.html");
        const notFoundPath = resolve(distDir, "404.html");
        copyFileSync(indexPath, notFoundPath);
        console.log("✅ 404.html erstellt");
      },
    },
  ],
});
