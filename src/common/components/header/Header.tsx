import { NavLink } from 'react-router'
import s from './header.module.css'

import { Path } from '@/common/constants'

export const Header: React.FC = () => {


  return (
    <div className={s.header}>
      <div className={s.headerContainer}>

        <NavLink to={Path.Main} className={s.logoWrapper}>
          <svg>
            <use href="/iconsSprites.svg#TMDMLogo" />
          </svg>
        </NavLink>

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


        <div className={s.themeLogoContainer}>
          <svg >
            <use href="/iconsSprites.svg#moonStars" />
          </svg>
        </div>


      </div>
    </div>
  )
}


