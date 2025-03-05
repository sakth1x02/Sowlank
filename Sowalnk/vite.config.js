import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://54.152.65.253:2000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, "")
      },
    },
  },
});
