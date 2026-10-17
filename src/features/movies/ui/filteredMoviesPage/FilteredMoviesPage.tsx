import { type FC, useEffect, useState } from 'react'
import s from './filteredMoviesPage.module.css'
import { useGetDiscoverMoviesQuery, useGetGenreMoviesQuery } from '@/features/movies/api/movieListsApi.ts'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { useChangePages } from '@/common/hooks/useChangePages.ts'
import { SortMovie, type SortMovieType } from '@/features/movies/api'
import { FilteredMoviesSkeleton } from '@/common/components/skeleton/FilteredMoviesSkeleton.tsx'
import { useDebounceValue } from '@/common/hooks/useDebounceValue.ts'
import { FiltersPanel } from '@/features/movies/ui/filteredMoviesPage/filtersPanel'
import { getCategoryMoviesData } from '@/common/utils/getCategoryMoviesData.ts'


export const FilteredMoviesPage: FC = () => {
  const [page, onChangePage] = useChangePages()
  const [activeGenresId, setActiveGenresId] = useState<number[]>([])
  const [voteAverage, setVoteAverage] = useState<[number, number]>([0, 10])
  const voteAverageDebounce = useDebounceValue<number[]>([voteAverage[0], voteAverage[1]], 200)
  const [sortBy, setSortBy] = useState<SortMovieType>(SortMovie.popularityDesc)
  const { data: discoverMovies, isLoading: isLoadingDiscoverMovies } = useGetDiscoverMoviesQuery({
    page,
    sort_by: sortBy,
    'vote_average.gte': voteAverageDebounce[0],
    'vote_average.lte': voteAverageDebounce[1],
    with_genres: activeGenresId.join(),
  })
  const { data: genreMovies, isLoading: isLoadingGenreMovies } = useGetGenreMoviesQuery({})
  const resultDiscoverMovies = getCategoryMoviesData(discoverMovies?.results)

    useEffect(() => {
      onChangePage(1)
    }, [sortBy, onChangePage, voteAverage, activeGenresId])

  const formTagsHandler = (id: number) => {
    if (activeGenresId.includes(id)) {
      setActiveGenresId(state => state.filter((genreId) => id !== genreId))
    } else {
      setActiveGenresId(state => [...state, id])
    }
  }
  const resetFormHandler = () => {
    setVoteAverage([0, 10])
    setSortBy(SortMovie.popularityDesc)
    setActiveGenresId([])
  }


  if ( isLoadingDiscoverMovies || isLoadingGenreMovies) return <FilteredMoviesSkeleton />
  if (!discoverMovies?.results || !genreMovies?.genres)  return <span>Movies not found</span>
  const ratingRangeHandler = ({ maxValue, minValue }: { maxValue: number, minValue: number }) => {
    setVoteAverage([minValue, maxValue])
  }


  return (
    <div className={s.FilteredMoviesPageContainer}>
      <FiltersPanel ratingRangeHandler={ratingRangeHandler}
                    onChangeSort={setSortBy}
                    genres={genreMovies.genres}
                    minValueRating={voteAverage[0]}
                    maxValueRating={voteAverage[1]}
                    sortValue={sortBy}
                    activeGenresId={activeGenresId}
                    formTagsHandler={formTagsHandler}
                    resetFormHandler={resetFormHandler} />
      <div className={s.contentWrapper}>
        <CategoryContent moviesData={resultDiscoverMovies}
                         page={discoverMovies.page}
                         totalPages={discoverMovies.total_pages}
                         onChangePage={onChangePage} />
      </div>
    </div>
  )
}