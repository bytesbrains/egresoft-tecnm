import Stack from '@mui/material/Stack'
import InfoTextField from './InfoTextField'
import ProfileSectionTitle from './ProfileSectionTitle'

const LABELS = {
  school_of_origin: 'Escuela de procedencia',
  admission_date: 'Periodo de Ingreso',
  egress_date: 'Periodo de Egreso'
}

export default function AcademicProfileData({ schoolData }) {
  console.log(schoolData)

  return (
    <section>
      <ProfileSectionTitle>Datos Generales</ProfileSectionTitle>

      <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: '20px 30px' }}>
        {Object.keys(schoolData).map((key) => (
          <InfoTextField
            key={key}
            name={key}
            label={LABELS[key]}
            type='text'
            id={key}
            defaultValue={schoolData[key]}
          />
        ))}
      </Stack>
    </section>
  )
}
