import { Header } from '@/common/components/header'
import { Footer } from '@/common/components/footer/Footer.tsx'
import s from './App.module.css'
import { Outlet } from 'react-router'

export const App = () => {


  return (
    <>
      <Header />
      <div className={s.appContainer}>
        <Outlet/>
      </div>
      <Footer />
    </>
  )
}

