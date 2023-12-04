import { useSession } from 'next-auth/react'

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
    cargo,
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
    cargo: '',
    curp: '',
    telefono: {},
    correo: {},
    direccion: {}
  }

  return {
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
      periodo_egreso
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
      periodo_egreso,
      cargo,
      curp,
      telefono,
      correo,
      direccion
    },
    status,
    update
  }
}
