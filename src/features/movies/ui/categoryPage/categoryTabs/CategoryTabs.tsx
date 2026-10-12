import { BaseButton } from '@/common/components/button/baseButton'
import { categoriesMovies } from '@/common/constants'
import { Link, useLocation } from 'react-router'
import type { FC } from 'react'
import s from './categoryTabs.module.css'


export const CategoryTabs: FC = () => {
  const { pathname } = useLocation()
  const category = '/' + pathname.split('/').filter(Boolean).at(-1)

  return (
    <nav>
      <ul className={s.tabMenu }>
        {categoriesMovies.map(({ title, path }, index) => <Link to={`./${path}`}>
          <BaseButton title={title} mode={category === path?'accent': "base"} key={index} />
        </Link>)}
      </ul>
    </nav>
  )
}