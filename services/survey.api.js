export const getSurveys = async () =>
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/survey/`, {
    next: { revalidate: 0 }
  })
