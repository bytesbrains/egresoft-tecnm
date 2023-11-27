import Image from 'next/image'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

export default function Home() {
  return (
    <>
      <Box
        component='section'
        style={{
          display: 'flex',
          backgroundImage: 'url(/images/hero.svg)',
          backgroundSize: 'cover',
          height: '100vh',
          color: 'white',
          padding: '50px'
        }}
      >
        <Stack direction='column' gap='20px'>
          <Box
            width={{
              xs: '120px',
              md: '160px'
            }}
            height={{
              xs: '120px',
              md: '160px'
            }}
          >
            <img width='100%' src='/images/icon.svg' alt='logotipo egresoft' />
          </Box>
          <Typography component='h1' fontSize={{ xs: '55px', md: '96px' }}>
            Egresoft TecNM
          </Typography>
          <Typography component='p' variant='h6'>
            La constante búsqueda de mejora es esencial para el progreso
            educativo.
          </Typography>
          <Link style={{ width: 'fit-content' }} href='/login'>
            <Button
              variant='contained'
              sx={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                fontWeight: 'bold'
              }}
            >
              Iniciar sesión
            </Button>
          </Link>
        </Stack>
      </Box>
      <Box component='section' padding='3em' mb='4em'>
        <Typography
          textAlign='center'
          component='h2'
          variant='h4'
          color='primary'
          mt='25px'
          mb='50px'
          fontWeight='bold'
        >
          ¿Para qué sirve Egresoft?
        </Typography>
        <Grid container>
          <Grid
            component='section'
            item
            padding='20px'
            xs={12}
            sm={6}
            md={4}
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap='20px'
            textAlign='center'
          >
            <img
              style={{ width: '190px', height: '190px' }}
              src='/images/forward.svg'
            />
            <Typography component='h3' fontWeight='bold' color='primary'>
              Seguimiento
            </Typography>
            <Typography color='primary'>
              Nuestro sistema da seguimiento a los egresados, aplicándoles
              entrevistas periódicas.
            </Typography>
          </Grid>
          <Grid
            component='section'
            item
            padding='20px'
            xs={12}
            sm={6}
            md={4}
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap='20px'
            textAlign='center'
          >
            <img
              style={{ width: '190px', height: '190px' }}
              src='/images/check.svg'
            />
            <Typography component='h3' fontWeight='bold' color='primary'>
              Recopilación y mejora
            </Typography>
            <Typography color='primary'>
              Las encuestas ayudan a nuestra institución a recopilar información
              necesaria para mejorar dia con dia.
            </Typography>
          </Grid>
          <Grid
            component='section'
            item
            padding='20px'
            xs={12}
            md={4}
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap='20px'
            textAlign='center'
          >
            <img
              style={{ width: '190px', height: '190px' }}
              src='/images/find.svg'
            />
            <Typography component='h3' fontWeight='bold' color='primary'>
              Ayuda a empleadores
            </Typography>
            <Typography color='primary'>
              Los empleadores pueden ver la calidad de la educación que tienen
              sus empleados
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container color='white' component='section' height='100vh'>
        <Grid item width='100%' py='20px' bgcolor='primary.main'>
          <Typography
            textAlign='center'
            component='h3'
            fontWeight='bold'
            variant='h5'
          >
            ¿Quiénes lo pueden ocupar?
          </Typography>
        </Grid>
        <Grid
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            minHeight: '90%',
            justifyContent: 'center',
            backgroundImage: 'url(/images/use_1.svg)',
            backgroundSize: 'cover',
            padding: '20px 50px'
          }}
          component='section'
          item
          xs={12}
          sm={6}
          md={4}
        >
          <Typography
            component='h3'
            variant='h6'
            fontWeight='bold'
            textAlign='center'
          >
            Egresados
          </Typography>
          <Divider color='white' />
          <Typography>
            Como egresado puedes entrar y responder las encuestas que tu
            institución te mande, estas encuestas sirven para recabar datos
            necesarios para mejorar tu institución.
          </Typography>
        </Grid>
        <Grid
          component='section'
          item
          xs={12}
          sm={6}
          md={4}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            minHeight: '90%',
            justifyContent: 'center',
            backgroundImage: 'url(/images/use_2.svg)',
            backgroundSize: 'cover',
            padding: '20px 50px'
          }}
        >
          <Typography
            component='h3'
            variant='h6'
            fontWeight='bold'
            textAlign='center'
          >
            Personal administrativo
          </Typography>
          <Divider color='white' />
          <Typography>
            El personal tiene distintas funciones que van desde visualizar
            datos, hasta crear encuestas, todo depende del rol que la
            institución le asigne.
          </Typography>
        </Grid>
        <Grid
          component='section'
          item
          xs={12}
          md={4}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            justifyContent: 'center',
            minHeight: '90%',
            backgroundImage: 'url(/images/use_3.svg)',
            backgroundSize: 'cover',
            padding: '20px 50px'
          }}
        >
          <Typography
            component='h3'
            variant='h6'
            fontWeight='bold'
            textAlign='center'
          >
            Empleadores
          </Typography>
          <Divider color='white' />
          <Typography>
            Permite a los empleadores optimizar la identificación y contratación
            de talento, analizando el rendimiento de los egresados en áreas
            clave.
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
