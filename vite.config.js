import { defineConfig } from 'vite';

export default defineConfig({
  // Configure Vite for Netlify/Vercel standard deployment
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
  },
});
