import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  server: {
    port: 3000,
  },
  // Ensures .riv files are treated as assets
  assetsInclude: ["**/*.riv"],

  // JSON handling (default is fine unless you need stringify behavior)
  json: {
    stringify: false, // Change to true if JSON files should be loaded as strings
  },

  // Optional: Resolve aliases for cleaner imports
  resolve: {
    alias: {
      "@": "/src", // Example alias for your source folder
    },
  },

  // Plugins can be added here
  plugins: [
    imagetools({
      // Automatically process all images
      defaultDirectives: () => new URLSearchParams("format=webp"),
    }),
  ],
});
