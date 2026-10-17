import s from './navigateItem.module.css'
import { NavLink } from 'react-router'
import { pages } from '@/common/constants'

import { useAppSelector } from '@/common/utils/useAppSelector.ts'
import { selectThemeMode } from '@/app/appReducer.ts'
import { darkTheme, lightTheme } from '@/common/theme/theme.ts'


export const NavigateItem = () => {
  const themeMode = useAppSelector(selectThemeMode)


  return (
    <nav className={s.navBar}>
      {pages.map((page, index) => (
        <div className={s.linkWrapper} key={index}>
          <NavLink to={page.path}
                   className={({ isActive }) => isActive ? `${s.activeLink} ${themeMode === lightTheme ? s.activeLinkLightBg : 
                     themeMode === darkTheme ? s.activeLinkDarkBg : ''}` : ''}>
            {page.title}</NavLink>
        </div>
      ))}
    </nav>
  )

}