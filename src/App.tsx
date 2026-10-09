import s from './app/appStyle/appStyle.module.css'
import { Header } from '@/common/components/header'

export const App = () => {

  return (
    <>
      <Header />
      <div className={s.appContainer}>

      </div>
    </>


  )
}

