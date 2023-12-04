import Stack from '@mui/material/Stack'
import ProfileSectionTitle from './ProfileSectionTitle'

export default function EditableProfileData({ children }) {
  return (
    <section>
      <ProfileSectionTitle>Datos Personales</ProfileSectionTitle>

      <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: '20px 30px' }}>
        {children}
      </Stack>
    </section>
  )
}
