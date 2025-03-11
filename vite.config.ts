import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ `@`를 `src` 폴더로 지정
    },
  },
  server: {
    watch: {
      usePolling: true, // ✅ 파일 변경 감지 (Windows, WSL 환경에서 필요할 수 있음)
    }
  }
});
