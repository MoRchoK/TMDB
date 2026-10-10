import type { FC } from 'react'
import s from './baseButton.module.css'
import type { ButtonType } from '@/common/components/button/baseButton/buttonType.tsx'


export const BaseButton: FC<ButtonType> = ({title, mode}) => {
  return (
    <button className={`${mode === 'base'? s.baseButton: s.accentButton} `}  >
      {title}
    </button>
  )
}