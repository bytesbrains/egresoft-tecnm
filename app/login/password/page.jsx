'use client'

import PasswordForm from '@/components/PasswordForm'
import Typography from '@mui/material/Typography'

export default function RecoverPassword() {
  return (
    <>
      <Typography component='h1' variant='h5' textAlign='center' mb='30px'>
        Recuperación de contraseña
      </Typography>
      <Typography variant='body1' textAlign='center' mb='20px'>
        Por favor, ingresa tu correo electrónico para reestablecer tu contraseña
      </Typography>
      <PasswordForm />
    </>
  )
}
