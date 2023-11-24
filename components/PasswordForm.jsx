'use client'

import {useState} from 'react'
import { Formik, Form, Field } from 'formik'
import Typography from '@mui/material/Typography'
import * as Yup from 'yup'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { signIn } from 'next-auth/react'

export default function PasswordForm() {
  const [error,setError] = useState()

  const initialValues = {
    email: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Email invalido').required('Ingrese su correo electronico')
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
                id='email'
                label='Correo electrónico'
                name='email'
                type='email'
                autoComplete='email'
                autoFocus
                variant='filled'
                {...field}
              />
            )}
          </Field>
          {touched.email && errors.email && (
            <div style={{ marginBottom: '10px' }}>{errors.email}</div>
          )}

          <Link
            sx={{ color: 'primary.secondary' }}
            href='/login/password'
            variant='body2'
          >
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              disabled={isSubmitting}
            >
              {!isSubmitting ? 'Cambiar contraseña' : 'Enviando...'}
            </Button>
          </Link>
          {error && (
            <Typography
              color='error'
              variant='h6'
              sx={{ mt: '10px', fontWeight: 'bold', textAlign: 'center' }}
            >
              Correo erroneo
            </Typography>
          )}
        </Form>
      )}
    </Formik>
  )
}
