import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Button from '@mui/material/Button'

export default function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        mt: '30px',
        width: '100%'
      }}
    >
      <Typography component='h1' variant='h5' textAlign='center'>
        Ingresa a tu cuenta como:
      </Typography>
      <Link href='/login/admin'>
        <Button variant='contained' fullWidth>
          ADMINISTRATIVO
        </Button>
      </Link>
      <Link href='/login/graduate'>
        <Button variant='contained' fullWidth sx={{ bgcolor: '#0064BF' }}>
          EGRESADO
        </Button>
      </Link>
    </Box>
  )
}
