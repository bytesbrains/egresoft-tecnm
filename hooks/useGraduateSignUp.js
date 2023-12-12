import { useState } from 'react'
import { createGraduate } from '@/services/graduate.api'
import {
  CARRERAS,
  ESPECIALIDADES,
  SCHEMA,
  schoolEmail,
  validationSchema
} from '@/utils/validationSchemas/graduateValidationSchema'

export default function useGraduateSignUp() {
  const [error, setError] = useState()
  const [openModal, setOpenModal] = useState(false)

  const handleSubmit = async (values) => {
    console.log(values)
    const {
      egresado_data: { periodo_egreso, year, ...restEgresado },
      user: { passwordConfirm, email, ...restUser }
    } = { ...values }

    const newPeriodoEgreso = `${periodo_egreso} ${year}`
    const newSchoolEmail = `${email}${schoolEmail}`

    const parsedValues = {
      egresado_data: { ...restEgresado, periodo_egreso: newPeriodoEgreso },
      user: { ...restUser, email: newSchoolEmail }
    }

    console.log(parsedValues)

    const data = await createGraduate(parsedValues)
    const response = await data.json()

    console.log(response)

    setOpenModal(true)
  }

  return {
    error,
    initialValues: { ...SCHEMA },
    validationSchema,
    handleSubmit,
    ESPECIALIDADES,
    CARRERAS,
    openModal
  }
}
