import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    {
      name: "setup-files",
      config: () => ({ test: { setupFiles: ["./test/config.ts"] } }),
    },
  ],
  test: {
    isolate: false,
    pool: "threads",
    logHeapUsage: true,
    allowOnly: true,
    silent: false,
    globals: true,
    mockReset: true,
    clearMocks: true,
    hookTimeout: 60_000,
    testTimeout: 10_000,
    coverage: {
      all: true,
      thresholds: {
        branches: 100,
        lines: 100,
        functions: 100,
        statements: 100,
      },
    },
  },
});
