import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/oauth/v1": {
        target: "https://kang.oneauth.cn/",
        changeOrigin: true,
      },
    },
  },
});
