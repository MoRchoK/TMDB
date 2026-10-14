import type { FC } from 'react'
import { BaseButton } from '@/common/components/button/baseButton'
import s from './formTags.module.css'
import type { FormTagsType } from './formTags.ts'


export const FormTags: FC<FormTagsType> = ({ genres, activeGenresId, formTagsHandler }) => {

  const bntHandler = (id: number) => {
    formTagsHandler(id)
  }

  return (
    <div className={s.tagsWrapper}>
      {genres.map((genre) => <BaseButton
        onClick={() => bntHandler(genre.id)}
        title={genre.name}
        accentBtn={activeGenresId.includes(genre.id)}
        key={genre.id} />)}
    </div>

  )
}