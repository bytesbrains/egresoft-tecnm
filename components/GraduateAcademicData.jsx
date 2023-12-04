import Stack from '@mui/material/Stack'
import InfoTextField from './InfoTextField'
import ProfileSectionTitle from './ProfileSectionTitle'

export default function GraduateAcademicData({ data }) {
  const { email, periodo_egreso } = data

  return (
    <section>
      <ProfileSectionTitle>Datos Generales</ProfileSectionTitle>

      <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: '20px 30px' }}>
        <InfoTextField
          name='email'
          label='Correo Institucional'
          type='text'
          id='email'
          value={email}
        />
        <InfoTextField
          name='periodo_egreso'
          label='Periodo de egreso'
          type='text'
          id='periodo_egreso'
          value={periodo_egreso}
        />
      </Stack>
    </section>
  )
}
