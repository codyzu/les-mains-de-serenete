// @ts-check
import {defineConfig} from 'astro/config';
import unoCSS from 'unocss/astro';
import {getSiteBasePath} from './config/base-path.mjs';

// https://astro.build/config
export default defineConfig({
  base: getSiteBasePath(),
  integrations: [
    unoCSS({
      injectReset: '@unocss/reset/tailwind-v4.css',
    }),
  ],
});
