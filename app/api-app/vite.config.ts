import path from "path";
import { defineConfig, loadEnv } from "vite";
import honox from "honox/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_BASE_PATH,
    server: {
      port: 8080,
    },
    plugins: [honox({ entry: path.join(process.cwd(), "src", "server.ts") })],
  };
});
