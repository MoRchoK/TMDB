import s from './themeLogo.module.css'
import type { FC } from 'react'
import { useAppDispatch } from '@/common/utils/hooks/useAppDispatch.ts'
import { changeThemeModeAC,  selectThemeMode } from '@/app/appReducer.ts'
import { useAppSelector } from '@/common/utils/hooks/useAppSelector.ts'
import { darkTheme, lightTheme } from '@/common/theme/theme.ts'


export const ThemeLogo: FC = () => {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector(selectThemeMode)

  const onThemeHandler = () => {
    dispatch(changeThemeModeAC({ themeMode: themeMode === lightTheme ? darkTheme : lightTheme }))
  }


  return (
    <div className={s.themeLogoContainer} onClick={onThemeHandler}>
      <svg className={`${s.themeIcon} ${themeMode === lightTheme ? s.visible : ''}`}>
        <use href={'/iconsSprites.svg#moonStars'} />
      </svg>
      <svg className={`${s.themeIcon} ${themeMode === darkTheme ? s.visible : ''}`}>
        <use href={'/iconsSprites.svg#sun'} />
      </svg>
    </div>
  )
}
