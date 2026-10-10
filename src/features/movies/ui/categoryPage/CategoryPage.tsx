import s from './categoryPage.module.css'
import { type FC } from 'react'
import { CategoryTabs } from './categoryTabs'
import { CategoryContent } from './categoryContent'
import { BasePagination } from '@/common/components/basePagination'


export const CategoryPage: FC = () => {
  return (
    <div className={s.categoryPageContainer}>
      <CategoryTabs />
      <CategoryContent />
      <div className={s.paginationWrapper}>
        <BasePagination />
      </div>
    </div>
  )
}

