import { BaseButton } from '@/common/components/button/baseButton'
import { Link, useParams } from 'react-router'
import type { FC } from 'react'
import s from './categoryTabs.module.css'
import { categoriesMovies } from '@/common/constants'
import type { CategoryTabsType } from '@/features/movies/ui/categoryPage/categoryTabs/categoryTabs.ts'



export const CategoryTabs: FC<CategoryTabsType> = ({onClick}) => {
  const { category } = useParams()
  const urlParam = `/${category}`


  return (
    <nav>
      <ul className={s.tabMenu}>
        {categoriesMovies.map(({ title, path }, index) => <Link key={index} to={`.${path}`}>
          <BaseButton onClick={onClick} title={title} accentBtn={urlParam === path} key={index} />
        </Link>)}
      </ul>
    </nav>
  )
}