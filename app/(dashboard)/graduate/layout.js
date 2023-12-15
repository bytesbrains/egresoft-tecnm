'use client'

import SideBar from '@/components/SideBar'
import Box from '@mui/material/Box'
import MainContent from '@/components/MainContent'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { DrawerHeader } from '@/components/SideBar'
import ArticleIcon from '@mui/icons-material/Article'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HistoryIcon from '@mui/icons-material/History'
import OtherHousesIcon from '@mui/icons-material/OtherHouses'
import ListFooter from '@/components/ListFooter'
import Link from 'next/link'
import LogoutButton from '@/components/LogoutButton'
import SettingButtons from '@/components/SettingButton'
import { usePage } from '@/store/usePage'

const URL = {
  Home: '/graduate/dashboard',
  Profile: '/graduate/dashboard/profile',
  Surveys: '/graduate/dashboard/surveys',
  History: '/graduate/dashboard/history'
}

const navigation = [
  {
    text: 'Inicio',
    icon: <OtherHousesIcon />,
    href: URL.Home
  },
  {
    text: 'Perfil',
    icon: <AccountCircleIcon />,
    href: URL.Profile
  },
  {
    text: 'Encuestas',
    icon: <ArticleIcon />,
    href: URL.Surveys
  },
  {
    text: 'Historial',
    icon: <HistoryIcon />,
    href: URL.History
  }
]

export default function RootLayout({ children }) {
  const [open, setOpen] = useState()
  const { currentPage, setCurrentPage, currentTab, setCurrentTab } = usePage()

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

  const handleCurrentTab = (index) => {
    setCurrentTab(index)
  }

  return (
    <Box
      sx={{ display: 'flex', backgroundColor: '#f5f5f5', minHeight: '100%' }}
      component='section'
    >
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen}>
        {currentPage}
      </Navbar>
      <SideBar open={open} handleDrawerClose={handleDrawerClose}>
        <List>
          {navigation.map((item, index) => (
            <Link
              key={item.text}
              style={{
                textDecoration: 'none',
                color: '#fff'
              }}
              onClick={() => {
                handleCurrentTab(index)
                setCurrentPage(item.text)
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
                    backgroundColor: currentTab == index && '#005275',
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
