import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import Button from '@mui/material/Button'
import GeneralProfileEditable from '@/components/GeneralProfileEditable'
import PersonalProfileEditable from '@/components/PersonalProfileEditable'
import AcademicProfileEditable from '@/components/AcademicProfileEditable'
import EditAvatar from '@/components/EditAvatar'

const USER = 'profile.json'

const fetchUserData = async (USER) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API}/${USER}`, {
      cache: 'no-store'
    })
    const data = await response.json()

    return data
  } catch (e) {
    console.error(e)
    return
  }
}

export default async function EditProfile() {
  const {
    picture,
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
                  xs: 150,
                  md: 200
                },
                height: {
                  xs: 150,
                  md: 200
                }
              }}
            >
              <EditAvatar alternText={generalData.name} imageSource={picture} />
            </Box>
          </Grid>
          <Grid item xs={12} md={7} lg={8}>
            <Stack rowGap={10}>
              <GeneralProfileEditable generalData={generalData} />
              <PersonalProfileEditable personalData={personalData} />
              <AcademicProfileEditable schoolData={schoolData} />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
      {/* <Link
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
      </Link> */}
    </Stack>
  )
}
