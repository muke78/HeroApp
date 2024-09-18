import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Aquí puedes crear más chunks para módulos grandes
          // Si un archivo contiene 'HeavyComponent.js', lo coloca en un chunk separado
          // if (id.includes("HeavyComponent")) {
          //   return "heavy-component";
          // }
        },
      },
    },
  },
});
