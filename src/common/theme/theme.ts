import { createTheme } from "@mui/material/styles"
import type { ThemeMode } from '@/app/appReducer.ts'

export const darkTheme = 'dark' as const
export const lightTheme = 'light' as const

const lightPalette = {
  mode: lightTheme,
  primary: { main: "#fff", light: "#42a5f5", dark: "#f3f4f6" },
  text: { primary: "#111827", secondary: "#111827", info: "#007bff", muted: "#4b5563" },
  background: { default: "#fff", paper: "#e5e7eb", accent: '#f3f4f6', skeleton: 'rgba(0, 0, 0, 0.11)'},
  border: { default: "#e5e7eb", accent: "#f3f4f6"},
}

const darkPalette = {
  mode: darkTheme,
  primary: { main: "#141c2c", light: "#141c2c", dark: "#0f172a" },
  text: { primary: "#fff", secondary: "#f8fafc", info: "#007bff", muted: "#94a3b8"},
  background: { default: "#141c2c", paper: "#1f2b40", accent: '#0f172a', skeleton: 'rgba(255, 255, 255, 0.08)'},
  border: { default: "#1f2b40",  accent: "none", },
}



export const getThemeCssVariables = (themeMode: ThemeMode) => {
  const palette = themeMode === lightTheme ? lightPalette : darkPalette

  return {
    '--color-text-primary': palette.text.primary,
    '--color-text-secondary': palette.text.secondary,
    '--color-text-muted': palette.text.muted,
    '--color-bg-default': palette.background.default,
    '--color-bg-paper': palette.background.paper,
    '--color-bg-accent': palette.background.accent,
    '--color-bg-skeleton': palette.background.skeleton,
    '--color-border': palette.border.default,
  }
}

export const getTheme = (themeMode: ThemeMode) =>
  createTheme({
    palette: themeMode === lightTheme ? lightPalette : darkPalette,
  })
