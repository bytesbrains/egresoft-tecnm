import { Typography, Divider } from '@mui/material'

export default function ProfileSectionTitle({ children }) {
  return (
    <>
      <Typography component='h2' variant='h6'>
        {children}
      </Typography>
      <Divider sx={{ mb: '30px' }} />
    </>
  )
}
