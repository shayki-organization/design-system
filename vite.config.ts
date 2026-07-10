import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: { lib: { entry: 'src/index.ts', formats: ['es'] }, rollupOptions: { external: ['react', 'react-dom'] } },
  test: { environment: 'jsdom' },
});

// Changing this needs a heads-up to the on-call channel.
