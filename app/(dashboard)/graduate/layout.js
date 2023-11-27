'use client'

import SideBar from '@/components/SideBar'
import Box from '@mui/material/Box'
import MainContent from '@/components/MainContent'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { DrawerHeader } from '@/components/SideBar'
import EmailIcon from '@mui/icons-material/Email'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HistoryIcon from '@mui/icons-material/History'
import ListFooter from '@/components/ListFooter'
import Link from 'next/link'
import LogoutButton from '@/components/LogoutButton'
import SettingButtons from '@/components/SettingButton'
import { usePathname } from 'next/navigation'

const URL = {
  Inicio: '/graduate/dashboard',
  Perfil: '/graduate/dashboard/profile',
  Buzon: '/graduate/dashboard/mailbox',
  Historial: '/graduate/dashboard/history'
}

const navigation = [
  {
    text: 'Perfil',
    icon: <AccountCircleIcon />,
    href: URL.Perfil
  },
  {
    text: 'Buzon',
    icon: <EmailIcon />,
    href: URL.Buzon
  },
  {
    text: 'Historial',
    icon: <HistoryIcon />,
    href: URL.Historial
  }
]

export default function RootLayout({ children }) {
  const [open, setOpen] = useState()
  const pathname = usePathname()
  const pagename = pathname.match(/\/dashboard\/([^/]+)/)[1]

  useEffect(() => {
    const viewport = window.innerWidth > 600
    setOpen(() => viewport)
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box
      sx={{ display: 'flex', backgroundColor: '#f5f5f5', minHeight: '100%' }}
      component='section'
    >
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen}>
        {pagename}
      </Navbar>
      <SideBar open={open} handleDrawerClose={handleDrawerClose}>
        <List>
          {navigation.map((item) => (
            <Link
              key={item.text}
              style={{
                textDecoration: 'none',
                color: '#fff'
              }}
              href={item.href}
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
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <ListFooter>
          <SettingButtons href='/graduate/dashboard/settings' />
          <LogoutButton />
        </ListFooter>
      </SideBar>
      <MainContent open={open}>
        <DrawerHeader />
        {children}
      </MainContent>
    </Box>
  )
}
