'use client'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import EditAvatar from '@/components/EditAvatar'
import EditableGeneralData from '@/components/EditableGeneralData'
import EditableProfileData from '@/components/EditableProfileData'
import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import EditableTextField from '@/components/EditableTextField'
import CircularProgressWithLabel from '@/components/CircularProgressWithLabel'
import useGraduateData from '@/hooks/useGraduateData'
import EditableAcademicData from '@/components/EditableAcademicData'
import { updateGraduate } from '@/services/graduate.api'

export default function EditProfile() {
  const { general, personal, academic, schema, status, update } =
    useGraduateData()
  const [error, setError] = useState()
  
  const handleSubmit = async (values) => {
    console.log(values)
    await updateGraduate(general.id, values)
    update({ ...values })
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
                name='nombre.nombre'
                label='Nombre'
                type='text'
                id='nombre.nombre'
                defaultValue={general.nombre}
                onChange={handleChange}
              />
              <EditableTextField
                name='nombre.apellido_paterno'
                label='Apellido paterno'
                type='text'
                id='nombre.apellido_paterno'
                defaultValue={general.apellido_paterno}
                onChange={handleChange}
              />
              <EditableTextField
                name='nombre.apellido_materno'
                label='Apellido materno'
                type='text'
                id='nombre.apellido_materno'
                defaultValue={general.apellido_materno}
                onChange={handleChange}
              />
              <EditableTextField
                name='id'
                label='Numero de control'
                type='text'
                id='id'
                defaultValue={general.id}
                onChange={handleChange}
              />

              <EditableTextField
                name='curp'
                label='Curp'
                type='text'
                id='curp'
                defaultValue={general.curp}
                onChange={handleChange}
              />

              <EditableTextField
                name='id_carrera'
                label='Id Carrera'
                type='text'
                id='id_carrera'
                defaultValue={general.id_carrera}
                onChange={handleChange}
              />

              <EditableTextField
                name='modalidad'
                label='Modalidad'
                type='text'
                id='modalidad'
                defaultValue={general.modalidad}
                onChange={handleChange}
              />
            </EditableGeneralData>
            <EditableProfileData>
              <EditableTextField
                name='edad'
                label='Edad'
                type='text'
                id='edad'
                defaultValue={personal.edad}
                onChange={handleChange}
              />

              <EditableTextField
                name='sexo'
                label='Genero'
                type='text'
                id='sexo'
                defaultValue={personal.sexo}
                onChange={handleChange}
              />

              <EditableTextField
                name='correo.correo_personal'
                label='Correo personal'
                type='text'
                id='correo.correo_personal'
                defaultValue={personal.correo_personal}
                onChange={handleChange}
              />
              <EditableTextField
                name='correo.correo_trabajo'
                label='Correo de trabajo'
                type='text'
                id='correo.correo_trabajo'
                defaultValue={personal.correo_trabajo}
                onChange={handleChange}
              />

              <EditableTextField
                name='telefono.telefono_trabajo'
                label='Telefono de trabajo'
                type='text'
                id='telefono.telefono_trabajo'
                defaultValue={personal.telefono_trabajo}
                onChange={handleChange}
              />
              <EditableTextField
                name='telfono.telefono_personal'
                label='Telefono Personal'
                type='text'
                id='telefono.telefono_personal'
                defaultValue={personal.telefono_personal}
                onChange={handleChange}
              />
              <EditableTextField
                name='direccion.Direccion_1'
                label='Direccion 1'
                type='text'
                id='direccion.Direccion_1'
                defaultValue={personal.Direccion_1}
                onChange={handleChange}
              />
              <EditableTextField
                name='direccion.Direccion_2'
                label='Direccion 2'
                type='text'
                id='direccion.Direccion_2'
                defaultValue={personal.Direccion_2}
                onChange={handleChange}
              />
              <EditableTextField
                name='direccion.Direccion_3'
                label='Direccion 3'
                type='text'
                id='direccion.Direccion_3'
                defaultValue={personal.Direccion_3}
                onChange={handleChange}
              />
            </EditableProfileData>
            <EditableAcademicData>
              <EditableTextField
                name='email'
                label='Correo Academico'
                type='text'
                id='email'
                defaultValue={academic.email}
                onChange={handleChange}
              />
              <EditableTextField
                name='periodo_egreso'
                label='Periodo de egreso'
                type='text'
                id='periodo_egreso'
                defaultValue={academic.periodo_egreso}
                onChange={handleChange}
              />
            </EditableAcademicData>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              sx={{
                width: {
                  xs: '100%',
                  md: 'fit-content'
                },
                marginLeft: 'auto',
                marginRight: '0'
              }}
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
