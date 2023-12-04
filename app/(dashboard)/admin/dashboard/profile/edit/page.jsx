'use client'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import useAdminData from '@/hooks/useAdminData'
import EditAvatar from '@/components/EditAvatar'
import EditableGeneralData from '@/components/EditableAdminGeneralData'
import EditableProfileData from '@/components/EditableAdminProfileData'
import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import EditableTextField from '@/components/EditableTextField'
import CircularProgressWithLabel from '@/components/CircularProgressWithLabel'
import { updateAdmin } from '@/services/admin.api'

export default function EditProfile() {
  const { general, personal, schema, id, status, update } = useAdminData()
  const [error, setError] = useState()

  const initialValues = {
    ...schema
  }

  const handleSubmit = async (values) => {
    await updateAdmin(id, values)
    update({ id, ...values })
  }

  if (status === 'loading') return <CircularProgressWithLabel />

  return (
    <Paper
      component='section'
      bgcolor='red'
      elevation={4}
      sx={{
        width: {
          xs: '100%',
          md: '85%',
          xl: '65%'
        },
        margin: '0 auto',
        padding: '50px'
      }}
    >
      {/* <Box
        sx={{
          width: {
            xs: 100,
            md: 200
          },
          height: {
            xs: 100,
            md: 200
          }
        }}
      >
        <EditAvatar alternText={general.nombre} imageSource='/' />
      </Box> */}
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, handleBlur, touched, errors }) => (
          <Form
            style={{
              display: 'flex',
              rowGap: '50px',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            <EditableGeneralData>
              <EditableTextField
                name='nombre'
                label='Nombre'
                type='text'
                id='nombre'
                defaultValue={general.nombre}
                onChange={handleChange}
              />

              <EditableTextField
                name='cargo'
                label='Cargo'
                type='text'
                id='cargo'
                defaultValue={general.cargo}
                onChange={handleChange}
              />
            </EditableGeneralData>
            <EditableProfileData>
              <EditableTextField
                name='email'
                label='Correo Institucional'
                type='text'
                id='email'
                defaultValue={personal.email}
                onChange={handleChange}
              />

              <EditableTextField
                name='correo.correo_oficina'
                label='Correo de Oficina'
                type='text'
                id='correo.correo_oficina'
                defaultValue={personal.correo_trabajo}
                onChange={handleChange}
              />

              <EditableTextField
                name='correo.correo_personal'
                label='Correo Personal'
                type='text'
                id='correo.correo_personal'
                defaultValue={personal.correo_personal}
                onChange={handleChange}
              />

              <EditableTextField
                name='telefono.telefono_oficina'
                label='Telefono de Oficina'
                type='text'
                id='telefono.telefono_oficina'
                defaultValue={personal.telefono_trabajo}
                onChange={handleChange}
              />
              <EditableTextField
                name='telefono_personal'
                label='Telefono Personal'
                type='text'
                id='telefono.telefono_personal'
                defaultValue={personal.telefono_personal}
                onChange={handleChange}
              />
              <EditableTextField
                name='fecha_nacimiento'
                label='Fecha de Nacimiento'
                type='date'
                id='fecha_nacimiento'
                defaultValue={personal.fecha_nacimiento}
                onChange={handleChange}
              />
            </EditableProfileData>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={isSubmitting}
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  )
}
