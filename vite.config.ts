import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // относительный base: с HashRouter сборка работает из любой подпапки (gh-pages: /TMDB/)
  base: './',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 600,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'react', test: /node_modules[/\\](react|react-dom|react-router|scheduler)[/\\]/, priority: 30 },
            { name: 'mui', test: /node_modules[/\\](@mui|@emotion)[/\\]/, priority: 20 },
            { name: 'redux', test: /node_modules[/\\](@reduxjs|react-redux|redux|immer|reselect)[/\\]/, priority: 20 },
            { name: 'vendor', test: /node_modules[/\\]/, priority: 10 },
          ],
        },
      },
    },
  },
})
