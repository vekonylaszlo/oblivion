import tailwindcss from '@tailwindcss/vite'
import { peerDependencies } from './package.json';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({ include: 'lib' })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "Oblivion ui",
      fileName: (format) => `oblivion-ui.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: "React",
          'react-dom': "ReactDOM",
          'react/jsx-runtime': "react/jsx-runtime",
          tailwindcss: 'tailwindcss',
          '@tailwindcss/vite': 'tailwindcss-vite',
          '@radix-ui/react-avatar': "react-avatar",
          clsx: 'clsx',
          'tailwind-merge': 'tailwind-merge',
          '@radix-ui/react-select': 'react-select',
          'lucide-react': 'lucide-react',
          '@radix-ui/react-progress': 'react-progress',
          '@radix-ui/react-tooltip': 'react-tooltip',
          '@radix-ui/react-slot': 'react-slot',
          'react-hook-form': 'react-hook-form',
          '@radix-ui/react-label': 'react-label',
          'cva': 'class-variance-authority',
          '@radix-ui/react-alert-dialog': 'react alert dialog',
          '@radix-ui/react-dropdown-menu': 'react dropdown menu',
          '@radix-ui/react-hover-card': 'react hover card',
          'cmdk': 'cmdk',
          '@radix-ui/react-dialog': 'react-dialog',
          'react-day-picker': 'react-day-picker',
          '@radix-ui/react-popover': 'react-popover',
          '@radix-ui/react-checkbox': 'react checkbox',
          '@radix-ui/react-switch': 'react-switch'
        },
      },
    },
    target: 'esnext',
    sourcemap: true,
    emptyOutDir: true,
  },
})
