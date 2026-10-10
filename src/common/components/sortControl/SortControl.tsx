import { type ChangeEvent, type FC, useState } from 'react'
import s from './sortControl.module.css'
import { FormControl, MenuItem, Select } from '@mui/material'


export const SortControl: FC = () => {

  const [rating, setRating] = useState('')

  const handleChange = (event: ChangeEvent<Omit<HTMLInputElement, 'value'> & { value: string; }, Element> | (Event & {
    target: { value: string; name: string; };
  })) => {
    setRating(event.target.value)
  }


  return (
    <div className={s.sortWrapper}>
      <span>Sort by</span>
      <FormControl variant="outlined" sx={{ width: '100%', maxWidth: 200, borderColor: 'red' }}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={rating}
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

          <MenuItem sx={{ height: 20 }} value="">None</MenuItem>
          <MenuItem sx={{ height: 20 }} value={10}>Ten</MenuItem>
          <MenuItem sx={{ height: 20 }} value={20}>Twenty</MenuItem>
          <MenuItem sx={{ height: 20 }} value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}