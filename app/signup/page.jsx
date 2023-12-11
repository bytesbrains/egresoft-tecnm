'use client'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Formik, Form } from 'formik'
import TextField from '@mui/material/TextField'
import useGraduateSignUp from '@/hooks/useGraduateSignUp'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { useMediaQuery } from '@mui/material'

export default function SignUp() {
  const {
    initialValues,
    handleSubmit,
    validationSchema,
    CARRERAS,
    ESPECIALIDADES
  } = useGraduateSignUp()
  const inputProps = { inputProps: { style: { fontSize: 20 } } }
  const isSmallScreen = useMediaQuery('(max-width:600px)')
  return (
    <Box
      sx={{
        py: '20px',
        minHeight: '100vh',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
        background: ' rgb(50,50,50)',
        background:
          'radial-gradient(circle, rgba(50,50,50,1) 0%, rgba(21,21,21,1) 100%)'
      }}
    >
      <Typography
        component='h1'
        sx={{
          mb: '30px',
          fontSize: {
            xs: '40px',
            md: '50px',
            lg: '60px',
            xl: '100px'
          },
          color: 'white',
          background:
            'linear-gradient(324deg, rgba(185,34,195,1) 0%, rgba(45,228,253,1) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Egresoft TecNM
      </Typography>
      <Typography
        component='h2'
        sx={{
          color: '#f2f2f2',
          fontSize: {
            xs: '22px',
            md: '30px'
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
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          errors,
          touched,
          setFieldValue,
          setFieldTouched,
          setFieldError
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
                  id='egresado_data.nombre.nombre'
                  label='Nombre(s)'
                  name='egresado_data.nombre.nombre'
                  autoComplete='nombre'
                  {...inputProps}
                  variant='filled'
                  onChange={(e) => {
                    setFieldValue('egresado_data.nombre.nombre', e.target.value)
                    setFieldTouched('egresado_data.nombre.nombre', true, false)
                  }}
                  onBlur={handleBlur}
                  error={
                    touched.egresado_data?.nombre?.nombre &&
                    !!errors.egresado_data?.nombre?.nombre
                  }
                  helperText={
                    touched.egresado_data?.nombre?.nombre &&
                    errors.egresado_data?.nombre?.nombre
                  }
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='egresado_data.nombre.apellido_paterno'
                  label='Apellido Paterno'
                  name='egresado_data.nombre.apellido_paterno'
                  autoComplete='apellido paterno'
                  {...inputProps}
                  variant='filled'
                  onChange={(e) => {
                    setFieldValue(
                      'egresado_data.nombre.apellido_paterno',
                      e.target.value
                    )
                    setFieldTouched(
                      'egresado_data.nombre.apellido_paterno',
                      true,
                      false
                    )
                  }}
                  onBlur={handleBlur}
                  error={
                    touched.egresado_data?.nombre?.apellido_paterno &&
                    !!errors.egresado_data?.nombre?.apellido_paterno
                  }
                  helperText={
                    touched.egresado_data?.nombre?.apellido_paterno &&
                    errors.egresado_data?.nombre?.apellido_paterno
                  }
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='egresado_data.nombre.apellido_materno'
                  label='Apellido Materno'
                  name='egresado_data.nombre.apellido_materno'
                  autoComplete='apellido materno'
                  {...inputProps}
                  variant='filled'
                  onChange={(e) => {
                    setFieldValue(
                      'egresado_data.nombre.apellido_materno',
                      e.target.value
                    )
                    setFieldTouched(
                      'egresado_data.nombre.apellido_materno',
                      true,
                      false
                    )
                  }}
                  onBlur={handleBlur}
                  error={
                    touched.egresado_data?.nombre?.apellido_materno &&
                    !!errors.egresado_data?.nombre?.apellido_materno
                  }
                  helperText={
                    touched.egresado_data?.nombre?.apellido_materno &&
                    errors.egresado_data?.nombre?.apellido_materno
                  }
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  type='email'
                  id='egresado_data.correo.correo_personal'
                  label='Correo personal'
                  name='egresado_data.correo.correo_personal'
                  autoComplete='email'
                  {...inputProps}
                  variant='filled'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.egresado_data?.correo?.correo_personal &&
                    !!errors.egresado_data?.correo?.correo_personal
                  }
                  helperText={
                    touched.egresado_data?.correo?.correo_personal &&
                    errors.egresado_data?.correo?.correo_personal
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
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='egresado_data.edad'
                  label='Edad'
                  type='text'
                  name='egresado_data.edad'
                  autoComplete='modalidad'
                  {...inputProps}
                  variant='filled'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.egresado_data?.edad && !!errors.egresado_data?.edad
                  }
                  helperText={
                    touched.egresado_data?.edad && errors.egresado_data?.edad
                  }
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='egresado_data.curp'
                  label='CURP'
                  name='egresado_data.curp'
                  autoComplete='curp'
                  inputProps={{
                    maxLength: 18,
                    ...inputProps.inputProps
                  }}
                  variant='filled'
                  onChange={handleChange}
                  error={
                    touched.egresado_data?.curp && !!errors.egresado_data?.curp
                  }
                  helperText={
                    touched.egresado_data?.curp && errors.egresado_data?.curp
                  }
                />
              </Box>
              <Box
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
                  <InputLabel id='egresado_data.sexo-label'>
                    {(touched.egresado_data?.sexo &&
                      errors.egresado_data?.sexo) ||
                      'Sexo'}
                  </InputLabel>
                  <Select
                    required
                    sx={{ minWidth: '150px' }}
                    labelId='egresado_data.sexo-label'
                    id='egresado_data.sexo'
                    name='egresado_data.sexo'
                    label='Sexo'
                    defaultValue=''
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.egresado_data?.sexo &&
                      !!errors.egresado_data?.sexo
                    }
                    helperText={
                      touched.egresado_data?.sexo && errors.egresado_data?.sexo
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
                    id='egresado_data.modalidad'
                    name='egresado_data.modalidad'
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
                    id='egresado_data.id_carrera'
                    name='egresado_data.id_carrera'
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
                    id='egresado_data.id_especialidad'
                    label='Especialidad'
                    name='egresado_data.id_especialidad'
                    autoComplete='Id especialidad'
                    defaultValue=''
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.egresado_data?.id_especialidad &&
                      !!errors.egresado_data?.id_especialidad
                    }
                    helperText={
                      touched.egresado_data?.id_especialidad &&
                      errors.egresado_data?.id_especialidad
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
                      id='egresado_data.periodo_egreso'
                      label='Periodo de egreso'
                      name='egresado_data.periodo_egreso'
                      autoComplete='periodo egreso'
                      defaultValue=''
                      {...inputProps}
                      variant='outlined'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.egresado_data?.periodo_egreso &&
                        !!errors.egresado_data?.periodo_egreso
                      }
                      helperText={
                        touched.egresado_data?.periodo_egreso &&
                        errors.egresado_data?.periodo_egreso
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
                    id='egresado_data.year'
                    label='Año de egreso'
                    name='egresado_data.year'
                    sx={{ width: '70%' }}
                    InputProps={{
                      inputProps: { min: 1972, max: new Date().getFullYear() }
                    }}
                    autoComplete='dateFormat'
                    onBlur={handleBlur}
                    onChange={(e) => {
                      setFieldValue('egresado_data.year', e.target.value)
                      setFieldTouched('egresado_data.year', true, false)
                    }}
                    error={
                      !!(
                        errors.egresado_data?.year &&
                        touched.egresado_data?.year
                      )
                    }
                    helperText={
                      touched.egresado_data?.year && errors.egresado_data?.year
                    }
                  />
                </Box>
              </Box>
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
    </Box>
  )
}
