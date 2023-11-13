'use client'

import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import { Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  backgroundColor: '#fff',
  color: '#000',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

export default function Navbar({ open, handleDrawerOpen, children }) {
  return (
    <AppBar elevation={1} position='fixed' open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: {
            xs: 'space-between',
            lg: 'flex-start'
          },
          width:{
            xs:'60%',
            sm:'55%',
            md:'100%'
          }
        }}
      >
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          sx={{
            xs: {
              textAlign: 'center'
            }
          }}
          variant='h5'
          noWrap
          component='h1'
        >
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}