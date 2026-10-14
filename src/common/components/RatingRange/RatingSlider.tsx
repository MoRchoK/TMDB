import { Slider } from '@mui/material'
import s from './ratingRange.module.css'
import { type FC } from 'react'
import type { RatingRangeType } from '@/common/components/RatingRange/ratingRangeType.ts'


export const RatingRange: FC<RatingRangeType> = ({minValue, maxValue, onChange, limit }) => {
  const arrValue = [minValue, maxValue]

  const sliderHandleChange = (_event: Event, newValue:number[]) => {
    onChange({ minValue: newValue[0], maxValue: newValue[1] })
  }

  return (
    <div>
      <div className={s.ratingLabel}>
        <span>Rating</span>
        <span>{`${minValue} - ${maxValue}`}</span>
      </div>
      <Slider
        sx={{
          left: 5,
          maxWidth: '190px',
          '& .MuiSlider-thumb': {
            boxShadow: 'none',
            '&:hover, &.Mui-focusVisible, &.Mui-active': { boxShadow: 'none' },
          },
          '& .MuiSlider-track': { boxShadow: 'none' },
          '& .MuiSlider-rail':  { boxShadow: 'none' },
        }}
        disableSwap
        max={limit}
        step={0.1}
        value={arrValue}
        onChange={sliderHandleChange}
      />
    </div>
  )
}