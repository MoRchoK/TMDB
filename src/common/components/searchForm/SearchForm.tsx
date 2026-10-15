import s from '@/features/movies/ui/mainPage/movieBanner/movieBanner.module.css'
import type { FC } from 'react'
import { useNavigate } from 'react-router'
import { Path } from '@/common/constants'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { BaseButton } from '@/common/components/button/baseButton'
import { BaseInput } from '@/common/components/searchForm/baseInput'
import type { SearchFormType } from '@/common/components/searchForm/searchFormType.ts'


type Inputs = {
  search: string
}


export const SearchForm: FC<SearchFormType> = ({ defaultSearchValue, resetSearchHandler }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    navigate(`${Path.Search}/${data.search}`)
  }

  return (
    <div className={s.searchWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseInput  {...register('search')}
                    resetValue={resetSearchHandler}
                    defaultValue={defaultSearchValue} />

        <BaseButton title={'Search'}
                    accentBtn={true}
                    type={'submit'}
        />
      </form>
    </div>

  )
}