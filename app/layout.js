import ThemeRegistry from '../utils/ThemeRegistry'
import SessionAuthProvider from '../context/SessionAuthProvider'

export const metadata = {
  title: 'Egresoft',
  description: 'graduate tracking'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <SessionAuthProvider>{children}</SessionAuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
