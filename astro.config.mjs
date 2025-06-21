// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from "astro-icon";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en"
  },

  integrations: [icon({
    include:{
      devicon: ['*'],
      mdi:['email-outline']
    }
  })]
});