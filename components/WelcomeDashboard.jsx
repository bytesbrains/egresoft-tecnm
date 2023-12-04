import Image from 'next/image'
import Typography from '@mui/material/Typography'

export default function WelcomeDashboard() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '85%'
      }}
    >
      <Typography
        variant='h2'
        fontSize={{
          xs: '2.5em',
          sm: '3em',
          md: '4em'
        }}
        component='h1'
        color='primary'
      >
        ¡Bienvenido!
      </Typography>
      <Typography variant='h5'>Comencemos</Typography>

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '600px',
          aspectRatio: '1/1'
        }}
      >
        <Image
          src='/images/hero-dashboard.svg'
          alt='Bienvenido'
          style={{
            objectFit: 'contain'
          }}
          sizes='(max-width: 768px) 100vw, 600px'
          fill
          priority
        />
      </div>
    </div>
  )
}
