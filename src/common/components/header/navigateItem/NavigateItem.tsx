import s from './navigateItem.module.css'
import { NavLink, useLocation } from 'react-router'
import { pages } from '@/common/constants'

import { useAppSelector } from '@/common/utils/hooks/useAppSelector.ts'
import { selectThemeMode } from '@/app/appReducer.ts'
import { darkTheme, lightTheme } from '@/common/theme/theme.ts'


export const NavigateItem = () => {
  const themeMode = useAppSelector(selectThemeMode)
  const { pathname } = useLocation()
  const url = '/'+ pathname.split('/')[1]
  return (
    <nav className={s.navBar}>
      {pages.map((page, index) => (
        <div className={s.linkWrapper} key={index}>
          <NavLink to={page.path}
                   onClick={(e) => {
                     if (url === page.path) e.preventDefault()
                   }}
                   className={({ isActive }) => isActive ? `${s.activeLink} ${themeMode === lightTheme ? s.activeLinkLightBg :
                     themeMode === darkTheme ? s.activeLinkDarkBg : ''}` : ''}>
            {page.title}</NavLink>
        </div>
      ))}
    </nav>
  )

}