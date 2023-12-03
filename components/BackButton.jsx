'use client'

import { useRouter } from 'next/navigation'
import { IconButton } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

const ARIABUTTON = 'pagina anterior'

export default function BackButton() {
  const router = useRouter()

  return (
    <IconButton
      sx={{
        backgroundColor: 'white',
        width: '50px',
        height: '50px',
        marginRight: {
          xs: '0px',
          md: '10px'
        },
        order: {
          xs: 1,
          md: 0
        }
      }}
      aria-label={ARIABUTTON}
      onClick={() => router.back()}
    >
      <KeyboardBackspaceIcon />
    </IconButton>
  )
}
