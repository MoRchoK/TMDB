import { Slider } from '@mui/material'
import s from './ratingRange.module.css'
import { type FC, type SetStateAction, useState } from 'react'


export const RatingRange: FC = () => {

  const [value, setValue] = useState([0, 10])

  const sliderHandleChange = (_event: Event, newValue: SetStateAction<number[]>) => {
    setValue(newValue)
  }

  return (
    <div>
      <div className={s.ratingLabel}>
        <span>Rating</span>
        <span>{`${value[0]} - ${value[1]}`}</span>
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
        max={10}
        step={0.1}
        value={value}
        onChange={sliderHandleChange}
      />
    </div>
  )
}