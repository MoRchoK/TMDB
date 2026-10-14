import { MovieCardSkeleton } from '@/common/components/skeleton/MovieMainPageSkeleton.tsx'
import Skeleton from '@mui/material/Skeleton'
import s from '@/features/movies/ui/filteredMoviesPage/filteredMoviesPage.module.css'


export const FilteredMoviesSkeleton = () => {

  return (
    <div className={s.FilteredMoviesPageContainer}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          width: '250px',
          height: '530px',
          borderRadius: '12px',

        }}
      />
      <div className={s.contentWrapper}>
        {Array(3).fill(null).map((_, i) => (
          <MovieCardSkeleton heightCard={'220px'} key={i}/>
        ))}
      </div>
    </div>
  )

}