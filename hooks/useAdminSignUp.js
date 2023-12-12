import { createAdmin } from '@/services/admin.api'
import { useState } from 'react'
import {
  SCHEMA,
  validationSchema,
  schoolEmail
} from '@/utils/validationSchemas/adminValidationSchema'

export default function useAdminSignUp() {
  const [error, setError] = useState()
  const [openModal, setOpenModal] = useState(false)

  const handleSubmit = async (values) => {
    console.log(values)

    // console.log(parsedValues)

    // const data = await createAdmin(parsedValues)
    // const response = await data.json()

    // console.log(response)

    // setOpenModal(true)
  }

  return {
    error,
    initialValues: { ...SCHEMA },
    validationSchema,
    handleSubmit,
    openModal
  }
}
