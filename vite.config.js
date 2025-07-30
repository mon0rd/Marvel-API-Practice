import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    hmr: {
      timeout: 300000000000000,
      overlay: true,
    },
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    react({
      include: "**/*.jsx",
    }),
  ],
});
