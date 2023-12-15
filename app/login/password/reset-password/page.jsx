'use client'

import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import Typography from '@mui/material/Typography'
import * as Yup from 'yup'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useSearchParams } from 'next/navigation'

const sendNewPassword = async (values, token) => {
  const formData = new FormData()

  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      formData.append(key, values[key])
    }
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/login/password/reset-password/${token}`,
    {
      method: 'POST',
      body: formData
    }
  )

  const data = await response.json()
  console.log(data)
}

export default function PasswordReset() {
  const [error, setError] = useState()
  const searchParams = useSearchParams()

  const token = searchParams.get('token')
  console.log(token)

  const initialValues = {
    new_password: '',
    confirmPassword: ''
  }

  const validationSchema = Yup.object({
    new_password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y tener al menos 8 caracteres.'
      )
      .required('La contraseña es requerida'),
    confirmPassword: Yup.string()
      .test(
        'passwords-match',
        'Las contraseñas deben coincidir',
        function (value) {
          return this.parent.new_password === value
        }
      )
      .required('Confirme su contraseña')
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    await sendNewPassword(values, token)
    console.log(values.new_password)
    setSubmitting(false)
  }

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
            id='new_password'
            label='Contraseña'
            name='new_password'
            type='password'
            autoComplete='new-password'
            variant='filled'
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched?.new_password && !!errors?.new_password}
            helperText={touched?.new_password && errors?.new_password}
          />

          <TextField
            margin='normal'
            required
            fullWidth
            type='password'
            id='confirmPassword'
            label='Confirmar Contraseña'
            name='confirmPassword'
            autoComplete='password'
            variant='filled'
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched?.passwordConfirm && !!errors?.passwordConfirm}
            helperText={touched?.passwordConfirm && errors?.passwordConfirm}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            disabled={isSubmitting}
          >
            {!isSubmitting ? 'Cambiar contraseña' : 'Enviando...'}
          </Button>

          {error && (
            <Typography
              color='error'
              variant='h6'
              sx={{ mt: '10px', fontWeight: 'bold', textAlign: 'center' }}
            >
              Error: {error}
            </Typography>
          )}
        </Form>
      )}
    </Formik>
  )
}
