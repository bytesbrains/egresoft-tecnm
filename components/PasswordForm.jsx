'use client'

import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import Typography from '@mui/material/Typography'
import * as Yup from 'yup'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const sendEmail = async (values) => {
  const formData = new FormData()

  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      formData.append(key, values[key])
    }
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/login/password/reset-password`,
    {
      method: 'POST',
      body: formData
    }
  )

  const data = await response.json()
  console.log(data)
}

export default function PasswordForm() {
  const [error, setError] = useState()

  const initialValues = {
    email: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Email invalido')
      .required('Ingrese su correo electronico')
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values)
    await sendEmail(values)
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
            id='email'
            label='Correo electrónico'
            name='email'
            type='email'
            autoComplete='email'
            autoFocus
            variant='filled'
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
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
              Correo erroneo
            </Typography>
          )}
        </Form>
      )}
    </Formik>
  )
}
