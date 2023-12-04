import Stack from '@mui/material/Stack'
import InfoTextField from './InfoTextField'
import ProfileSectionTitle from './ProfileSectionTitle'

export default function GraduateGeneralData({ data }) {
  const {
    id,
    nombre,
    apellido_paterno,
    apellido_materno,
    curp,
    id_carrera,
    modalidad
  } = data

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
          name='apellido_paterno'
          label='Apellido paterno'
          type='text'
          id='apellido_paterno'
          value={apellido_paterno}
        />
        <InfoTextField
          name='apellido_materno'
          label='Apellido materno'
          type='text'
          id='apellido_materno'
          value={apellido_materno}
        />
        <InfoTextField
          name='id'
          label='Numero de control'
          type='text'
          id='id'
          value={id}
        />
        <InfoTextField
          name='curp'
          label='Curp'
          type='text'
          id='curp'
          value={curp}
        />
        <InfoTextField
          name='id_carrera'
          label='Id Carrera'
          type='text'
          id='id_carrera'
          value={id_carrera}
        />

        <InfoTextField
          name='modalidad'
          label='Modalidad'
          type='text'
          id='modalidad'
          value={modalidad}
        />
      </Stack>
    </section>
  )
}
