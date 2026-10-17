import s from './themeLogo.module.css'
import type { FC } from 'react'
import { useAppDispatch } from '@/common/utils/useAppDispatch.ts'
import { changeThemeModeAC,  selectThemeMode } from '@/app/appReducer.ts'
import { useAppSelector } from '@/common/utils/useAppSelector.ts'
import { darkTheme, lightTheme } from '@/common/theme/theme.ts'


export const ThemeLogo: FC = () => {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector(selectThemeMode)

  const onThemeHandler = () => {
    dispatch(changeThemeModeAC({ themeMode: themeMode === lightTheme ? darkTheme : lightTheme }))
  }


  return (
    <div className={s.themeLogoContainer} onClick={onThemeHandler}>
       <svg>
        <use href={`/iconsSprites.svg#${themeMode === lightTheme?'moonStars' : 'sun'}`} />
      </svg>

    </div>
  )
}
