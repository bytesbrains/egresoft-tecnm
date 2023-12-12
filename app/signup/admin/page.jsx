'use client'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Formik, Form } from 'formik'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { useMediaQuery } from '@mui/material'
import SignUpModal from '@/components/SignUpModal'
import useAdminSignUp from '@/hooks/useAdminSignUp'

export default function SignUp() {
  const { initialValues, handleSubmit, validationSchema, openModal } =
    useAdminSignUp()
  const inputProps = { inputProps: { style: { fontSize: 20 } } }
  const isSmallScreen = useMediaQuery('(max-width:600px)')

  return (
    <>
      <Typography
        component='h2'
        sx={{
          color: '#f2f2f2',
          fontSize: {
            xs: '22px',
            sm: '30px',
            md: '35px'
          }
        }}
      >
        Crea tu cuenta de Egresado
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        exclude={['user.passwordConfirm']}
      >
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          errors,
          touched,
          setFieldValue,
          setFieldTouched
        }) => (
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: '330px',
              width: isSmallScreen ? '95%' : '80%',
              maxWidth: '1000px',
              marginTop: '50px',
              gap: '50px',
              mb: '10px',
              padding: '30px 40px',
              backgroundColor: 'white',
              boxShadow: '2px 10px 20px 0px rgba(0,0,0,0.4)',
              borderRadius: '10px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                gap: 3
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    lg: '50%'
                  }
                }}
              >
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='user.id'
                  label='Número de Control'
                  name='user.id'
                  autoComplete='Id'
                  {...inputProps}
                  variant='filled'
                  onChange={(e) => {
                    setFieldValue('user.id', e.target.value)
                    setFieldTouched('user.id', true, false)
                  }}
                  onBlur={handleBlur}
                  error={touched.user?.id && !!errors.user?.id}
                  helperText={touched.user?.id && errors.user?.id}
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='admin_data.nombre'
                  label='Nombre(s)'
                  name='admin_data.nombre'
                  autoComplete='nombre'
                  {...inputProps}
                  variant='filled'
                  onChange={(e) => {
                    setFieldValue('admin_data.nombre', e.target.value)
                    setFieldTouched('admin_data.nombre', true, false)
                  }}
                  onBlur={handleBlur}
                  error={
                    touched.admin_data?.nombre?.nombre &&
                    !!errors.admin_data?.nombre?.nombre
                  }
                  helperText={
                    touched.admin_data?.nombre?.nombre &&
                    errors.admin_data?.nombre?.nombre
                  }
                />

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  type='email'
                  id='admin_data.correo.correo_personal'
                  label='Correo personal'
                  name='admin_data.correo.correo_personal'
                  autoComplete='email'
                  {...inputProps}
                  variant='filled'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.admin_data?.correo?.correo_personal &&
                    !!errors.admin_data?.correo?.correo_personal
                  }
                  helperText={
                    touched.admin_data?.correo?.correo_personal &&
                    errors.admin_data?.correo?.correo_personal
                  }
                />
                <TextField
                  margin='normal'
                  fullWidth
                  id='user.email'
                  label='Correo Institucional - @minatitlan.tecnm.mx'
                  name='user.email'
                  autoComplete='email'
                  {...inputProps}
                  variant='filled'
                  onChange={(e) => {
                    setFieldValue('user.email', e.target.value)
                    setFieldTouched('user.email', true, false)
                  }}
                  onBlur={handleBlur}
                  error={touched.user?.email && !!errors.user?.email}
                  helperText={
                    (touched.user?.email && errors.user?.email) ||
                    'No es necesario escribir @minatitlan.tecnm.mx'
                  }
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  type='password'
                  id='user.password'
                  label='Contraseña'
                  name='user.password'
                  autoComplete='password'
                  {...inputProps}
                  variant='filled'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.user?.password && !!errors.user?.password}
                  helperText={touched.user?.password && errors.user?.password}
                />

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  type='password'
                  id='user.passwordConfirm'
                  label='Confirmar Contraseña'
                  name='user.passwordConfirm'
                  autoComplete='password'
                  {...inputProps}
                  variant='filled'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.user?.passwordConfirm &&
                    !!errors.user?.passwordConfirm
                  }
                  helperText={
                    touched.user?.passwordConfirm &&
                    errors.user?.passwordConfirm
                  }
                />
                {/* <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='admin_data.edad'
                  label='Edad'
                  type='text'
                  name='admin_data.edad'
                  autoComplete='modalidad'
                  {...inputProps}
                  variant='filled'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.admin_data?.edad && !!errors.admin_data?.edad}
                  helperText={
                    touched.admin_data?.edad && errors.admin_data?.edad
                  }
                /> */}
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='admin_data.telefono.telefono_personal'
                  label='CURP'
                  name='admin_data.telefono.telefono_personal'
                  autoComplete='curp'
                  variant='filled'
                  onChange={(e) => {
                    setFieldValue(
                      'admin_data.telefono.telefono_personal',
                      e.target.value
                    )
                    setFieldTouched(
                      'admin_data.telefono.telefono_personal',
                      true,
                      false
                    )
                  }}
                  error={
                    touched.admin_data?.telefono.telefono_personal &&
                    !!errors.admin_data?.telefono.telefono_personal
                  }
                  helperText={
                    touched.admin_data?.telefono.telefono_personal &&
                    errors.admin_data?.telefono.telefono_personal
                  }
                />
              </Box>
              {/* <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: {
                    xs: 3,
                    lg: 6
                  },
                  width: { xs: '100%', lg: '50%' },
                  mt: 2
                }}
              >
                <FormControl>
                  <InputLabel id='admin_data.sexo-label'>
                    {(touched.admin_data?.sexo && errors.admin_data?.sexo) ||
                      'Sexo'}
                  </InputLabel>
                  <Select
                    required
                    sx={{ minWidth: '150px' }}
                    labelId='admin_data.sexo-label'
                    id='admin_data.sexo'
                    name='admin_data.sexo'
                    label='Sexo'
                    defaultValue=''
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.admin_data?.sexo && !!errors.admin_data?.sexo
                    }
                    helperText={
                      touched.admin_data?.sexo && errors.admin_data?.sexo
                    }
                  >
                    <MenuItem value='Hombre'>Hombre</MenuItem>
                    <MenuItem value='Mujer'>Mujer</MenuItem>
                    <MenuItem value='No deseo especificar'>
                      No deseo especificar
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel required id='modalidad-label'>
                    Modalidad
                  </InputLabel>
                  <Select
                    required
                    labelId='modalidad-label'
                    id='admin_data.modalidad'
                    name='admin_data.modalidad'
                    label='Modalidad'
                    defaultValue=''
                    onChange={handleChange}
                  >
                    <MenuItem value='Presencial'>Presencial</MenuItem>
                    <MenuItem value='Virtual'>Virtual</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel required id='carrera-label'>
                    Carrera
                  </InputLabel>
                  <Select
                    required
                    labelId='carrera-label'
                    id='admin_data.id_carrera'
                    name='admin_data.id_carrera'
                    label='Carrera'
                    defaultValue=''
                    onChange={handleChange}
                  >
                    {Object.keys(CARRERAS).map((carrera) => (
                      <MenuItem key={carrera} value={CARRERAS[carrera]}>
                        {carrera}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel required id='especialidad-label'>
                    Especialidad
                  </InputLabel>
                  <Select
                    required
                    labelId='especialidad-label'
                    id='admin_data.id_especialidad'
                    label='Especialidad'
                    name='admin_data.id_especialidad'
                    autoComplete='Id especialidad'
                    defaultValue=''
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.admin_data?.id_especialidad &&
                      !!errors.admin_data?.id_especialidad
                    }
                    helperText={
                      touched.admin_data?.id_especialidad &&
                      errors.admin_data?.id_especialidad
                    }
                  >
                    {Object.keys(ESPECIALIDADES).map((especialidad) => (
                      <MenuItem
                        key={especialidad}
                        value={ESPECIALIDADES[especialidad]}
                      >
                        {especialidad}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'start'
                  }}
                >
                  <FormControl sx={{ width: '100%' }}>
                    <InputLabel required id='periodo-label'>
                      Periodo de egreso
                    </InputLabel>
                    <Select
                      required
                      labelId='periodo-label'
                      id='admin_data.periodo_egreso'
                      label='Periodo de egreso'
                      name='admin_data.periodo_egreso'
                      autoComplete='periodo egreso'
                      defaultValue=''
                      {...inputProps}
                      variant='outlined'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.admin_data?.periodo_egreso &&
                        !!errors.admin_data?.periodo_egreso
                      }
                      helperText={
                        touched.admin_data?.periodo_egreso &&
                        errors.admin_data?.periodo_egreso
                      }
                    >
                      <MenuItem value='ENERO-JUNIO'>ENERO-JUNIO</MenuItem>
                      <MenuItem value='AGOSTO-DICIEMBRE'>
                        AGOSTO-DICIEMBRE
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    required
                    fullWidth
                    type='number'
                    id='admin_data.year'
                    label='Año de egreso'
                    name='admin_data.year'
                    sx={{ width: '70%' }}
                    InputProps={{
                      inputProps: { min: 1972, max: new Date().getFullYear() }
                    }}
                    autoComplete='dateFormat'
                    onBlur={handleBlur}
                    onChange={(e) => {
                      setFieldValue('admin_data.year', e.target.value)
                      setFieldTouched('admin_data.year', true, false)
                    }}
                    error={
                      !!(errors.admin_data?.year && touched.admin_data?.year)
                    }
                    helperText={
                      touched.admin_data?.year && errors.admin_data?.year
                    }
                  />
                </Box>
              </Box> */}
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                ml: 'auto',
                mr: '0',
                width: {
                  xs: '100%',
                  lg: 'fit-content'
                }
              }}
            >
              <Button fullWidth variant='outlined' sx={{ mt: 3, mb: 2 }}>
                Cancelar
              </Button>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Crear
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      <SignUpModal open={openModal} />
    </>
  )
}
