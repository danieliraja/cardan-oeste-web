import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  // site: "https://www.cardanoeste.com.br",
  site: "http://localhost:4321",
  base: "/",
  integrations: [sitemap(), tailwind(), robotsTxt()],
});
