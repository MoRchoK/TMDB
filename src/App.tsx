import { Header } from '@/common/components/header'
import { Footer } from '@/common/components/footer/Footer.tsx'
import { Outlet } from 'react-router'

export const App = () => {


  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

