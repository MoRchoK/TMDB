import type React from 'react';
import s from './titleMovieList.module.css'



export const TitleMovieList: React.FC<{ title: string }> = ({ title }) => {
  return <span className={s.cardTitle}>{title}</span>;
};