import { withAuth } from "next-auth/middleware"

export default withAuth({
    callbacks: {
      authorized: ({req, token }) => {
        if(req.nextUrl.pathname.startsWith('/admin')){
          return token?.role === 'admin'
        }
        if(req.nextUrl.pathname.startsWith('/graduate')){
          return token?.role === 'graduate'
        }
        return false
      },
    },
  })
export const config = {
  matcher: ['/admin/:path*', '/graduate/:path*']
}