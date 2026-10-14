import { MovieCard } from '@/features/movies/ui/movieCard/MovieCard.tsx'
import { MovieBanner } from '@/features/movies/ui/mainPage/movieBanner'
import s from './mainPage.module.css'
import { useBannerImage } from '@/common/hooks/useBannerImage.ts'
import { getUrlBannerImage } from '@/common/utils/getUrlBannerImage.ts'
import type { baseResultsMovieResponseType } from '@/common/schemas/movieListApiSchemas/movieListApiSchemas.ts'
import { memo, useCallback, useMemo } from 'react'
import { categoriesPath, Path } from '@/common/constants'
import { MovieBannerSkeleton, MovieMainPageSkeleton } from '@/common/components/skeleton/MovieMainPageSkeleton.tsx'
import { useGetCategoryMoviesQuery } from '@/features/movies/api/movieListsApi.ts'


export const MainPage = memo(() => {
  const { data: popularMovies, isLoading: isPopularMovies } =  useGetCategoryMoviesQuery({ category: categoriesPath.PopularMovies })
  const { data: topRatedMovies, isLoading: isTopRatedMovies } =  useGetCategoryMoviesQuery({ category: categoriesPath.TopRatedMovies })
  const { data: upcomingMovies, isLoading: isUpcomingMovies } =  useGetCategoryMoviesQuery({ category:categoriesPath.UpcomingMovies })
  const { data: nowPlayingMovies, isLoading: isNowPlayingMovies } =  useGetCategoryMoviesQuery({ category:categoriesPath.NowPlayingMovies})

  const bannerImage = useBannerImage(popularMovies?.results || [])


  const filterMovies = useCallback((value: baseResultsMovieResponseType[]) => value.slice(0, 6), [])

  const popularMoviesData    = useMemo(() => filterMovies(popularMovies?.results ?? []),   [popularMovies, filterMovies])
  const topRatedMoviesData   = useMemo(() => filterMovies(topRatedMovies?.results ?? []),  [topRatedMovies, filterMovies])
  const upcomingMoviesData   = useMemo(() => filterMovies(upcomingMovies?.results ?? []), [upcomingMovies, filterMovies])
  const nowPlayingMoviesData = useMemo(() => filterMovies(nowPlayingMovies?.results ?? []), [nowPlayingMovies, filterMovies])

  const resultMovieData = useMemo(() => [
    { categoryTitle: 'Popular Movies',     movies: popularMoviesData,    path: categoriesPath.PopularMovies },
    { categoryTitle: 'Top Rated Movies',   movies: topRatedMoviesData,   path: categoriesPath.TopRatedMovies },
    { categoryTitle: 'Upcoming Movies',    movies: upcomingMoviesData,   path: categoriesPath.UpcomingMovies },
    { categoryTitle: 'Now Playing Movies', movies: nowPlayingMoviesData, path: categoriesPath.NowPlayingMovies },
  ], [popularMoviesData, topRatedMoviesData, upcomingMoviesData, nowPlayingMoviesData])

  const isLoadingCards = isPopularMovies || isTopRatedMovies || isUpcomingMovies || isNowPlayingMovies  // useMemo не нужен

  if (isLoadingCards) return <MovieMainPageSkeleton />
  return (
    <section >
      {!bannerImage?.length ? <MovieBannerSkeleton /> :
        <>
          <MovieBanner urlImage={getUrlBannerImage(bannerImage)} />
          <div className={s.mainContentWrapper}>
            {resultMovieData.map(({ movies, categoryTitle, path }, index) => (
              <MovieCard countCard={6}
                         moviesData={movies}
                         categoryTitle={categoryTitle}
                         key={index}
                         redirectPath={`${Path.CategoryMovies}${path}`} />
            ))}
          </div>
        </>
      }
    </section>
  )
})