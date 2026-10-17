import type React from 'react';
import s from './titleMovieList.module.css'
import { useAppSelector } from '@/common/utils/hooks/useAppSelector.ts'
import { selectThemeMode } from '@/app/appReducer.ts'
import { getTheme } from '@/common/theme/theme.ts'



export const TitleMovieList: React.FC<{ title: string }> = ({ title }) => {
  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)
  return <span className={s.cardTitle} style={{
    color: theme.palette.text.primary
  }}>{title}</span>;
};