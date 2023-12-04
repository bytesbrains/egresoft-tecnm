import Stack from '@mui/material/Stack'
import InfoTextField from './InfoTextField'
import ProfileSectionTitle from './ProfileSectionTitle'

export default function GraduateProfileData({ data }) {
  const {
    edad,
    sexo,
    telefono_personal,
    telefono_trabajo,
    correo_personal,
    correo_trabajo,
    Direccion_1,
    Direccion_2,
    Direccion_3
  } = data

  return (
    <section>
      <ProfileSectionTitle>Datos Generales</ProfileSectionTitle>

      <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: '20px 30px' }}>
        <InfoTextField
          name='edad'
          label='Edad'
          type='text'
          id='edad'
          defaultValue={edad}
        />
        <InfoTextField
          name='sexo'
          label='Genero'
          type='text'
          id='sexo'
          defaultValue={sexo}
        />
        <InfoTextField
          name='correo.correo_personal'
          label='Correo personal'
          type='text'
          id='correo.correo_personal'
          defaultValue={correo_personal}
        />
        <InfoTextField
          name='correo.correo_trabajo'
          label='Correo de trabajo'
          type='text'
          id='correo.correo_trabajo'
          defaultValue={correo_trabajo}
        />
        <InfoTextField
          name='telefono.telefono_trabajo'
          label='Telefono de trabajo'
          type='text'
          id='telefono.telefono_trabajo'
          defaultValue={telefono_trabajo}
        />
        <InfoTextField
          name='telfono.telefono_personal'
          label='Telefono Personal'
          type='text'
          id='telefono.telefono_personal'
          defaultValue={telefono_personal}
        />
        <InfoTextField
          name='direccion.Direccion_1'
          label='Direccion 1'
          type='text'
          id='direccion.Direccion_1'
          defaultValue={Direccion_1}
        />
        <InfoTextField
          name='direccion.Direccion_2'
          label='Direccion 2'
          type='text'
          id='direccion.Direccion_2'
          defaultValue={Direccion_2}
        />
        <InfoTextField
          name='direccion.Direccion_3'
          label='Direccion 3'
          type='text'
          id='direccion.Direccion_3'
          defaultValue={Direccion_3}
        />
      </Stack>
    </section>
  )
}
