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
    watch,
  } = useForm<Inputs>({
    defaultValues: { search: defaultSearchValue ?? '' },
    mode: 'onChange', // валидация при вводе → isDirty/isValid живые
  })

  const searchValue = watch('search') ?? ''
  const isSearchEmpty = searchValue.trim().length === 0

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const query = data.search.trim()
    if (!query) return
    navigate(`${Path.Search}/${encodeURIComponent(query)}`)
  }

  return (
    <div className={s.searchWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          {...register('search', {
            required: true,
            validate: v => v.trim().length > 0, // пробелы не считаются
          })}

          resetValue={resetSearchHandler}
          defaultValue={defaultSearchValue}
        />

        <BaseButton
          title="Search"
          disabled={isSearchEmpty}   // ✅ кнопка мертва, пока пусто
          accentBtn
          type="submit"
        />
      </form>
    </div>
  )
}