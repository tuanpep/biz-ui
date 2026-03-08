import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  vite: {
    resolve: {
      alias: {
        // Resolve biz-ui to source so ESM re-exports work in Vite/Rollup
        'biz-ui': path.resolve(__dirname, '../../packages/ui/src/index.ts'),
        '@examples': path.resolve(__dirname, 'src/modules/examples/enterprise-demo'),
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
    ssr: {
      noExternal: ['lucide-react'],
    },
  },
  output: 'static',
  site: 'https://biz-ui.dev',
});
