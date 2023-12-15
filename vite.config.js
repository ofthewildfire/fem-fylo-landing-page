import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
});

// The above tells Vitest to use the JSDOM environment for running the tests.
