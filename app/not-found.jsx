'use client'

import { Box, Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth='md'>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h6'>
              La pagina por la que estas buscando no existe.
            </Typography>
            <Link href='/'>
              <Button onClick={() => router.back()} variant='contained'>
                Regresar
              </Button>
            </Link>
          </Grid>
          <Grid xs={6}>
            <img
              src='https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg'
              alt=''
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
