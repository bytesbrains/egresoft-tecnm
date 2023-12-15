import { Typography, IconButton, Button, Paper } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Link from 'next/link'
import useSurveys from '@/hooks/useSurveys'

export default function Surveys({ isGrid }) {
  const { surveys } = useSurveys()

  if (surveys.detail) return <p>{surveys.detail}</p>

  return surveys?.map((item) => (
    <Paper
      elevation={1}
      key={item.surveyId + item.title}
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
        <IconButton sx={{ width: '32px', height: '32px', padding: '0px' }}>
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
          href={`/graduate/dashboard/surveys/${item.surveyId}`}
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
  ))
}
