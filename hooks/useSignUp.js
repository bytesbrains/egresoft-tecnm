import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import * as Yup from 'yup'
import { createGraduate } from '@/services/graduate.api'

const SCHEMA = {
  user: {
    id: '',
    email: '',
    disabled: false,
    password: '',
    role: 'graduate'
  },
  egresado_data: {
    id_carrera: 'ISIC-2010-224',
    modalidad: '',
    id_especialidad: 'ISIE-CEN-2022-02',
    periodo_egreso: '',
    nombre: {
      nombre: '',
      apellido_paterno: '',
      apellido_materno: ''
    },
    edad: '',
    curp: '',
    sexo: ''
  }
}

export default function useSignUp() {
  const router = useRouter()
  const [error, setError] = useState()

  const initialValues = {
    ...SCHEMA
  }

  const validationSchema = Yup.object({
    username: Yup.string('Ingresa tu usuario').required(
      'El usuario es requerido'
    ),
    password: Yup.string('Enter your password').required('Password is required')
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values)
    const data = await createGraduate(values)
    const response = await data.json()

    console.log(response)

    setSubmitting(true)
    // router.push(`/login/graduate`)
  }

  return {
    error,
    initialValues,
    validationSchema,
    handleSubmit
  }
}
