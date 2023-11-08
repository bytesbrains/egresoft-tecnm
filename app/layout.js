import ThemeRegistry from '../utils/ThemeRegistry'

export const metadata = {
  title: 'Egresoft',
  description: 'graduate tracking'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
