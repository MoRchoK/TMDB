import s from './categoryPage.module.css'
import { type FC } from 'react'
import { CategoryTabs } from './categoryTabs'
import { Outlet } from 'react-router'
import { useChangePages } from '@/common/hooks/useChangePages.ts'



export const CategoryPage: FC = () => {
  const [page, onChangePage] = useChangePages()

  const onTabsHandler = () =>{
    onChangePage(1)
  }


  return (
    <div className={s.categoryPageContainer}>
      <CategoryTabs onClick={onTabsHandler}/>
      <Outlet context={{page, onChangePage}}/>
    </div>
  )
}

