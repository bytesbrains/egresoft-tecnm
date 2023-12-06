import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import * as Yup from 'yup'

export default function useLogin(role) {
  const router = useRouter()
  const [error, setError] = useState()

  const initialValues = {
    username: '',
    password: ''
  }

  const validationSchema = Yup.object({
    username: Yup.string('Ingresa tu usuario').required(
      'El usuario es requerido'
    ),
    password: Yup.string('Enter your password').required('Password is required')
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    const responseNextAuth = await signIn(role, {
      ...values,
      redirect: false
    })

    if (responseNextAuth?.error) {
      console.log(responseNextAuth, 'aa')
      setError(responseNextAuth.error)
      return
    }

    setSubmitting(true)
    router.push(`/${role}/dashboard`)
  }

  return {
    error,
    initialValues,
    validationSchema,
    handleSubmit
  }
}
