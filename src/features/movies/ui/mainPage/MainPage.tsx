import { MovieCard } from '@/features/movies/ui/movieCard/MovieCard.tsx'
import { MovieBanner } from '@/features/movies/ui/mainPage/movieBanner'
import s from './mainPage.module.css'


export const MainPage = () => {

  return (
    <>
      <MovieBanner />
      <div className={s.mainContentContainer}>
        <MovieCard />
        <MovieCard />
      </div>
    </>
  )
}