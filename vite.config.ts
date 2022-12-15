import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [react()],
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
  },
})
