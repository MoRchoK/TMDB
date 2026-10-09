import s from './navigateItem.module.css'
import { NavLink } from 'react-router'
import { Path } from '@/common/constants'



export const NavigateItem = () => {
  return (
    <nav className={s.navBar}>
      <div className={s.linkWrapper}>
        <NavLink to={Path.Main} end className={({ isActive }) => isActive ? s.activeLink : ''}>
          Main
        </NavLink>
      </div>
      <div className={s.linkWrapper}>
        <NavLink to={Path.Movies} end>
          Category Movies
        </NavLink></div>
      <div className={s.linkWrapper}>
        <NavLink to={Path.FilteredMovies} end>Filtered Movies</NavLink>
      </div>
      <div className={s.linkWrapper}>
        <NavLink to={Path.Search} end>Search</NavLink>
      </div>
      <div className={s.linkWrapper}>
        <NavLink to={Path.Favorites} end>Favorites</NavLink>
      </div>
    </nav>
  )

}