import { type PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from '@/common/utils/createAppSlice.ts'
import type { darkTheme, lightTheme } from '@/common/theme/theme.ts'

const initialState: {
  themeMode: ThemeMode
  error: string | null
  isLoggedIn: boolean
  login: string | null
  captcha: boolean
} = {
  themeMode: 'light' as ThemeMode,
  error: null,
  captcha: false,
  isLoggedIn: false,
  login: null,
}



export const appSlice = createAppSlice({
  name: 'app',
  initialState,
  selectors: {
    selectThemeMode: (state): ThemeMode => state.themeMode,
    selectAppError: (state): typeof initialState.error => state.error,
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer((state, action: PayloadAction<{ themeMode: ThemeMode }>) => {
      state.themeMode = action.payload.themeMode
    }),

  }),

})

export const appReducer = appSlice.reducer
export const { changeThemeModeAC } =
  appSlice.actions
export const { selectThemeMode, selectAppError } = appSlice.selectors




export type ThemeMode = typeof darkTheme | typeof lightTheme
