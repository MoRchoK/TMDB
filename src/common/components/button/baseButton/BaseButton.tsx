import type { FC } from 'react'
import s from './baseButton.module.css'

type BaseButtonType = {
  title: string,
}




export const BaseButton: FC<BaseButtonType> = ({title}) => {

  return (
    <button className={s.baseButton}>
      {title}
    </button>
  )
}