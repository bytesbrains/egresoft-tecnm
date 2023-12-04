'use client'

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import Button from '@mui/material/Button'
import useGraduateData from '@/hooks/useGraduateData'
import GraduateGeneralData from '@/components/GraduateGeneralData'
import GraduateProfileData from '@/components/GraduateProfileData'
import GraduateAcademicData from '@/components/GraduateAcademicData'

export default function Profile() {
  const { general, personal, academic } = useGraduateData()
  
  return (
    <Stack position='relative'>
      <Paper
        component='section'
        bgcolor='red'
        elevation={4}
        sx={{
          width: {
            xs: '100%',
            md: '85%',
            xl: '65%'
          },
          margin: '0 auto',
          padding: '50px 30px 100px 10px'
        }}
      >
        <Grid container spacing={{ xs: '50px', md: '15px' }}>
          <Grid
            item
            xs={12}
            md={5}
            lg={4}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                width: {
                  xs: 100,
                  md: 200
                },
                height: {
                  xs: 100,
                  md: 200
                }
              }}
            >
              <Avatar
                alt={general.nombre}
                src='/'
                style={{
                  width: '100%',
                  height: '100%',
                  fontSize: '80px'
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7} lg={8}>
            <Stack rowGap={10}>
              <GraduateGeneralData data={general} />
              <GraduateProfileData data={personal} />
              <GraduateAcademicData data={academic} />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
      <Link
        style={{
          position: 'fixed',
          right: 30,
          bottom: 30
        }}
        href='/graduate/dashboard/profile/edit'
      >
        <Button variant='contained' aria-label='Editar datos'>
          Editar datos
        </Button>
      </Link>
    </Stack>
  )
}
