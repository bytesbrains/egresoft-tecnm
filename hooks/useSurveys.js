import { getSurveys } from '@/services/survey.api'
import { useState, useEffect } from 'react'

export default function useSurveys() {
  const [surveys, setSurveys] = useState([])

  useEffect(() => {
    const getData = async () => await getSurveysList()
    getData()
  }, [])

  const getSurveysList = async () => {
    try {
      const response = await getSurveys()
      const data = await response.json()
      setSurveys(data)
    } catch (e) {
      console.error(e)
    }
  }

  return {
    surveys
  }
}
