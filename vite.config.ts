import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({ include: 'lib', insertTypesEntry: true })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "Oblivion ui",
      formats: ["es"],
      fileName: "oblivion-ui",
    },
    rollupOptions: {
      output: {
        globals: ["react", "react-dom", "react/jsx-runtime"]
      },

    },
  },
})
