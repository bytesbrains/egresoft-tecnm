'use client'

import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import Typography from '@mui/material/Typography'
import * as Yup from 'yup'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function LoginForm({ role }) {
  const router = useRouter()
  const [error, setError] = useState()

  const initialValues = {
    username: '',
    password: ''
  }

  const validationSchema = Yup.object({
    username: Yup.string().min(
      6,
      'El nombre de usuario debe tener al menos 6 caracteres'
    ),
    password: Yup.string().required('Ingrese su contraseña')
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true)

    const responseNextAuth = await signIn(role, {
      ...values,
      redirect: false
    })

    if (responseNextAuth?.error) {
      console.log(responseNextAuth.error.split(','))
      setError(true)
      return
    }

    router.push(`/${role}/dashboard`)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <Field name='username'>
            {({ field }) => (
              <TextField
                margin='normal'
                required
                fullWidth
                id='username'
                label='Usuario'
                name='username'
                autoComplete='usuario'
                autoFocus
                variant='filled'
                {...field}
              />
            )}
          </Field>
          {touched.username && errors.username && (
            <div style={{ marginBottom: '10px' }}>{errors.username}</div>
          )}
          <Field name='password'>
            {({ field }) => (
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Contraseña'
                type='password'
                id='password'
                autoComplete='current-password'
                variant='filled'
                {...field}
              />
            )}
          </Field>
          {touched.password && errors.password && (
            <div style={{ marginBottom: '10px' }}>{errors.password}</div>
          )}
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
              Datos erroneos
            </Typography>
          )}
        </Form>
      )}
    </Formik>
  )
}
