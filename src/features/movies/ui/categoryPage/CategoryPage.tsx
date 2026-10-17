import s from './categoryPage.module.css'
import { type FC, useMemo, useState } from 'react'
import { CategoryTabs } from './categoryTabs'
import { Outlet, useParams } from 'react-router'
import type { CategoriesPath } from '@/common/constants'
import { useChangePages } from '@/common/hooks/useChangePages.ts'


export const CategoryPage: FC = () => {
  const { category } = useParams<{ category: CategoriesPath }>()
  const [page, onChangePage] = useChangePages()

  // категория сменилась → page = 1 ДО коммита, промежуточного запроса нет
  const [prevCategory, setPrevCategory] = useState(category)
  if (prevCategory !== category) {
    setPrevCategory(category)
    onChangePage(1)
  }

  const context = useMemo(() => ({ page, onChangePage }), [page, onChangePage])

  return (
    <div className={s.categoryPageContainer}>
      <CategoryTabs />
      <Outlet context={context} />
    </div>
  )
}

