'use client'

import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

export default function MailboxTab() {
  const [value, setValue] = useState('Inicio')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor='secondary'
        indicatorColor='secondary'
        aria-label='tabs'
        centered
        sx={{
          '.MuiTabs-indicator': {
          height:'3px',
          }
        }}
      >
        <Tab
          value='Inicio'
          sx={{ flex:'1', textTransform: 'uppercase' }}
          label='Inicio'
        />
        <Tab value='Bolsa' sx={{flex:'1', textTransform: 'uppercase' }} label='Buzon' />
      </Tabs>
    </Box>
  )
}
