import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import Link from 'next/link'
import confetti from 'canvas-confetti'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: 270,
    md: 300,
    xl: 400
  },
  bgcolor: 'background.paper',
  border: '2px solid #fafafa',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4
}

export default function SignUpModal({ open }) {
  const [confettiFired, setConfettiFired] = useState(false)

  const handleConfetti = () => {
    if (typeof window !== 'undefined') {
      confetti({
        // Ajusta el estilo del confeti
        particleCount: 100,
        spread: 180,
        zIndex: 9999
      })
      setConfettiFired(true)
    }
  }

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            color='#009c29'
            fontWeight='600'
          >
            Usuario creado
          </Typography>
          <Typography id='modal-modal-description' sx={{ my: 2 }}>
            Su usuario fue creado con exito.
          </Typography>
          <Link href='/login/graduate'>
            <Button variant='contained'>Iniciar sesión</Button>
          </Link>
          {open && !confettiFired && typeof window !== 'undefined' && (
            <div>{handleConfetti()}</div>
          )}
        </Box>
      </Modal>
    </div>
  )
}
