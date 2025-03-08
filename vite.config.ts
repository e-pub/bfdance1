import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path'; // ✅ ESM 환경에서 import 방식 수정
import { fileURLToPath } from 'url';

// ✅ ESM 환경에서 `__dirname` 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/scss/global.scss" as *;`, // ✅ `@use`를 사용하며 변수 접근을 쉽게 하기 위해 `as *` 추가
      },
    },
  },
  build: {
    sourcemap: false, // ✅ `.map` 파일 생성 방지
  },
});
