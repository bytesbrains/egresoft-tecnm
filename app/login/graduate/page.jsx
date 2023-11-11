import LoginForm from '@/components/LoginForm';
import Typography from '@mui/material/Typography';

const ROLE = 'graduate'

export default function GraduateLogin() {
  return (
    <>
    <Typography component='h1' variant='h5' textAlign='center'>
        Ingresando como Egresado:
      </Typography>
    <LoginForm role={ROLE}/>
    </>
  )
}
