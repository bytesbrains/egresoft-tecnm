import TextField from '@mui/material/TextField'

export default function InfoTextField(props) {
  return (
    <TextField
      sx={{
        fontSize: {
          xs: '14px',
          sm: '16px',
          md: '18px'
        },
        minWidth: '200px',
        '& .MuiInputBase-input.Mui-disabled': {
          WebkitTextFillColor: '#2e2e2e'
        }
      }}
      variant='standard'
      disabled
      {...props}
    />
  )
}
