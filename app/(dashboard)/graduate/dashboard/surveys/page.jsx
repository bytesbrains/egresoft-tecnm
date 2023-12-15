'use client'

import SortInput from '@/components/SortInput'
import Box from '@mui/material/Box'
import { useState } from 'react'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import WindowIcon from '@mui/icons-material/Window'
import Divider from '@mui/material/Divider'
import { IconButton } from '@mui/material'
import Grid from '@mui/material/Grid'
import Surveys from '@/components/Surveys'

export default function Mailbox() {
  const [isGrid, setIsGrid] = useState(false)

  const handleGridClick = () => {
    setIsGrid(true)
  }

  const handleColumnClick = () => {
    setIsGrid(false)
  }

  return (
    <Grid
      container
      spacing={3}
      sx={{
        alignItems: 'flex-start',
        justifyContent: 'start',
        pt: {
          md: '20px'
        }
      }}
    >
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: '40px'
        }}
      >
        {/* <SortInput /> */}
        <Box
          sx={{
            display: 'flex',
            width: 'fit-content',
            borderRadius: '3px',
            border: '1px solid',
            borderColor: 'rgba(0, 0, 0, 0.12)'
          }}
        >
          <IconButton
            sx={{
              borderRadius: '3px',
              backgroundColor: isGrid ? 'rgba(0, 0, 0, 0.12)' : 'transparent'
            }}
            aria-label='format grid'
            onClick={handleGridClick}
          >
            <WindowIcon />
          </IconButton>
          <IconButton
            sx={{
              borderRadius: '3px',
              backgroundColor: isGrid ? 'transparent' : 'rgba(0, 0, 0, 0.12)'
            }}
            aria-label='format column'
            onClick={handleColumnClick}
          >
            <FormatAlignLeftIcon />
          </IconButton>
          <Divider orientation='vertical' flexItem />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={8}
        component='section'
        sx={{
          display: isGrid ? 'grid' : 'flex',
          gap: '20px',
          mt: '20px',
          columnGap: isGrid ? '20px' : '0',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gridTemplateColumns: {
            xs: isGrid ? 'repeat(auto-fill, minmax(140px, 1fr))' : '1fr',
            md: isGrid ? 'repeat(auto-fill, minmax(345px, 1fr))' : '1fr'
          }
        }}
      >
        <Surveys isGrid={isGrid} />
      </Grid>
      <Grid
        item
        md={4}
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          },
          height: '83vh',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            width: {
              md: '300px',
              lg: '500px',
              xl: '700px'
            },
            position: 'absolute',
            bottom: '10px',
            right: '-230px'
          }}
        >
          <img
            style={{
              width: '100%',
              height: '100%'
            }}
            src='/images/hero-dashboard.svg'
            alt='Bienvenido a las encuestas'
          />
        </Box>
      </Grid>
    </Grid>
  )
}
