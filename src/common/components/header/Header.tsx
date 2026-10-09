import s from './header.module.css'
import { NavigateItem } from '@/common/components/header/navigateItem'
import { LogoTMDBHeader } from '@/common/components/header/logoTMDBHeader'
import { ThemeLogo } from '@/common/components/header/themeLogo'


export const Header: React.FC = () => {

  return (
    <div className={s.header}>
      <div className={s.headerContainer}>
        <LogoTMDBHeader />
        <NavigateItem />
        <ThemeLogo />
      </div>
    </div>
  )
}


