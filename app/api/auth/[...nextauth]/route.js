import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials, req) {
        const formData = new FormData()
        Object.entries(credentials).forEach(([key, value]) => {
          formData.append(key, value)
        })

        const token = await fetch(
          `
        ${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`,
          {
            method: 'POST',
            body: formData
          }
        )

        const userToken = await token.json()

        const res = await fetch('http://127.0.0.1:8000/users/me', {
          method: 'GET',
          headers: { Authorization: `Bearer ${userToken.access_token}` }
        })

        const user = await res.json()

        if (!res.ok) throw user

        return { ...user, ...userToken }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token
      return session
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 // 4 hours
  },
  pages: {
    signIn: '/login'
  }
})

export { handler as GET, handler as POST }
