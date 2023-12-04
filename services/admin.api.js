export const updateAdmin = async (id, data) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/administrativo/${id}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
  )
}
