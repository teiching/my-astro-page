import { defineConfig } from 'astro/config';

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://teiching.github.io',
  base: 'my-astro-page',
  
  integrations: [preact()]
});