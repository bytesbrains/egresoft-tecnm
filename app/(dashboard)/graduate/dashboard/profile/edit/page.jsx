'use client'

import Paper from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import EditAvatar from '@/components/EditAvatar'
import EditableGeneralData from '@/components/EditableGeneralData'
import EditableProfileData from '@/components/EditableProfileData'
import { Formik, Form } from 'formik'
import EditableTextField from '@/components/EditableTextField'
import CircularProgressWithLabel from '@/components/CircularProgressWithLabel'
import useGraduateData from '@/hooks/useGraduateData'
import EditableAcademicData from '@/components/EditableAcademicData'
import { updateGraduate } from '@/services/graduate.api'
import { useCurrentPage } from '@/hooks/useCurrentPage'

export default function EditProfile() {
  const { general, personal, academic, schema, status, update, CARRERAS } =
    useGraduateData()

  const initialValues = {
    ...schema
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    const { egreso_year, periodo_egreso, ...restValues } = { ...values }

    console.log(values)

    const newPeriodoData = `${periodo_egreso} ${egreso_year}`

    const newValues = {
      ...restValues,
      periodo_egreso: newPeriodoData
    }
    console.log(newValues)

    await updateGraduate(general.id, newValues)
    update({ ...newValues })
    setSubmitting(false)
  }

  if (status === 'loading') return <CircularProgressWithLabel />

  return (
    <Paper
      component='section'
      bgcolor='red'
      elevation={4}
      sx={{
        width: {
          xs: '100%',
          md: '85%',
          xl: '65%'
        },
        margin: '0 auto',
        padding: '50px'
      }}
    >
      {/* <Box
        sx={{
          width: {
            xs: 100,
            md: 200
          },
          height: {
            xs: 100,
            md: 200
          }
        }}
      >
        <EditAvatar alternText={general.nombre} imageSource='/' />
      </Box> */}
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, handleBlur, touched, errors }) => (
          <Form
            style={{
              display: 'flex',
              rowGap: '50px',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            <EditableGeneralData>
              <EditableTextField
                name='nombre.nombre'
                label='Nombre'
                type='text'
                id='nombre.nombre'
                defaultValue={general.nombre}
                onChange={handleChange}
              />
              <EditableTextField
                name='nombre.apellido_paterno'
                label='Apellido paterno'
                type='text'
                id='nombre.apellido_paterno'
                defaultValue={general.apellido_paterno}
                onChange={handleChange}
              />
              <EditableTextField
                name='nombre.apellido_materno'
                label='Apellido materno'
                type='text'
                id='nombre.apellido_materno'
                defaultValue={general.apellido_materno}
                onChange={handleChange}
              />
              <EditableTextField
                name='id'
                label='Numero de control'
                type='text'
                id='id'
                disabled
                defaultValue={general.id}
                onChange={handleChange}
              />

              <EditableTextField
                name='curp'
                label='Curp'
                type='text'
                id='curp'
                defaultValue={general.curp}
                onChange={handleChange}
              />

              <FormControl sx={{ maxWidth: '240px' }}>
                <InputLabel required id='carrera-label'>
                  Carrera
                </InputLabel>
                <Select
                  required
                  labelId='carrera-label'
                  id='id_carrera'
                  name='id_carrera'
                  label='Carrera'
                  defaultValue={general.id_carrera}
                  onChange={handleChange}
                >
                  {Object?.keys(CARRERAS)?.map((carrera) => (
                    <MenuItem key={carrera} value={CARRERAS[carrera]}>
                      {carrera}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel required id='modalidad-label'>
                  Modalidad
                </InputLabel>
                <Select
                  sx={{
                    minWidth: '220px'
                  }}
                  required
                  labelId='modalidad-label'
                  id='modalidad'
                  name='modalidad'
                  label='Modalidad'
                  defaultValue={general.modalidad}
                  onChange={handleChange}
                >
                  <MenuItem value='Presencial'>Presencial</MenuItem>
                  <MenuItem value='Virtual'>Virtual</MenuItem>
                </Select>
              </FormControl>
            </EditableGeneralData>
            <EditableProfileData>
              <EditableTextField
                name='edad'
                label='Edad'
                type='number'
                id='edad'
                defaultValue={personal.edad}
                onChange={handleChange}
              />

              <FormControl>
                <InputLabel required id='sexo-label'>
                  Sexo
                </InputLabel>
                <Select
                  sx={{
                    minWidth: '220px'
                  }}
                  required
                  labelId='sexo-label'
                  id='sexo'
                  name='sexo'
                  label='Sexo'
                  defaultValue={personal.sexo}
                  onChange={handleChange}
                >
                  <MenuItem value='Hombre'>Hombre</MenuItem>
                  <MenuItem value='Mujer'>Mujer</MenuItem>
                  <MenuItem value='No deseo especificar'>
                    No deseo especificar
                  </MenuItem>
                </Select>
              </FormControl>
              <EditableTextField
                name='correo.correo_personal'
                label='Correo personal'
                type='text'
                id='correo.correo_personal'
                defaultValue={personal.correo_personal}
                onChange={handleChange}
              />
              <EditableTextField
                name='correo.correo_trabajo'
                label='Correo de trabajo'
                type='text'
                id='correo.correo_trabajo'
                defaultValue={personal.correo_trabajo}
                onChange={handleChange}
              />

              <EditableTextField
                name='telefono.telefono_trabajo'
                label='Telefono de trabajo'
                type='text'
                id='telefono.telefono_trabajo'
                defaultValue={personal.telefono_trabajo}
                onChange={handleChange}
              />
              <EditableTextField
                name='telefono.telefono_personal'
                label='Telefono Personal'
                type='text'
                id='telefono.telefono_personal'
                defaultValue={personal.telefono_personal}
                onChange={handleChange}
              />
              <EditableTextField
                name='direccion.Direccion_1'
                label='Direccion 1'
                type='text'
                id='direccion.Direccion_1'
                defaultValue={personal.Direccion_1}
                onChange={handleChange}
              />
              <EditableTextField
                name='direccion.Direccion_2'
                label='Direccion 2'
                type='text'
                id='direccion.Direccion_2'
                defaultValue={personal.Direccion_2}
                onChange={handleChange}
              />
              <EditableTextField
                name='direccion.Direccion_3'
                label='Direccion 3'
                type='text'
                id='direccion.Direccion_3'
                defaultValue={personal.Direccion_3}
                onChange={handleChange}
              />
            </EditableProfileData>
            <EditableAcademicData>
              <EditableTextField
                name='email'
                label='Correo Academico'
                type='text'
                id='email'
                defaultValue={academic.email}
                onChange={handleChange}
              />

              <FormControl sx={{ minWidth: '200px' }}>
                <InputLabel required id='periodo-label'>
                  Periodo de egreso
                </InputLabel>
                <Select
                  required
                  labelId='periodo-label'
                  id='periodo_egreso'
                  label='Periodo de egreso'
                  name='periodo_egreso'
                  autoComplete='text'
                  defaultValue={academic.periodo_egreso}
                  variant='outlined'
                  onChange={handleChange}
                >
                  <MenuItem value='ENERO-JUNIO'>ENERO-JUNIO</MenuItem>
                  <MenuItem value='AGOSTO-DICIEMBRE'>AGOSTO-DICIEMBRE</MenuItem>
                </Select>
              </FormControl>
              <EditableTextField
                required
                type='number'
                id='egreso_year'
                label='Año de egreso'
                name='egreso_year'
                sx={{ minWidth: '200px' }}
                defaultValue={academic.egreso_year}
                InputProps={{
                  inputProps: { min: 1972, max: new Date().getFullYear() }
                }}
                autoComplete='dateFormat'
                onChange={handleChange}
              />
            </EditableAcademicData>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              sx={{
                width: {
                  xs: '100%',
                  md: 'fit-content'
                },
                marginLeft: 'auto',
                marginRight: '0'
              }}
              disabled={isSubmitting}
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  )
}
