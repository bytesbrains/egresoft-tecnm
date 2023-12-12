import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const metadata = {
  title: 'Registrarse',
  description: 'Crear una cuenta de egresado'
}

export default function RootLayout({ children }) {
  return (
    <Box
      sx={{
        py: '20px',
        minHeight: '100vh',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
        background: ' rgb(50,50,50)',
        background:
          'radial-gradient(circle, rgba(50,50,50,1) 0%, rgba(21,21,21,1) 100%)'
      }}
    >
      <Typography
        component='h1'
        sx={{
          mb: '30px',
          fontSize: {
            xs: '35px',
            sm: '40px',
            md: '50px',
            lg: '60px',
            xl: '100px'
          },
          color: 'white',
          background:
            'linear-gradient(324deg, rgba(185,34,195,1) 0%, rgba(45,228,253,1) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Egresoft TecNM
      </Typography>
      {children}
    </Box>
  )
}
