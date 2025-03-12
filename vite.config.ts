import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/global.scss";`,
      },
    },
  },
  server: {
    watch: {
      usePolling: true, // ✅ SCSS 변경 감지 강제
    },
    hmr: true, // ✅ 변경 사항이 실시간으로 반영되도록 설정
  },
});
