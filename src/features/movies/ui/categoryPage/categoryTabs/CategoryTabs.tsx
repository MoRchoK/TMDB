import { BaseButton } from "@/common/components/button/baseButton"
import { categoriesMovies } from "@/common/constants"
import { Link } from "react-router"
import type { FC } from 'react'
import s from './categoryTabs.module.css'


export const CategoryTabs: FC = () => {

  return (
      <nav>
        <ul className={s.tabMenu}>
          {categoriesMovies.map(({title, path}, index) => <Link to={path}>
            <BaseButton title={title} mode={'accent'} key={index} />
          </Link>)}
        </ul>
      </nav>
  )
}