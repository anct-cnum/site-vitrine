import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: [
      ],
      include: [
        'src/**/*'
      ],
      provider: 'istanbul',
      skipFull: true,
      watermarks: {
        branches: [95, 100],
        functions: [95, 100],
        lines: [95, 100],
        statements: [95, 100],
      },
    },
    environment: 'jsdom',
    globals: true,
    restoreMocks: true,
    sequence: { shuffle: true },
    setupFiles: ['vitest.setup.js'],
    unstubEnvs: true,
    unstubGlobals: true,
  },
});
