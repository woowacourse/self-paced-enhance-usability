import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 네트워크 상의 다른 장치에서도 접근할 수 있게 함
    port: 3000, // 기본적으로 3000 포트를 사용
  },
});
