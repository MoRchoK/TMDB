import { Header } from '@/common/components/header'
import { Footer } from '@/common/components/footer/Footer.tsx'
import s from './App.module.css'
import { Outlet } from 'react-router'
import { Box } from '@mui/material'
import { useAppSelector } from '@/common/utils/useAppSelector.ts'
import { selectThemeMode } from '@/app/appReducer.ts'
import { getTheme } from '@/common/theme/theme.ts'

export const App = () => {
  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)

  return (
    <>
      <Header />
      <Box className={s.appContainer} sx={{
        backgroundColor: theme.palette.primary.main,
      }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}

