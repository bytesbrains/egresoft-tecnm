'use client'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SettingsIcon from '@mui/icons-material/Settings'
import Link from 'next/link'

export default function SettingButtons({ href }) {
  return (
    <Link
      style={{
        textDecoration: 'none',
        color: '#fff'
      }}
      href={href}
    >
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
        >
          <ListItemIcon
            sx={{ display: 'flex', minWidth: '25px', color: 'inherit' }}
          >
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={'Ajustes'} />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}
