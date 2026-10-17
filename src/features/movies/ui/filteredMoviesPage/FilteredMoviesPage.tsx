import { type FC, useCallback, useMemo, useState } from 'react'
import s from './filteredMoviesPage.module.css'
import { useGetDiscoverMoviesQuery, useGetGenreMoviesQuery } from '@/features/movies/api/movieListsApi.ts'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { SortMovie, type SortMovieType } from '@/features/movies/api'
import { FilteredMoviesSkeleton } from '@/common/components/skeleton/FilteredMoviesSkeleton.tsx'
import { useDebounceValue } from '@/common/hooks/useDebounceValue.ts'
import { FiltersPanel } from '@/features/movies/ui/filteredMoviesPage/filtersPanel'
import { getCategoryMoviesData } from '@/common/utils/getCategoryMoviesData.ts'

const INITIAL_QUERY = {
  page: 1,
  sortBy: SortMovie.popularityDesc as SortMovieType,
  genres: [] as number[],
  voteAverage: [0, 10] as [number, number],
}

export const FilteredMoviesPage: FC = () => {
  const [query, setQuery] = useState(INITIAL_QUERY)
  const debouncedVoteAverage = useDebounceValue<[number, number]>(query.voteAverage, 200)

  const setSortBy = useCallback((sortBy: SortMovieType) => {
    setQuery(q => (q.sortBy === sortBy ? q : { ...q, sortBy, page: 1 }))
  }, [])
  const setVoteAverage = useCallback((voteAverage: [number, number]) => {
    setQuery(q => ({ ...q, voteAverage, page: 1 }))
  }, [])
  // пагинация не трогает фильтры
  const onChangePage = useCallback((page: number) => {
    setQuery(q => (q.page === page ? q : { ...q, page }))
  }, [])
  const { data: discoverMovies, isLoading: isLoadingDiscoverMovies } = useGetDiscoverMoviesQuery({
    page: query.page,
    sort_by: query.sortBy,
    'vote_average.gte': debouncedVoteAverage[0],
    'vote_average.lte': debouncedVoteAverage[1],
    with_genres: query.genres.join(),
  })
  const genreArgs = useMemo(() => ({}), [])
  const { data: genreMovies, isLoading: isLoadingGenreMovies } = useGetGenreMoviesQuery(genreArgs)
  const resultDiscoverMovies = useMemo(
    () => getCategoryMoviesData(discoverMovies?.results),
    [discoverMovies?.results],
  )
  const formTagsHandler = useCallback((id: number) => {
    setQuery(q => {
      const has = q.genres.includes(id)
      return {
        ...q,
        genres: has ? q.genres.filter(g => g !== id) : [...q.genres, id],
        page: 1,
      }
    })
  }, [])
  const resetFormHandler = useCallback(() => {
    setQuery({ ...INITIAL_QUERY })
  }, [])
  const ratingRangeHandler = useCallback(
    ({ maxValue, minValue }: { maxValue: number; minValue: number }) => {
      setVoteAverage([minValue, maxValue])
    },
    [setVoteAverage],
  )

  if (isLoadingDiscoverMovies || isLoadingGenreMovies) return <FilteredMoviesSkeleton />

  return (
    <div className={s.FilteredMoviesPageContainer}>
      {!discoverMovies?.results || !genreMovies?.genres ? (
        <span>Movies not found</span>
      ) : (
        <>
          <FiltersPanel
            ratingRangeHandler={ratingRangeHandler}
            onChangeSort={setSortBy}
            genres={genreMovies.genres}
            minValueRating={query.voteAverage[0]}
            maxValueRating={query.voteAverage[1]}
            sortValue={query.sortBy}
            activeGenresId={query.genres}
            formTagsHandler={formTagsHandler}
            resetFormHandler={resetFormHandler}
          />
          <div className={s.contentWrapper}>
            <CategoryContent
              moviesData={resultDiscoverMovies}
              page={discoverMovies.page}
              totalPages={discoverMovies.total_pages}
              onChangePage={onChangePage}
            />
          </div>
        </>
      )}
    </div>
  )
}