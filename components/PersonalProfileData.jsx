import Stack from '@mui/material/Stack'
import InfoTextField from './InfoTextField'
import ProfileSectionTitle from './ProfileSectionTitle'

const LABELS = {
  street: 'Calle',
  no: 'No',
  neighborhoods: 'Colinia',
  city: 'Minatitlán',
  cp: 'C.P',
  phone: 'Teléfono Móvil',
  birthday: 'Fecha de nacimiento',
  home_phone: 'Teléfono Fijo',
  school_email: 'Correo Institucional',
  personal_email: 'Correo Personal'
}

export default function PersonalProfileData({ personalData }) {
  return (
    <section>
      <ProfileSectionTitle>Datos Personales</ProfileSectionTitle>
      <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: '20px 30px' }}>
        {Object.keys(personalData).map((key) => (
          <InfoTextField
            key={key}
            name={key}
            label={LABELS[key]}
            type='text'
            id={key}
            value={personalData[key]}
          />
        ))}
      </Stack>
    </section>
  )
}
