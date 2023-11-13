import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {

      return true
    }
  }
})

export const config = {
  matcher: ['/admin/:path*', '/graduate/:path*']
}
