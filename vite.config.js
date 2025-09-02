import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //css modules allows to have multiple css files with the same class name without having the styles overwriting each other, need to be imported into seperate react files
  css: {
    modules:{
      localsConvention: "camelCase" //use camelCase in css module stles
    }
  }
})
