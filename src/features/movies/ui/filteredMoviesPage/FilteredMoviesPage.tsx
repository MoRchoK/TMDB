import { type FC, useEffect, useState } from 'react'
import s from './filteredMoviesPage.module.css'
import { RatingRange } from '@/common/components/RatingRange'
import { SortControl } from '@/common/components/sortControl'
import { FormTags } from '@/common/components/formTags'
import { useGetDiscoverMoviesQuery, useGetGenreMoviesQuery } from '@/features/movies/api/movieListsApi.ts'
import { CategoryContent } from '@/features/movies/ui/categoryPage/categoryContent'
import { useChangePages } from '@/common/hooks/useChangePages.ts'
import { sortMoviesParams } from '@/common/constants'
import { SortMovie, type SortMovieType } from '@/features/movies/api'
import { FilteredMoviesSkeleton } from '@/common/components/skeleton/FilteredMoviesSkeleton.tsx'
import { useDebounceValue } from '@/common/hooks/useDebounceValue.ts'
import { BaseButton } from '@/common/components/button/baseButton'


export const FilteredMoviesPage: FC = () => {

  const [page, onChangePage] = useChangePages()
  const [sortBy, setSortBy] = useState<SortMovieType>(SortMovie.popularityDesc)
  const [voteAverage, setVoteAverage] = useState<[number, number]>([0, 10])
  const [activeGenresId, setActiveGenresId] = useState<number[]>([])
  const voteAverageDebounce = useDebounceValue<number[]>([voteAverage[0], voteAverage[1]], 200)
  const { data: discoverMovies, isLoading: isLoadingDiscoverMovies } = useGetDiscoverMoviesQuery({
    page,
    sort_by: sortBy,
    'vote_average.gte': voteAverageDebounce[0],
    'vote_average.lte': voteAverageDebounce[1],
    with_genres: activeGenresId.join()
  })
  const { data: genreMovies, isLoading: isLoadingGenreMovies } = useGetGenreMoviesQuery({})



  useEffect(() => {
    onChangePage(1)
  }, [sortBy, onChangePage, voteAverage, activeGenresId])

  if (!discoverMovies?.results || !genreMovies?.genres || isLoadingDiscoverMovies || isLoadingGenreMovies) return <FilteredMoviesSkeleton />


  const ratingRangeHandler = ({ maxValue, minValue }: { maxValue: number, minValue: number }) => {
    setVoteAverage([minValue, maxValue])
  }
  const resetFormHandler = () => {
    setVoteAverage([0, 10])
    setSortBy(SortMovie.popularityDesc)
    setActiveGenresId([])
  }

  const formTagsHandler = (id: number) => {
    if (activeGenresId.includes(id)){
      setActiveGenresId(state => state.filter((genreId)=>id!== genreId))
    }else{
      setActiveGenresId(state => [...state, id])
    }
  }



  return (
    <div className={s.FilteredMoviesPageContainer}>
      <div className={s.filtersPanel}>
        <span className={s.panelTitle}> Filters / Sort</span>
        <SortControl
          onChange={setSortBy}
          value={sortBy}
          optionsData={sortMoviesParams} />
        <RatingRange onChange={ratingRangeHandler}
                     limit={10}
                     minValue={voteAverage[0]}
                     maxValue={voteAverage[1]} />
        <FormTags genres={genreMovies.genres}
                  formTagsHandler={formTagsHandler}
                  activeGenresId={activeGenresId} />

        <div className={s.resetBtnWrapper} >
          <BaseButton title={'Reset filters'}
                      onClick={resetFormHandler}
                      accentBtn={true} />
        </div>

      </div>
      <div className={s.contentWrapper}>
        <CategoryContent moviesData={discoverMovies}
                         onChangePage={onChangePage} />
      </div>
    </div>
  )
}