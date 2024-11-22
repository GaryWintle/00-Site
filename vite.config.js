import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  // Local development server configuration
  server: {
    port: 3000,
  },

  // Ensures .riv files are treated as assets
  assetsInclude: ["**/*.riv"],

  // JSON handling (default is fine unless you need stringify behavior)
  json: {
    stringify: false, // Set to true if JSON files should load as strings
  },

  // Optional: Resolve aliases for cleaner imports
  resolve: {
    alias: {
      "@": "/src", // Example alias for your source folder
    },
  },

  // Plugins
  plugins: [
    imagetools({
      // Automatically process all images with specific parameters
      defaultDirectives: () => new URLSearchParams("format=webp"),
      include: "**/*.{png,jpg}",
    }),
  ],

  // Build configuration
  build: {
    target: "esnext", // Modern JavaScript for optimal performance
    outDir: "dist", // Output directory for the build
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          // Keep file names clean
          return name.endsWith(".webp")
            ? "images/[name]-[hash][extname]"
            : "images/[name][extname]";
        },
      },
      external: [], // Keep empty unless you have external dependencies
    },
  },
});
