import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Typography from '@mui/material/Typography'

export default function SignUp() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        mt: '30px',
        width: 'fit-content',
        bgcolor: 'whitesmoke',
        p: 4,
        borderRadius: '10px'
      }}
    >
      <Typography component='h1' variant='h5' textAlign='center'>
        Ingresa a tu cuenta como:
      </Typography>
      <Link href='/signup/admin'>
        <Button variant='contained' fullWidth>
          Administrativo
        </Button>
      </Link>
      <Link href='/signup/graduate'>
        <Button variant='contained' fullWidth sx={{ bgcolor: '#0064BF' }}>
          Egresado
        </Button>
      </Link>
      <Link href='/signup/employer'>
        <Button variant='contained' fullWidth sx={{ bgcolor: '#5160BB' }}>
          Empleador
        </Button>
      </Link>
    </Box>
  )
}
