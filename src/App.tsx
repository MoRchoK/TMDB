import s from './app/appStyle/appStyle.module.css'
import { Header } from '@/common/components/header'
import { MovieBanner } from '@/features/movies/ui/movieBanner'

export const App = () => {

  return (
    <>
      <Header />
      <MovieBanner />
      <div className={s.appContainer}>

      </div>
    </>


  )
}

