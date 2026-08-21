import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [
    {
      name: 'load+transform-js-files-as-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) {
          return null;
        }

        // Use the exposed transform from vite, instead of directly
        // transforming with oxc
        return transformWithOxc(code, id, {
          lang: 'jsx',
        });
      },
    },
    react(),
  ],
  optimizeDeps: {
    force: true,
    rolldownOptions: {
      moduleTypes: {
        '.js': 'jsx',
      },
    },
  },
  css: {
    lightningcss: {
      errorRecovery: true,
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
