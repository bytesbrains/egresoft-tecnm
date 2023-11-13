import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ADMIN_DASHBOARD = '/admin/dashboard/'

export default function Admin() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#f2ffff'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1em',
          backgroundColor: '#fff',
          padding: '2em',
          borderRadius: '10px',
          boxShadow: '1px 2px 3px #b8b8b8'
        }}
      >
        <Typography component='h1' variant='h4'>
          Bienvenido Jefe de Carrera
        </Typography>
        <Link
          style={{
            backgroundColor: '#26ab28',
            color: '#fff',
            textDecoration: 'none',
            padding: '0.5em 1em',
            borderRadius: '5px',
            boxShadow: '1px 2px 7px #002e01',
            fontWeight: 600,
            fontSize: '18px'
          }}
          href={ADMIN_DASHBOARD}
        >
          Comenzar
        </Link>
      </Box>
    </Box>
  )
}
