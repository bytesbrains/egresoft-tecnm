import Stack from '@mui/material/Stack'
import ProfileSectionTitle from './ProfileSectionTitle'

export default function EditableAcademicData({ children }) {
  return (
    <section>
      <ProfileSectionTitle>Datos Academicos</ProfileSectionTitle>

      <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: '20px 30px' }}>
        {children}
      </Stack>
    </section>
  )
}
