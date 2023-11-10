import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LoginForm from '../../components/LoginForm';

export default function Login() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', gap:'30px', mt:'30px', width:'100%'}}>
      <Typography component='h1' variant='h5' textAlign='center'>
        Iniciar Sesion:
      </Typography>
      <LoginForm/>
    </Box>
  )
}
