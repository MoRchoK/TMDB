import s from './categoryPage.module.css'
import { type FC } from 'react'
import { CategoryTabs } from './categoryTabs'
import { Outlet } from 'react-router'


export const CategoryPage: FC = () => {

  return (
    <div className={s.categoryPageContainer}>
      <CategoryTabs />
      <Outlet />
    </div>
  )
}

