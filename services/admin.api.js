export const updateAdmin = async (id, data) =>
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/administrativo/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

export const createAdmin = async (data) =>
  await fetch(`${process.env.NEXT_PUBLIC_BACKEDN_URL}/usersdb/add/admin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
