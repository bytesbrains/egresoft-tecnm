import LoginForm from '@/components/LoginForm'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const ROLE = 'graduate'

export default function GraduateLogin() {
  return (
    <>
      <Typography
        component='h1'
        variant='h5'
        textAlign='center'
        mt='20px'
        mb='30px'
      >
        Ingresando como Egresado:
      </Typography>
      <LoginForm role={ROLE} />
      <Link
        sx={{ ml: 'auto', mr: 0, color: 'primary.secondary' }}
        href='/signup'
        variant='body2'
      >
        ¿No tienes una cuenta? Regístrate aqui
      </Link>
    </>
  )
}
