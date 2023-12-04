import Stack from '@mui/material/Stack'
import InfoTextField from './InfoTextField'
import ProfileSectionTitle from './ProfileSectionTitle'

export default function AdminGeneralData({ data }) {
  const { nombre, cargo } = data

  return (
    <section>
      <ProfileSectionTitle>Datos Generales</ProfileSectionTitle>

      <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: '20px 30px' }}>
        <InfoTextField
          name='nombre'
          label='Nombre'
          type='text'
          id='nombre'
          value={nombre}
        />

        <InfoTextField
          name='cargo'
          label='Cargo'
          type='text'
          id='cargo'
          value={cargo}
        />
      </Stack>
    </section>
  )
}
