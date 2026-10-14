import s from '@/features/movies/ui/mainPage/movieBanner/movieBanner.module.css'
import type { FC } from 'react'
import { useNavigate } from 'react-router'
import { Path } from '@/common/constants'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { BaseButton } from '@/common/components/button/baseButton'
import { BaseInput } from '@/common/components/searchForm/baseInput'


type Inputs = {
  search: string
}


export const SearchForm: FC = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    navigate({
      pathname: Path.Search,
      search: `?query=${data.search}`,
    })
  }

  return (
    <div className={s.searchWrapper}>
      <form onSubmit={handleSubmit(onSubmit) }>
        <BaseInput  {...register('search')} />
        <BaseButton title={'Search'} accentBtn={true} type={'submit'} />
      </form>
    </div>

  )
}