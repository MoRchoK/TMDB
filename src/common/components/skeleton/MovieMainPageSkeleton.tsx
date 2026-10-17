import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'
import s from '@/features/movies/ui/mainPage/movieBanner/movieBanner.module.css'
import type { FC } from 'react'

export const MovieBannerSkeleton: FC = () => {
  return (
    <section className={s.movieBanner}>
      <div className={s.infoWrapper}>
        {/* WELCOME */}
        <Skeleton
          variant="text"
          animation="wave"
          width={320}
          sx={{
            fontSize: '48px',
            lineHeight: 1.2,
            backgroundColor: 'rgba(255,255,255,0.15)',
          }}
        />

        {/* description */}
        <Skeleton
          variant="text"
          animation="wave"
          width={420}
          sx={{
            fontSize: '24px',
            height: '50px',
            backgroundColor: 'rgba(255,255,255,0.15)',
          }}
        />

        {/* SearchForm: input + кнопка */}
        <div className={s.searchWrapper}>
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{
              height: 40,
              width: 450,
              borderRadius: '8px',
              marginRight: '12px',
              backgroundColor: 'rgba(255,255,255,0.15)',
            }}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            width={110}
            sx={{
              height: 40,
              width: 70,
              borderRadius: '999px',
              backgroundColor: 'rgba(255,255,255,0.15)',
            }}
          />
        </div>
      </div>
    </section>
  )
}

type MovieCardSkeletonType = {
  countCard?: number
  heightCard?: string

}
export const MovieCardSkeleton: FC<MovieCardSkeletonType> = ({ countCard = 5, heightCard = '300px' }) => {

  return (
    <Box sx={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'flex', gap: '24px', '& .MuiSkeleton-root': { backgroundColor: 'var(--color-bg-skeleton)' } }}>
      {Array(countCard).fill(null).map((_value, index) => (
        <div style={{ width: '100%' }} key={index}>
          {/* постер */}
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              width: '100%',
              height: heightCard,
              borderRadius: '12px',
            }}
          />
          {/* название */}
          <Skeleton
            variant="text"
            animation="wave"
            height="40px"
            width="75%"
            sx={{ fontSize: '20px', mt: .5 }}
          />
        </div>
      ))}

    </Box>
  )
}


export const MovieMainPageSkeleton: FC = () => {
  return (
    <section className={s.mainPageContainer}>
      {/* баннер */}
      <MovieBannerSkeleton />
      {/* фильмы */}
      <Box sx={{
        pt: 5,
        pb: 5,
      }}>
        <MovieCardSkeleton />
      </Box>

    </section>
  )
}
