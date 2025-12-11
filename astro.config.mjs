// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },  // 新增 i18n 配置
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "vi"],
    routing: {
      prefixDefaultLocale: false // 默认语言(en)不加前缀，其他语言加 /zh, /vi
    }
  }
});