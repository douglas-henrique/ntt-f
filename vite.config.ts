import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        preconnect: false,
        display: "block",
        injectTo: "head-prepend",
        families: ["League Spartan", "Montserrat"],
      },
    }),
  ],
});
