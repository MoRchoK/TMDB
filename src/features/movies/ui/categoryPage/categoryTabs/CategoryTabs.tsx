import { BaseButton } from '@/common/components/button/baseButton'

import { Link, useParams } from 'react-router'
import type { FC } from 'react'
import s from './categoryTabs.module.css'
import { categoriesMovies } from '@/common/constants'


export const CategoryTabs: FC = () => {
  const { category } = useParams()
  const urlParam = `/${category}`


  return (
    <nav>
      <ul className={s.tabMenu}>
        {categoriesMovies.map(({ title, path }, index) => <Link key={index} to={`.${path}`}>
          <BaseButton title={title} mode={urlParam === path ? 'accent' : 'base'} key={index} />
        </Link>)}
      </ul>
    </nav>
  )
}