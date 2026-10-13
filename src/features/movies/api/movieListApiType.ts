export const SortMovie = {
  originalTitleAsc:    'original_title.asc',
  originalTitleDesc:   'original_title.desc',
  popularityAsc:       'popularity.asc',
  popularityDesc:      'popularity.desc',
  revenueAsc:          'revenue.asc',
  revenueDesc:         'revenue.desc',
  primaryReleaseDateAsc:  'primary_release_date.asc',
  primaryReleaseDateDesc: 'primary_release_date.desc',
  titleAsc:            'title.asc',
  titleDesc:           'title.desc',
  voteAverageAsc:      'vote_average.asc',
  voteAverageDesc:     'vote_average.desc',
  voteCountAsc:        'vote_count.asc',
  voteCountDesc:       'vote_count.desc',
} as const

export type SortMovieType = (typeof SortMovie)[keyof typeof SortMovie]


export type sortMoviesParamsType = {
  title: string,
  sortTag: SortMovieType
}