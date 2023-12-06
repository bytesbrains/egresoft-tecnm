'use client'

import MailboxTab from '@/components/MailboxTab'
import SortInput from '@/components/SortInput'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import WindowIcon from '@mui/icons-material/Window'
import Divider from '@mui/material/Divider'
import { Typography, IconButton, Button, Paper } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Grid from '@mui/material/Grid'
import Link from 'next/link'

const fetchSurveysList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/survey/`,
      {
        next: { revalidate: 0 }
      }
    )
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export default function Mailbox() {
  const [isGrid, setIsGrid] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => setData(await fetchSurveysList())
    getData()
  }, [])

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
        {data.map((item) => (
          <Paper
            elevation={1}
            key={item.title}
            sx={{
              minWidth: isGrid ? '130px' : '100%',
              height: 'fit-content',
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
                {item.description}
              </Typography>
            </div>
            <div style={{ marginTop: 'auto', textAlign: 'left' }}>
              <Link
                style={{ color: 'white' }}
                href={`/graduate/dashboard/surveys/${item.title}`}
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
          display: {
            xs: 'none',
            md: 'flex'
          },
          height: '70vh'
        }}
      >
        <img
          style={{ width: '100%', justifySelf: 'flex-end' }}
          src='/images/hero-dashboard.svg'
          alt='Bienvenido a las encuestas'
        />
      </Grid>
    </Grid>
  )
}
