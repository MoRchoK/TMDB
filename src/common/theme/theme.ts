import { createTheme } from "@mui/material/styles"
import type { ThemeMode } from '@/app/appReducer.ts'

export const darkTheme = 'dark' as const
export const lightTheme = 'light' as const

const lightPalette = {
  mode: lightTheme,
  primary: { main: "#fff", light: "#42a5f5", dark: "#f3f4f6" },
  text: { primary: "#111827", secondary: "#111827", info: "#007bff" },
  background: { default: "#fff", paper: "#e5e7eb" },
  divider: "#e5e7eb",
}

const darkPalette = {
  mode: darkTheme,
  primary: { main: "#141c2c", light: "#141c2c", dark: "#0f172a" },
  text: { primary: "#fff", secondary: "#f8fafc", info: "#007bff"},
  background: { default: "#141c2c", paper: "#1f2b40" },
  divider: "#1f2b40",
}



export const getTheme = (themeMode: ThemeMode) =>
  createTheme({
    palette: themeMode === lightTheme ? lightPalette : darkPalette,
  })
