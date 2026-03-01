import { defineConfig } from "vite"
import desktopPlugin from "./vite"

export default defineConfig({
  base: "https://opencodeapp.agentserver.dev/",
  plugins: [desktopPlugin] as any,
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    port: 3000,
  },
  build: {
    target: "esnext",
    // sourcemap: true,
  },
})
