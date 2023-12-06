'use client'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Formik, Form } from 'formik'
import TextField from '@mui/material/TextField'
import useSignUp from '@/hooks/useSignUp'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'

export default function SignUp() {
  const { initialValues, handleSubmit } = useSignUp()

  return (
    <Box
      sx={{
        p: '10px',
        minHeight: '100vh',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography
        component='h1'
        sx={{
          mb: '30px',
          typography: {
            xs: 'h4',
            md: 'h2'
          },
          color: 'primary.main'
        }}
      >
        Egresoft TecNM
      </Typography>
      <Typography component='h2' variant='h5'>
        Crea tu cuenta de Egresado
      </Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting, handleChange }) => (
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: '500px',
              width: '60%',
              marginTop: '50px',
              gap: '20px',
              padding: '25px',
              boxShadow: '2px 10px 20px 0px rgba(0,0,0,0.4)',
              borderRadius: '10px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: 'row'
                },
                gap: '25px',
                justifyContent: 'space-between'
              }}
            >
              <TextField
                autoFocus
                margin='normal'
                required
                fullWidth
                id='egresado_data.nombre.nombre'
                label='Nombre(s)'
                name='egresado_data.nombre.nombre'
                autoComplete='nombre'
                inputProps={{ style: { fontSize: 25 } }}
                variant='filled'
                onChange={handleChange}
                sx={{
                  minWidth: {
                    sx: 'auto',
                    lg: '200px'
                  }
                }}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='egresado_data.nombre.apellido_paterno'
                label='Apellido Paterno'
                name='egresado_data.nombre.apellido_paterno'
                autoComplete='apellido paterno'
                inputProps={{ style: { fontSize: 25 } }}
                variant='filled'
                onChange={handleChange}
                sx={{
                  minWidth: {
                    sx: 'auto',
                    lg: '200px'
                  }
                }}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='egresado_data.nombre.apellido_materno'
                label='Apellido Materno'
                name='egresado_data.nombre.apellido_materno'
                autoComplete='modalidad'
                inputProps={{ style: { fontSize: 25 } }}
                variant='filled'
                onChange={handleChange}
                sx={{
                  minWidth: {
                    sx: 'auto',
                    lg: '200px'
                  }
                }}
              />
            </Box>
            <TextField
              margin='normal'
              required
              fullWidth
              id='user.id'
              label='Número Control'
              name='user.id'
              autoComplete='Id'
              inputProps={{ style: { fontSize: 25 } }}
              variant='filled'
              onChange={handleChange}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='user.email'
              label='Correo Institucional'
              name='user.email'
              autoComplete='email'
              inputProps={{ style: { fontSize: 25 } }}
              variant='filled'
              onChange={handleChange}
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
              inputProps={{ style: { fontSize: 25 } }}
              variant='filled'
              onChange={handleChange}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='egresado_data.id_carrera'
              label='Id de tu Carrera'
              name='egresado_data.id_carrera'
              autoComplete='id carrera'
              inputProps={{ style: { fontSize: 25 } }}
              variant='filled'
              onChange={handleChange}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='egresado_data.modalidad'
              label='Modalidad'
              name='egresado_data.modalidad'
              autoComplete='modalidad'
              inputProps={{ style: { fontSize: 25 } }}
              variant='filled'
              onChange={handleChange}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='egresado_data.id_especialidad'
              label='Id de tu Especialidad'
              name='egresado_data.id_especialidad'
              autoComplete='Id especialidad'
              inputProps={{ style: { fontSize: 25 } }}
              variant='filled'
              onChange={handleChange}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='egresado_data.periodo_egreso'
              label='Periodo de egreso'
              name='egresado_data.periodo_egreso'
              autoComplete='periodo egreso'
              inputProps={{ style: { fontSize: 25 } }}
              variant='filled'
              onChange={handleChange}
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
              inputProps={{ min: 0, style: { fontSize: 25 } }}
              variant='filled'
              onChange={handleChange}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='egresado_data.curp'
              label='CURP'
              name='egresado_data.curp'
              autoComplete='curp'
              inputProps={{ maxLength: 18, style: { fontSize: 25 } }}
              variant='filled'
              onChange={handleChange}
            />

            <InputLabel id='egresado_data.sexo-label'>Sexo</InputLabel>
            <Select
              sx={{ width: '150px' }}
              labelId='egresado_data.sexo-label'
              name='egresado_data.sexo'
              id='egresado_data.sexo'
              label='Sexo'
              defaultValue=''
              onChange={handleChange}
            >
              <MenuItem value='Hombre'>Hombre</MenuItem>
              <MenuItem value='Mujer'>Mujer</MenuItem>
              <MenuItem value='Otro(s)'>Otro(s)</MenuItem>
            </Select>

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar datos
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
