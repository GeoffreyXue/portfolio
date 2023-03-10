import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const isProduction = process.env.NODE_ENV === "production";

console.log("Production: ", isProduction);
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    paths: {
      base: isProduction ? '' : '/portfolio',
    }
  }
};

export default config;
