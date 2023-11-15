import LoginForm from '@/components/LoginForm';
import Typography from '@mui/material/Typography';

const ROLE = 'admin';

export default function AdminLogin() {
  return (
    <>
    <Typography component='h1' variant='h5' textAlign='center'>
        Ingresando como Administrativo:
      </Typography>
    <LoginForm role={ROLE}/>
    </>
  )
}
