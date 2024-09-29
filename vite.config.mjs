import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
    plugins: [
        react(),
        Sitemap({
            hostname: 'https://thejackiegleason.com', // Replace with your actual hostname
            // Additional options can be added here
        }),
    ],
    publicDir: 'public', // Specify the public directory
});