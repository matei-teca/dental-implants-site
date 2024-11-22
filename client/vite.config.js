import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dental-implants-site/', // Replace <repository-name> with the name of your GitHub repo (e.g., 'dental-implants-site').
});