import s from './logoTMDBHeader.module.css'
import { NavLink } from 'react-router'
import { Path } from '@/common/constants'


export const LogoTMDBHeader: React.FC = () => {

  return (
    <NavLink to={Path.Main} className={s.logoWrapper}>
      <svg>
        <use href={`${import.meta.env.BASE_URL}iconsSprites.svg#TMDMLogo`} />
      </svg>
    </NavLink>
  )
}