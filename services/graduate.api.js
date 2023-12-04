export const updateGraduate = async (id, data) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/egresado/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}
