import LoginForm from '@/components/LoginForm';
import Typography from '@mui/material/Typography';

const ROLE = 'admin';

export default function AdminLogin() {
  return (
    <>
    <Typography component='h1' variant='h5' textAlign='center' mb='30px' mt='20px'>
        Ingresando como Administrativo:
      </Typography>
    <LoginForm role={ROLE}/>
    </>
  )
}
