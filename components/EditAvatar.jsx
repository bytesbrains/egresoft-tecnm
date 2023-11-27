'use client'

import { useState } from 'react'
import { Box, IconButton, Avatar } from '@mui/material'

export default function EditAvatar({ imageSource, alternText }) {
  const [avatarPreview, setAvatarPreview] = useState(imageSource)
  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        // Actualizar la vista previa del avatar con la imagen seleccionada
        setAvatarPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <Box>
      <input
        accept='image/*'
        id='upload-avatar-pic'
        type='file'
        hidden
        onChange={handleAvatarChange}
        style={{ display: 'none' }}
      />
      <label
        style={{ width: '100%', position: 'relative' }}
        htmlFor='upload-avatar-pic'
      >
        <div>
          <IconButton
            component='span'
            sx={{
              width: {
                xs: 150,
                md: 200
              },
              height: {
                xs: 150,
                md: 200
              }
            }}
          >
            <Avatar
              alt={alternText}
              src={avatarPreview} // URL de la imagen inicial o por defecto
              style={{
                width: '100%',
                height: '100%',
                fontSize: '80px'
              }}
            />
          </IconButton>
          <div
            style={{
              cursor: 'pointer',
              content: 'Elegir imagen',
              position: 'absolute',
              width: '95%',
              height: '95%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              fontSize: '25px',
              borderRadius: '100%',
              opacity: '0',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => (e.target.style.opacity = '1')}
            onMouseLeave={(e) => (e.target.style.opacity = '0')}
          >
            Elegir imagen
          </div>
        </div>
      </label>
    </Box>
  )
}
