import { Header } from '@/common/components/header'
import { Footer } from '@/common/components/footer/Footer.tsx'
import s from './App.module.css'
import { Outlet } from 'react-router'
import { Box, LinearProgress } from '@mui/material'
import { useAppSelector } from '@/common/utils/hooks/useAppSelector.ts'
import { selectThemeMode } from '@/app/appReducer.ts'
import { getTheme } from '@/common/theme/theme.ts'
import { ToastContainer } from 'react-toastify'
import { useGlobalLoading } from '@/common/utils/hooks/useGlobalLoading.ts'
import { useEffect } from 'react'


export const App = () => {
  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)
  const isGlobalLoading  = useGlobalLoading()

  useEffect(() => {
    document.documentElement.dataset.theme = themeMode
  }, [themeMode])


  return (
    <div>
      <Header />
      {isGlobalLoading && <LinearProgress
        sx={{
          position: 'absolute',
          zIndex: 3000,
          width: '100%',
        }}
        aria-label="Loading…"
      />}

      <Box className={s.appContainer} sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
      }}>
        <Outlet />
      </Box>
      <ToastContainer />
      <Footer />
    </div>
  )
}

