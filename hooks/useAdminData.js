import { useSession } from 'next-auth/react'

export default function useAdminData() {
  const { data: session, status, update } = useSession()
  const {
    id,
    nombre,
    direccion,
    genero,
    cargo,
    correo,
    telefono,
    email,
    fecha_nacimiento
  } = session?.user || {
    nombre: '',
    cargo: '',
    correo: {},
    telefono: {},
    direccion: {},
    genero: '',
    email: '',
    fecha_nacimiento: ''
  }

  return {
    general: {
      nombre,
      cargo
    },
    personal: {
      email,
      ...correo,
      ...telefono,
      fecha_nacimiento
    },
    id: id,
    session,
    schema: {
      nombre,
      email,
      cargo,
      direccion,
      correo,
      genero,
      telefono,
      fecha_nacimiento
    },
    status,
    update
  }
}
