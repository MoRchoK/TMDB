import type { FC } from 'react'
import { BaseButton } from '@/common/components/button/baseButton'
import s from './formTags.module.css'




export const FormTags: FC = () => {

  return (
    <>
      <div className={s.tagsWrapper}>
        <BaseButton title={'Action'} mode={'accent'} />
        <BaseButton title={'Crime'} mode={'base'} />
        <BaseButton title={'Documentary'} mode={'base'} />
        <BaseButton title={'Family'} mode={'accent'} />
      </div>
      <div className={s.resetBtnWrapper}>
        <BaseButton title={'Reset filters'} mode={'accent'} />
      </div>
    </>
  )
}