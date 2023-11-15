'use client'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

export default function MailboxTab({currentTab, handleTab}) {
  return (
    <Box sx={{ width: '100%'}}>
      <Tabs
        value={currentTab}
        onChange={handleTab}
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
