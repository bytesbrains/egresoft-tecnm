import { Divider } from '@mui/material'
import List from '@mui/material/List'

export default function ListFooter({ children }) {
  return (
    <List sx={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
      <Divider sx={{ backgroundColor: '#fff', mx: '15px', mb:'8px' }} />
      {children}
    </List>
  )
}
