import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      name: "Chat Screen",
      short_name: "Chat Screen",
      theme_color: "#000000",
      background_color: "#000000",
      display: "standalone",
      scope: "/",
      start_url: "/",
    }),
  ],
});
