
export type RatingRangeType = {
  minValue: number,
  maxValue: number,
  limit: number
  onChange: ({ maxValue, minValue }: {maxValue: number, minValue: number}) => void,
}