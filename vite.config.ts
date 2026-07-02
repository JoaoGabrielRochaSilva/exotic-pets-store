import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Para deploy no GitHub Pages, altere 'base' para o nome do seu repositório:
// base: '/nome-do-repositorio/'
// Exemplo: base: '/exotic-pets-store/'
export default defineConfig({
  plugins: [react()],
  base: '/exotic-pets-store/',
})
