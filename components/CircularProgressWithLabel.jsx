import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function CircularProgressWithLabel() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100vh',
      }}
    >
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position:'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant='caption' component='div' color='primary.secondary'>
          Espere un momento
        </Typography>
        <CircularProgress />
      </Box>
    </Box>
  )
}
