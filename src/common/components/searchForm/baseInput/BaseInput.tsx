import type { FC, InputEventHandler } from 'react'
import type { TextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField'


type BaseInput = TextFieldProps & {
  resetValue?: () => void
}

export const BaseInput: FC<BaseInput> = ({ defaultValue,resetValue, ...props }) => {


  const onInputHandler: InputEventHandler<HTMLDivElement> = (e) => {
    const value = (e.target as HTMLInputElement).value
    if (!resetValue || value.length) return null
    resetValue()
  }


  return (
    <TextField id="outlined-basic" variant="outlined"
               type={'search'}

               onInput={onInputHandler}
               defaultValue={defaultValue}
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
                   border: '1px solid #d1d5db',
                 },
               }} placeholder={'Search for a movie'}  {...props} />
  )
}