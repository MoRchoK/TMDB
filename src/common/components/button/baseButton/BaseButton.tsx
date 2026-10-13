import { type FC } from 'react'
import s from './baseButton.module.css'
import type { ButtonType } from '@/common/components/button/baseButton/buttonType.tsx'
import { useNavigate } from 'react-router'



export const BaseButton: FC<ButtonType> = ({title, mode, redirectPath, type = 'button', onClick}) => {
  const redirect = useNavigate()


  const onClickHandler = () =>{
    if(redirectPath) redirect(redirectPath)
    if(!onClick) return
    onClick()
  }

  return (
    <button  onClick={onClickHandler} type={type} className={`${mode === 'base'? s.baseButton: s.accentButton}`}  >
      {title}
    </button>
  )
}