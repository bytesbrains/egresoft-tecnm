import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'admin',
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
        ${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login/admin`,
          {
            method: 'POST',
            body: formData
          }
        )

        const userToken = await token.json()

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me/admin`,
          {
            method: 'GET',
            headers: { Authorization: `Bearer ${userToken.access_token}` }
          }
        )

        const user = await res.json()

        if (!res.ok) throw new Error(user.detail)

        return { ...user, ...userToken }
      }
    }),
    CredentialsProvider({
      id: 'graduate',
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
        ${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login/graduate`,
          {
            method: 'POST',
            body: formData
          }
        )

        const userToken = await token.json()

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me/graduate`,
          {
            method: 'GET',
            headers: { Authorization: `Bearer ${userToken.access_token}` }
          }
        )

        const user = await res.json()
        if (!res.ok) throw new Error(user.detail)

        console.log('pass')
        return { ...user, ...userToken }
      }
    })
  ],
  callbacks: {
    async jwt({ token, trigger, user, session }) {
      if (trigger === 'update' && session?.id) {
        return { ...token, ...session }
      }
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token
      return session
    }
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
