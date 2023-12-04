import Stack from '@mui/material/Stack'
import InfoTextField from './InfoTextField'
import ProfileSectionTitle from './ProfileSectionTitle'

export default function AdminProfileData({ data }) {
  const {
    email,
    correo_personal,
    correo_trabajo,
    telefono_personal,
    telefono_trabajo,
    fecha_nacimiento
  } = data

  return (
    <section>
      <ProfileSectionTitle>Datos Personales</ProfileSectionTitle>

      <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: '20px 30px' }}>
        <InfoTextField
          name='correo_institucional'
          label='Correo Institucional'
          type='text'
          id='correo_institucional'
          value={email}
        />

        <InfoTextField
          name='correo_oficina'
          label='Correo de Oficina'
          type='text'
          id='correo_oficina'
          value={correo_trabajo}
        />

        <InfoTextField
          name='correo_personal'
          label='Correo Personal'
          type='text'
          id='correo_personal'
          value={correo_personal}
        />

        <InfoTextField
          name='telefono_oficina'
          label='Telefono de Oficina'
          type='text'
          id='telefono_oficina'
          value={telefono_trabajo}
        />
        <InfoTextField
          name='telefono_personal'
          label='Telefono Personal'
          type='text'
          id='telefono_personal'
          value={telefono_personal}
        />
        <InfoTextField
          name='fecha_nacimiento'
          label='Fecha de Nacimiento'
          type='date'
          id='fecha_nacimiento'
          value={fecha_nacimiento}
        />
      </Stack>
    </section>
  )
}
