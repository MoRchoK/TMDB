import s from './navigateItem.module.css'
import { NavLink } from 'react-router'
import { pages } from '@/common/constants'


export const NavigateItem = () => {
  return (
    <nav className={s.navBar}>
        {pages.map((page, index) => (
          <div className={s.linkWrapper} key={index}>
            <NavLink to={page.path} end className={({ isActive }) => isActive ? s.activeLink : ''}>
              {page.title}</NavLink>
          </div>
        ))}
    </nav>
  )

}