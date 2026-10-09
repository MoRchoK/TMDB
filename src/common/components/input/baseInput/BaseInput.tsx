import TextField from '@mui/material/TextField'
import type { FC } from 'react'


export const BaseInput: FC = () => {

  return (
    <TextField id="outlined-basic" variant="outlined"
               sx={{
                 maxWidth: '465px',
                 minWidth: '240px',
                 width: '100%',
                 '& .MuiInputBase-root': {
                   height: 40,
                   borderRadius: '999px',
                   border: '1px solid #d1d5db',
                   backgroundColor: 'white',
                 },
                 '& .MuiOutlinedInput-notchedOutline': {
                   border: 'none',
                 },
                 '& .MuiInputBase-root.Mui-focused': {
                   outlineOffset: '2px',
                   outline: '3px solid #2563eb',
                   border: '1px solid #d1d5db'
                 }

               }} placeholder={'Search for a movie'} />
  )
}