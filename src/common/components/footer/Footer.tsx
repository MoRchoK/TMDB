import s from './footer.module.css'
import { useAppSelector } from '@/common/utils/hooks/useAppSelector.ts'
import { selectThemeMode } from '@/app/appReducer.ts'
import { getTheme } from '@/common/theme/theme.ts'
import { Box } from "@mui/material"


export const Footer = () => {
  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)
  return (
    <Box className={s.footerWrapper} sx={{
      backgroundColor: theme.palette.primary.dark,
      borderColor: theme.palette.divider,
    }}>
      © 2026 Kinopoisk Demo · Data courtesy of TMDB.
    </Box>


  )
}