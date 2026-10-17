import { type PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from '@/common/utils/createAppSlice.ts'
import { darkTheme, lightTheme } from '@/common/theme/theme.ts'
import { localStorageKeys } from '@/common/constants'

const initialState: {
  themeMode: ThemeMode
} = {
  themeMode: localStorage.getItem(localStorageKeys.themeMode) === darkTheme ? darkTheme : lightTheme,
}



export const appSlice = createAppSlice({
  name: 'app',
  initialState,
  selectors: {
    selectThemeMode: (state): ThemeMode => state.themeMode,
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer((state, action: PayloadAction<{ themeMode: ThemeMode }>) => {
      state.themeMode = action.payload.themeMode
      localStorage.setItem(localStorageKeys.themeMode, `${action.payload.themeMode}`)
    }),
  }),

})

export const appReducer = appSlice.reducer
export const { changeThemeModeAC } =
  appSlice.actions
export const { selectThemeMode } = appSlice.selectors




export type ThemeMode = typeof darkTheme | typeof lightTheme
