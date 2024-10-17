import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    {
      name: "test",
      config: () => ({ test: { setupFiles: ["./test/setup.ts"] } }),
    },
  ],
  test: {
    isolate: false,
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
