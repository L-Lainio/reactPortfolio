// vite.config.js
import legacy from '@vitejs/plugin-legacy'
// import image from '@rollup/plugin-image'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [[react()],
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
})
