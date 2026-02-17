import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or vue/svelte etc if used
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
