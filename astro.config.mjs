// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@hooks': path.resolve('./src/hooks'),
        '@data': path.resolve('./src/data'),
        '@assets': path.resolve('./src/assets'),
        '@src': path.resolve('./src'),
      },
    },
  },

  redirects: {
    '/products': '/products/pipes',
  },

  adapter: netlify(),
});
