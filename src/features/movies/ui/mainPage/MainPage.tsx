import { MovieCard } from '@/features/movies/ui/movieCard/MovieCard.tsx'
import { MovieBanner } from '@/features/movies/ui/mainPage/movieBanner'
import s from './mainPage.module.css'
import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from '@/features/movies/api/movieListsApi.ts'
import { useBannerImage } from '@/common/hooks/useBannerImage.ts'
import { getUrlBannerImage } from '@/common/utils/getUrlBannerImage.ts'
import { MovieBannerSkeleton, MoviePageSkeleton } from '@/common/components/skeleton/MovieBannerSkeleton.tsx'
import type { baseResultsMovieResponseType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'
import { memo, useCallback, useMemo } from 'react'
import { categoriesPath, Path } from '@/common/constants'



export const MainPage = memo(() => {
  const { data: popularMovies, isLoading: isPopularMovies } = useGetPopularMoviesQuery({})
  const { data: topRatedMovies, isLoading: isTopRatedMovies } = useGetTopRatedMoviesQuery({})
  const { data: upcomingMovies, isLoading: isUpcomingMovies } = useGetUpcomingMoviesQuery({})
  const { data: nowPlayingMovies, isLoading: isNowPlayingMovies } = useGetNowPlayingMoviesQuery({})
  const bannerImage = useBannerImage(popularMovies?.results || [])


  const filterMovies = useCallback((value: baseResultsMovieResponseType[]) => {
    return value.slice(0, 5)
  }, [])

  const filterPopularMovies = useMemo(() => filterMovies(popularMovies?.results || []), [popularMovies, filterMovies])
  const filterTopRatedMovies = useMemo(() => filterMovies(topRatedMovies?.results || []), [topRatedMovies, filterMovies])
  const filterUpcomingMovies = useMemo(() => filterMovies(upcomingMovies?.results || []), [upcomingMovies, filterMovies])
  const filterNowPlayingMovies = useMemo(() => filterMovies(nowPlayingMovies?.results || []), [nowPlayingMovies, filterMovies])

  const resultMovieData = useMemo(() => [
    { categoryTitle: 'Popular Movies', movies: filterPopularMovies, path: categoriesPath.PopularMovies  },
    { categoryTitle: 'Top Rated Movies', movies: filterTopRatedMovies , path: categoriesPath.TopRatedMovies},
    { categoryTitle: 'Upcoming Movies', movies: filterUpcomingMovies, path: categoriesPath.UpcomingMovies },
    { categoryTitle: 'Now Playing Movies', movies: filterNowPlayingMovies , path: categoriesPath.NowPlayingMovies},
  ], [filterPopularMovies, filterTopRatedMovies, filterUpcomingMovies, filterNowPlayingMovies])


  const isLoadingCards = useMemo(()=>(isPopularMovies || isTopRatedMovies || isUpcomingMovies || isNowPlayingMovies), [isPopularMovies , isTopRatedMovies, isUpcomingMovies, isNowPlayingMovies])


  if (isLoadingCards) return <MoviePageSkeleton />
  return (
    <section className={s.mainPageContainer}>
      {!bannerImage.length ? <MovieBannerSkeleton /> :
        <>
          <MovieBanner urlImage={getUrlBannerImage(bannerImage)} />
          <div className={s.mainContentWrapper}>
            {resultMovieData.map(({ movies, categoryTitle, path }, index) => (
              <MovieCard moviesData={movies} categoryTitle={categoryTitle} key={index} redirectPath={`${Path.Movies}${path}`} />
            ))}
          </div>
        </>
      }
    </section>
  )
})