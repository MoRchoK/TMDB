import { type ChangeEvent, type FC } from 'react'
import s from './sortControl.module.css'
import { FormControl, MenuItem, Select } from '@mui/material'
import type { SortControlType } from '@/common/components/sortControl/sortControlType.ts'
import type { SortMovieType } from '@/features/movies/api'


export const SortControl: FC<SortControlType > = ({optionsData , value , onChange}) => {


  const handleChange = (event: ChangeEvent<Omit<HTMLInputElement, string> & { value: SortMovieType; }, Element> | (Event & {
    target: { value: SortMovieType; name: string; };
  })) => {
    onChange(event.target.value)
  }


  return (
    <div className={s.sortWrapper}>
      <span>Sort by</span>
      <FormControl variant="outlined" sx={{ width: '100%', maxWidth: 200, borderColor: 'red' }}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
          sx={{
            height: 38,
            '& .MuiOutlinedInput-notchedOutline': {
              border: ' 1px solid #d1d5db'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: ' 1px solid #2563eb',
              boxShadow: '0 0 2px #2563eb'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: ' 1px solid #2563eb',
              boxShadow: '0 0 2px #2563eb'
            },
          }}
        >
          {optionsData.map((item, index)=><MenuItem sx={{ height: 20 }} key={index} value={item.sortTag}>{item.title}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  )
}