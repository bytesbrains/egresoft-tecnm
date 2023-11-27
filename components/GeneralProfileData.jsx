import Stack from '@mui/material/Stack'
import InfoTextField from './InfoTextField'
import ProfileSectionTitle from './ProfileSectionTitle'

const LABELS = {
  name: 'Nombre',
  n_control: 'Numero de control',
  carreer: 'Carrera',
  curp: 'CURP',
  modality: 'Modalidad'
}

export default function GeneralProfileData({ generalData }) {
  console.log(generalData)

  return (
    <section>
      <ProfileSectionTitle>Datos Generales</ProfileSectionTitle>

      <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: '20px 30px' }}>
        {Object.keys(generalData).map((key) => (
          <InfoTextField
            key={key}
            name={key}
            label={LABELS[key]}
            type='text'
            id={key}
            value={generalData[key]}
          />
        ))}
      </Stack>
    </section>
  )
}
