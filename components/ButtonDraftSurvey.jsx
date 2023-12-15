import Button from '@mui/material/Button'
import SaveAsIcon from '@mui/icons-material/SaveAs'

export default function ButtonDraftSurvey({ handleDraft }) {
  return (
    <Button
      sx={{ position: 'fixed', bottom: '5%', right: '5%', fontSize: '16px' }}
      aria-label='guardar un borrador'
      variant='contained'
      startIcon={<SaveAsIcon />}
      onClick={handleDraft}
    >
      Guardar progreso
    </Button>
  )
}
