'use client'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { signOut } from 'next-auth/react'
import LogoutIcon from '@mui/icons-material/Logout'

export default function LogoutButton() {
  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          justifyContent: 'center',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.10)'
          }
        }}
        onClick={() => signOut()}
      >
        <ListItemIcon
          sx={{ display: 'flex', minWidth: '25px', color: 'inherit' }}
        >
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary={'Cerrar sesión'} />
      </ListItemButton>
    </ListItem>
  )
}
