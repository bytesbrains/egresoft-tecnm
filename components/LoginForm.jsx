'use client'

import { Formik, Form } from 'formik'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import useLogin from '@/hooks/useLogin'

export default function LoginForm({ role }) {
  const { error, handleSubmit, initialValues, validationSchema } =
    useLogin(role)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange, handleBlur, touched, errors }) => (
        <Form
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='Usuario'
            name='username'
            autoComplete='usuario'
            autoFocus
            inputProps={{ style: { fontSize: 25 } }}
            variant='filled'
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
          />

          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Contraseña'
            type='password'
            id='password'
            autoComplete='current-password'
            inputProps={{ style: { fontSize: 25 } }}
            variant='filled'
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />

          <Grid container>
            <Link
              sx={{ ml: 'auto', mr: 0, color: 'primary.secondary' }}
              href='/login/password'
              variant='body2'
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            disabled={isSubmitting}
          >
            {!isSubmitting ? 'Ingresar' : 'Ingresando...'}
          </Button>
          {error && (
            <Typography
              color='error'
              variant='h6'
              sx={{ mt: '10px', fontWeight: 'bold', textAlign: 'center' }}
            >
              {error}
            </Typography>
          )}
        </Form>
      )}
    </Formik>
  )
}
