import { NavLink } from "react-router"
import s from './header.module.css'

import { Path } from '@/common/constants'

export const Header: React.FC = () => {

  return (
    <div className={s.header}>
      <div className={s.headerContainer}>
        <svg>
          <use href="/iconsSprites.svg#TMDMLogo" />
        </svg>


        <nav className={s.navBar}>
          <NavLink to={Path.Main} end>
            Main
          </NavLink>
          <NavLink to={Path.Movies} end>
            Category Movies
          </NavLink>
          <NavLink to={Path.FilteredMovies} end>Filtered Movies</NavLink>
          <NavLink to={Path.Search} end>Search </NavLink>
          <NavLink to={Path.Favorites} end>Favorites  </NavLink>
        </nav>



        <div className={s.themeLogoContainer}>
          <svg>
            <use href="/iconsSprites.svg#moonStars" />
          </svg>
        </div>


      </div>
    </div>
  )
}


