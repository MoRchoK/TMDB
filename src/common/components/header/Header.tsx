import s from './header.module.css'
import { NavigateItem } from '@/common/components/header/navigateItem'
import { LogoTMDBHeader } from '@/common/components/header/logoTMDBHeader'
import { ThemeLogo } from '@/common/components/header/themeLogo'
import type { FC } from 'react'
import { Box } from '@mui/material'
import { getTheme } from '@/common/theme/theme.ts'
import { useAppSelector } from '@/common/utils/hooks/useAppSelector.ts'
import { selectThemeMode } from '@/app/appReducer.ts'


export const Header: FC = () => {
  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)

  return (
    <Box className={s.header} sx={{
      backgroundColor: theme.palette.background.accent,
      color: theme.palette.text.primary
    }}>
      <div className={s.headerContainer}>
        <LogoTMDBHeader />
        <NavigateItem />
        <ThemeLogo />
      </div>
    </Box>
  )
}


