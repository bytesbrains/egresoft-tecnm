import Paper from '@mui/material/Paper'
import GeneralProfileData from '../../../../../components/GeneralProfileData'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import PersonalProfileData from '@/components/PersonalProfileData'
import Stack from '@mui/material/Stack'
import AcademicProfileData from '@/components/AcademicProfileData'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { data } from '@/public/profile'

const USER = 'profile.json'

const fetchUserData = async (USER) => {
  return data
}

export default async function Profile() {
  const {
    general: generalData,
    personal: personalData,
    school: schoolData
  } = await fetchUserData(USER)

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
            xl: '60%'
          },
          margin: '0 auto',
          padding: '50px 30px 100px 10px'
        }}
      >
        <Grid container spacing={{ xs: '50px', md: '20px' }}>
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
                alt={generalData.name}
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
              <GeneralProfileData generalData={generalData} />
              <PersonalProfileData personalData={personalData} />
              <AcademicProfileData schoolData={schoolData} />
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
