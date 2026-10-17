// src/pages/MovieDetailsPage/MovieDetailsPage.tsx
import { type FC } from 'react'
import { Box, Skeleton } from '@mui/material'
import s from '@/features/movies/ui/movieDetails/movieDetails.module.css'
import { MovieCardSkeleton } from '@/common/components/skeleton/MovieMainPageSkeleton.tsx'


const CAST_PLACEHOLDERS = 6;
const GENRE_PLACEHOLDERS = [60, 72, 64];

export const MovieDetailsPageSkeleton: FC = () => (
  <div className={s.pageContainer} aria-busy="true" aria-live="polite">
    <section className={s.heroSection}>
      <Skeleton
        variant="rectangular"
        className={s.poster}
        sx={{
          borderRadius: '16px',
          width: 200,
          height: 300
      }}
      />
      <div className={s.infoColumn}>
          <Skeleton variant="text" sx={{ fontSize: '2.5rem', width: '70%', maxWidth: 560 }} />
        <Box >
          <Skeleton variant="text" sx={{ width: '30%' }} height={40} />
          <Skeleton variant="text"   height={40}/>
          <Skeleton variant="text" sx={{ width: '60%' }} height={40} />
        </Box>
          <Skeleton variant="text" width={80} height={40} sx={{ fontSize: '1rem' }} />
          <div className={s.genresList}>
            {GENRE_PLACEHOLDERS.map((w, i) => (
              <Skeleton key={i} variant="rounded" width={w} height={35} />
            ))}
          </div>
        </div>
    </section>


    {/* Cast */}
    <section className={s.section}>
      <Skeleton variant="text" width={70} height={50} sx={{ fontSize: '1.75rem' }} />
      <div className={s.castGrid}>
        {Array.from({ length: CAST_PLACEHOLDERS }).map((_, i) => (
          <div key={i} className={s.castItem}>
            <Skeleton variant="circular" width={180} height={180} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="80%" sx={{ fontSize: '0.95rem' }} />
            <Skeleton variant="text" width="60%" sx={{ fontSize: '0.8rem' }} />
          </div>
        ))}
      </div>
    </section>

    {/* Similar movies */}
    <section className={s.section}>
      <Skeleton variant="text"  width={70} height={50} sx={{ fontSize: '1.75rem' }} />
      <div >
       <MovieCardSkeleton heightCard={'270px'} countCard={6}/>
      </div>
    </section>
  </div>
);
