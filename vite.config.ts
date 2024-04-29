import tailwindcss from '@tailwindcss/vite'
import { peerDependencies } from './package.json';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({ include: 'lib', insertTypesEntry: true }), cssInjectedByJsPlugin()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "Oblivion ui",
      formats: ["es"],
      fileName: "oblivion-ui",
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: ["react", "react-dom", "react/jsx-runtime"]
      },

    },
    target: 'esnext',
    sourcemap: true,

  },
})
