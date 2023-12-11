import ThemeRegistry from '../utils/ThemeRegistry'
import SessionAuthProvider from '../context/SessionAuthProvider'

export const metadata = {
  title: 'Egresoft TecNM - Seguimiento de egresados',
  description: 'Seguimiento de egresados'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <SessionAuthProvider>
            <main style={{ height: '100vh' }}>{children}</main>
          </SessionAuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
