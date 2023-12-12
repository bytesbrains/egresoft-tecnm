import * as Yup from 'yup'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i // Expresión regular para validar el formato de correo electrónico

const idRegex = /^(?:[A-Za-z])?\d{8}(?![A-Za-z])$/

const nameRegex = /^[A-Za-z\s]+$/

export const schoolEmail = '@minatitlan.tecnm.mx'

export const validationSchema = Yup.object().shape({
  id: Yup.string(),
  email: Yup.string().matches(
    idRegex,
    'El correo debe contenter 8 a 9 caracteres, no puede contener @'
  ),
  nombre: Yup.string()
    .matches(nameRegex, 'Ingrese solo letras y espacios en el nombre')
    .required('El nombre es obligatorio'),
  cargo: Yup.string(),
  fecha_nacimiento: Yup.date().nullable(),
  genero: Yup.string(),
  correo: Yup.object().shape({
    correo_personal: Yup.string()
      .matches(emailRegex, 'Ingrese un correo electrónico personal válido')
      .required('El correo personal es obligatorio')
  }),
  telefono: Yup.object().shape({
    telefono_personal: Yup.string()
      .matches(
        /^\+[0-9]{1,3}[0-9]{6,14}$/,
        'Ingrese un número de teléfono móvil válido (10 dígitos)'
      )
      .required('El teléfono es obligatorio')
  })
})

export const SCHEMA = {
  user: {
    id: '',
    email: '',
    disabled: true,
    password: '',
    role: 'graduate'
  },
  admin_data: {
    nombre: '',
    cargo: '',
    fecha_nacimiento: '',
    genero: '',
    direccion: null,
    correo: {
      correo_personal: 'string',
      correo_trabajo: null
    },
    telefono: {
      telefono_personal: 'string',
      telefono_trabajo: null
    }
  }
}
