'use client'

import MailboxTab from '@/components/MailboxTab'
import SortInput from '@/components/SortInput'
import Box from '@mui/material/Box'
import { useState } from 'react'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import WindowIcon from '@mui/icons-material/Window'
import Divider from '@mui/material/Divider'
import { Typography, IconButton, Button, Paper } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Grid from '@mui/material/Grid'
import Link from 'next/link'

const data = [
  {
    id: 1,
    title: 'Asunto de la encuesta',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 2,
    title: 'Asunto de la encuesta',
    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    id: 3,
    title: 'Asunto de la encuesta',
    body: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    id: 4,
    title: 'Asunto de la encuesta',
    body: 'This is a new survey added to the list.'
  },
  {
    id: 5,
    title: 'Asunto de la encuesta',
    body: 'Another new survey added for testing purposes.'
  },
  {
    id: 6,
    title: 'Asunto de la encuesta',
    body: 'Adding yet another survey for completeness.'
  },
  {
    id: 7,
    title: 'Asunto de la encuesta',
    body: 'A new survey for further testing purposes.'
  },
  {
    id: 8,
    title: 'Asunto de la encuesta',
    body: 'Eighth survey to expand the dataset.'
  },
  {
    id: 9,
    title: 'Asunto de la encuesta',
    body: 'Ninth survey for a complete set of data.'
  },
  {
    id: 10,
    title: 'Asunto de la encuesta',
    body: 'Tenth survey to reach the desired number.'
  }
]

export default function Mailbox() {
  const [isGrid, setIsGrid] = useState(false)
  const [currentTab, setCurrentTab] = useState('Inicio')

  const handleGridClick = () => {
    setIsGrid(true)
  }

  const handleColumnClick = () => {
    setIsGrid(false)
  }

  const handleTab = (event, newValue) => {
    setCurrentTab(newValue)
  }

  return (
    <Grid
      container
      spacing={3}
      sx={{
        pt: {
          md: '20px'
        }
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: {
            md: 'none'
          }
        }}
      >
        <MailboxTab currentTab={currentTab} handleTab={handleTab} />
      </Grid>
      {currentTab === 'Inicio' ? (
        <>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '40px'
            }}
          >
            <SortInput />
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
                  backgroundColor: isGrid
                    ? 'rgba(0, 0, 0, 0.12)'
                    : 'transparent'
                }}
                aria-label='format grid'
                onClick={handleGridClick}
              >
                <WindowIcon />
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: '3px',
                  backgroundColor: isGrid
                    ? 'transparent'
                    : 'rgba(0, 0, 0, 0.12)'
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
              columnGap: isGrid ? '20px' : '0',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gridTemplateColumns: {
                xs: isGrid ? 'repeat(auto-fill, minmax(140px, 1fr))' : '1fr',
                md: isGrid ? 'repeat(auto-fill, minmax(345px, 1fr))' : '1fr'
              }
            }}
          >
            {data.map((item) => (
              <Paper
                elevation={1}
                key={item.id}
                sx={{
                  minWidth: isGrid ? '130px' : '100%',
                  padding: {
                    xs: '8px',
                    md: '16px'
                  }
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px',
                    padding: '8px'
                  }}
                >
                  <IconButton
                    sx={{ width: '32px', height: '32px', padding: '0px' }}
                  >
                    <AccountCircleIcon sx={{ width: '32px', height: '32px' }} />
                  </IconButton>
                  <Typography
                    variant='h6'
                    style={{ marginLeft: '8px', fontSize: '16px' }}
                  >
                    {item.title}
                  </Typography>
                  <div style={{ flex: 1 }}></div>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <Typography
                    variant='body1'
                    sx={{
                      color: 'gray',
                      display: {
                        xs: 'none',
                        md: 'block'
                      },
                      fontSize: {
                        xs: '13px',
                        md: '16px'
                      }
                    }}
                  >
                    {item.body}
                  </Typography>
                </div>
                <div style={{ marginTop: 'auto', textAlign: 'left' }}>
                  <Link
                    style={{ color: 'white' }}
                    href='/graduate/dashboard/mailbox/1'
                  >
                    <Button
                      color='secondary'
                      sx={{
                        backgroundColor: 'rgba(214, 235, 255, 0.3)'
                      }}
                    >
                      Iniciar
                    </Button>
                  </Link>
                </div>
              </Paper>
            ))}
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              width: '300px',
              display: {
                xs: 'none',
                md: 'block'
              }
            }}
          >
            <Link href='https://www.occ.com.mx/'>
              <img
                style={{ width: '100%' }}
                src='/images/InfografiaUniversidades.jpg'
                alt='bolsa de trabajo'
              />
            </Link>
            <Link href='https://www.occ.com.mx/'>
              <img
                style={{ width: '100%' }}
                src='/images/sne-bolsa-de-trabajo.jpg'
                alt='bolsa de trabajo'
              />
            </Link>
          </Grid>
        </>
      ) : (
        <Grid item xs={12} md={4} sx={{ width: '300px' }}>
          <Link href='https://www.occ.com.mx/'>
            <img
              style={{ width: '100%' }}
              src='/images/InfografiaUniversidades.jpg'
              alt='bolsa de trabajo'
            />
          </Link>
          <Link href='https://www.occ.com.mx/'>
            <img
              style={{ width: '100%' }}
              src='/images/sne-bolsa-de-trabajo.jpg'
              alt='bolsa de trabajo'
            />
          </Link>
        </Grid>
      )}
    </Grid>
  )
}
