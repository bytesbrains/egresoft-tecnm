import { useState } from 'react'
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
    id_carrera: '',
    modalidad: '',
    id_especialidad: '',
    periodo_egreso: '',
    nombre: {
      nombre: '',
      apellido_paterno: '',
      apellido_materno: ''
    },
    correo: {
      correo_personal: '',
      correo_trabajo: null
    },
    direccion: null,
    telefono: null,
    edad: '',
    curp: '',
    sexo: '',
    year: ''
  }
}

const ESPECIALIDADES = {
  'COMPUTO EN LA NUBE': 'ISIE-CEN-2022-02',
  'CALIDAD Y PRODUCTIVIDAD': 'IINE-CYP-2022-01',
  'INNOVACION EN SISTEMAS ORGANIZACIONALES': 'EGEE-ISO-2022-01',
  'INGENIERÍA EN PROCESOS': 'IQUE-IPR-2022-01',
  'EVALUACION Y CONTROL DE CONTAMINANTES': 'IAME-ECC-2022-01',
  'INSTRUMENTACION Y CONTROL DE PROCESOS': 'IELE-IPC-2022-01',
  'GESTION DE REDES DE VOZ Y DATOS': 'ISIE-CRV-2022-02',
  'MANTENIMIENTO EN SISTEMAS ELECTROMECANICOS': 'IEME-MSE-2023-01',
  'DIRECCION ESTRATEGICA DEL CAPITAL HUMANO': 'LADE-DCH-2022-01'
}

const CARRERAS = {
  'Ingeniería En Gestión Empresarial': 'IGEM-2009-201',
  'Licenciatura En Administración': 'LADM-2010-234',
  'Ingeniería Electromecánica': 'IEME-2010-210',
  'Ingeniería Electrónica': 'IELC-2010-211',
  'Ingeniería Ambiental': 'IAMB-2010-206',
  'Ingeniería Industrial': 'IIND-2010-227',
  'Ingeniería Química': 'IQUI-2010-232',
  'Ingeniería en Sistemas Computacionales': 'ISIC-2010-224'
}

const initialValues = {
  ...SCHEMA
}

const schoolEmail = '@minatitlan.tecnm.mx'

export default function useGraduateSignUp() {
  const [error, setError] = useState()
  const currentYear = new Date().getFullYear()
  const [openModal, setOpenModal] = useState(false)

  const validationSchema = Yup.object({
    egresado_data: Yup.object({
      nombre: Yup.object({
        nombre: Yup.string()
          .matches(/^[A-Za-z\s]+$/, 'El nombre solo puede contener letras')
          .required('El nombre es requerido'),
        apellido_paterno: Yup.string()
          .matches(
            /^[A-Za-z\s]+$/,
            'El apellido paterno solo puede contener letras'
          )
          .required('El apellido paterno es requerido'),
        apellido_materno: Yup.string()
          .matches(
            /^[A-Za-z\s]+$/,
            'El apellido materno solo puede contener letras'
          )
          .required('El apellido materno es requerido')
      }),
      correo: Yup.object({
        correo_personal: Yup.string()
          .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Ingrese un correo electrónico válido'
          )
          .required('El correo electrónico es requerido')
      }),
      id_especialidad: Yup.string().required(
        'El ID de especialidad es requerido'
      ),
      periodo_egreso: Yup.string().required(
        'El periodo de egreso es requerido'
      ),
      edad: Yup.number()
        .typeError('La edad debe ser un número')
        .positive('La edad debe ser un número positivo')
        .integer('La edad debe ser un número entero')
        .required('La edad es requerida'),
      curp: Yup.string()
        .matches(
          /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
          'La CURP debe contener 18 caracteres'
        )
        .length(18, 'La CURP debe tener 18 caracteres')
        .uppercase('La CURP debe estar en mayúsculas')
        .required('La CURP es requerida'),
      sexo: Yup.string().required('El sexo es requerido'),
      modalidad: Yup.string().required('La modalidad es requerida'),
      id_carrera: Yup.string().required('La carrera es requerida'),
      year: Yup.number()
        .typeError('Debe ser un año válido')
        .required('El año es requerido')
        .min(1972, 'El año mínimo es 1972')
        .max(currentYear, `El año máximo es ${currentYear}`)
    }),
    user: Yup.object().shape({
      id: Yup.string()
        .matches(
          /^(?:[A-Za-z])?\d{8}(?![A-Za-z])$/,
          'El número de control es inválido. No puede acabar con letras o que sea menor de 8 a 9 caracteres'
        )
        .required('El número de control es requerido'),
      email: Yup.string().matches(
        /^(?:[A-Za-z])?\d{8}(?![A-Za-z])$/,
        'El correo debe contenter 8 a 9 caracteres, no puede contener @'
      ),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y tener al menos 8 caracteres.'
        )
        .required('La contraseña es requerida'),
      passwordConfirm: Yup.string()
        .test(
          'passwords-match',
          'Las contraseñas deben coincidir',
          function (value) {
            return this.parent.password === value
          }
        )
        .required('Confirme su contraseña')
    })
  })

  const handleSubmit = async (values) => {
    console.log(values)
    const {
      egresado_data: { periodo_egreso, year, ...restEgresado },
      user: { email, ...restUser }
    } = { ...values }

    const newPeriodoEgreso = `${periodo_egreso} ${year}`
    const newSchoolEmail = `${email}${schoolEmail}`

    const parsedValues = {
      egresado_data: { ...restEgresado, periodo_egreso: newPeriodoEgreso },
      user: { ...restUser, email: newSchoolEmail }
    }

    console.log(parsedValues)

    // const data = await createGraduate(parsedValues)
    // const response = await data.json()

    // console.log(response)

    setOpenModal(true)
  }

  return {
    error,
    initialValues,
    validationSchema,
    handleSubmit,
    ESPECIALIDADES,
    CARRERAS,
    openModal
  }
}
