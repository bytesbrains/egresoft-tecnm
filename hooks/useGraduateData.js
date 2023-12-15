import { useSession } from 'next-auth/react'
import {
  CARRERAS,
  ESPECIALIDADES,
  SCHEMA,
  schoolEmail,
  validationSchema
} from '@/utils/validationSchemas/graduateValidationSchema'

export default function useGraduateData() {
  const { data: session, status, update } = useSession()
  const {
    id,
    email,
    nombre,
    sexo,
    edad,
    id_carrera,
    modalidad,
    periodo_egreso,
    curp,
    telefono,
    correo,
    direccion
  } = session?.user || {
    id: '',
    sexo: '',
    edad: '',
    email: '',
    nombre: {},
    id_carrera: '',
    modalidad: '',
    periodo_egreso: '',
    curp: '',
    telefono: {},
    correo: {},
    direccion: {}
  }

  const [newPeriodoEgreso, egreso_year] = periodo_egreso.split(' ')

  return {
    userId: id,
    general: {
      id,
      ...nombre,
      curp,
      id_carrera,
      modalidad
    },
    personal: {
      edad,
      sexo,
      ...correo,
      ...telefono,
      ...direccion
    },
    academic: {
      email,
      egreso_year,
      periodo_egreso: newPeriodoEgreso
    },
    session,
    schema: {
      id,
      email,
      nombre,
      sexo,
      edad,
      id_carrera,
      modalidad,
      periodo_egreso: newPeriodoEgreso,
      egreso_year,
      curp,
      telefono,
      correo,
      direccion
    },
    status,
    update,
    CARRERAS
  }
}
