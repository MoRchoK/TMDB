import { type FC } from 'react'
import s from './baseButton.module.css'
import type { ButtonType } from '@/common/components/button/baseButton/buttonType.tsx'
import { useNavigate } from 'react-router'
import { useAppSelector } from '@/common/utils/useAppSelector.ts'
import { selectThemeMode } from '@/app/appReducer.ts'
import { getTheme } from '@/common/theme/theme.ts'



export const BaseButton: FC<ButtonType> = ({title, accentBtn, redirectPath, type = 'button', onClick}) => {
  const redirect = useNavigate()
  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)

  const onClickHandler = () =>{
    if(redirectPath) redirect(redirectPath)
    if(!onClick) return
    onClick()
  }

  return (
    <button  onClick={onClickHandler} type={type} className={`${s.baseButton} ${accentBtn && s.accentButton}`}  style={{
      borderColor: theme.palette.border.default,
    }} >
      {title}
    </button>
  )
}