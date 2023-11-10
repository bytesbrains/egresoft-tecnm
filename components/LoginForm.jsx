'use client'

import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    const responseNextAuth = await signIn('credentials', {
      username,
      password,
      redirect: false
    })

    if (responseNextAuth?.error) {
      console.log(responseNextAuth.error.split(','))
      setLoading(false)
      setError(true)
      return
    }

    setSuccess(true)
    setLoading(false)

    setTimeout(()=>{
      router.push('/dashboard')
    },1000)
  }

  return (
    <>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
          onChange={(event) => setUsername(event.target.value)}
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
          variant='filled'
          onChange={(event) => setPassword(event.target.value)}
        />
        <Grid container>
          <Link
            sx={{ ml: 'auto', mr: 0, color: 'primary.secondary' }}
            href='#'
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
          disabled={loading}
          color={success ? 'success' : 'primary'}
        >
          {!loading ? 'Ingresar' : 'Ingresando...'}
        </Button>
        {!loading && error && (
          <Typography color='error' variant='h6'  sx={{fontWeight: 'bold',textAlign:'center'}}>
            Datos erroneos
          </Typography>
        )}
      </Box>
    </>
  )
}
