import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

export const metadata = {
  title: 'Iniciar sesion',
  description: 'SignIn'
}

export default function RootLayout({ children }) {
  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid
        item
        xs={false}
        sm={false}
        md={6}
        sx={{
          backgroundImage: 'url(/images/TecNM.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'primary.main',
          backgroundSize: 'contain',
          backgroundPosition: 'left'
        }}
      />
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: {
            xs: 'start',
            md: 'center'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: {
              xs: '90%',
              md: '70%'
            }
          }}
        >
          <Box
            sx={{
              display: {
                xs: 'initial',
                md: 'none'
              }
            }}
          >
            <Image
              src='/images/tecnmMobile.svg'
              alt='Tecnologico nacional de mexico'
              width={150}
              height={150}
            />
          </Box>

          <Typography
            component='h2'
            sx={{
              mb: '30px',
              textAlign: 'center',
              typography: {
                xs: 'h4',
                md: 'h2'
              }
            }}
          >
            Egresoft TecNM
          </Typography>

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          {children}
        </Box>
      </Grid>
    </Grid>
  )
}
