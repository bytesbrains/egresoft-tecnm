'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.min.css'
import { themeJson } from '@/utils/survey-theme'
import CircularProgressWithLabel from '@/components/CircularProgressWithLabel'
import Box from '@mui/material/Box'
import ButtonDraftSurvey from '@/components/ButtonDraftSurvey'
import confetti from 'canvas-confetti'
import useGraduateData from '@/hooks/useGraduateData'

const fetchSurvey = async (survey_id, user_id) => {
  try {
    const userAnswers = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/survey/get/status_surveys/${user_id}?status_survey=pending`
    )
    const answersData = await userAnswers.json()

    const currentSurvey = answersData?.find(
      (survey) => survey.surveyId === survey_id
    )

    console.log(user_id)

    if (!currentSurvey || answersData.length === 0) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/survey/start?survey_id=${survey_id}&user_id=${user_id}`,
        {
          method: 'POST',
          next: { revalidate: 0 }
        }
      )
      const data = await response.json()
      console.log(data, 'nuevos datos')
      return { data: data.survey.answer, answersData: data.answer }
    }

    console.log(currentSurvey, 'tenias ya datos')
    return { data: currentSurvey.survey.answer, answer: currentSurvey.answer }
  } catch (e) {
    console.error(e)
  }
}

const saveSurveyData = async (survey, surveyId, userId) => {
  try {
    const data = survey.data
    data.pageNo = survey.currentPageNo

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/survey/update/${surveyId}/${userId}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          updated_answer: { data }
        })
      }
    )
    const data2 = await response.json()
    console.log(data2)
    confetti()
  } catch (error) {
    console.error(error)
  }
}

export default function SurveyComponent({ params }) {
  const { userId } = useGraduateData()
  const [json, setJson] = useState({})
  const [prevData, setPrevData] = useState({})
  const [loading, setLoading] = useState(true)
  const surveyId = params.survey
  const [surveyData, setSurveyData] = useState({})

  const fetchSurveyData = useCallback(async () => {
    try {
      const { data, answer } = await fetchSurvey(surveyId, userId)
      setPrevData(answer || {})
      setJson(data)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }, [surveyId])

  useEffect(() => {
    fetchSurveyData()
  }, [fetchSurveyData])

  useMemo(() => {
    const newSurvey = new Model(json)
    newSurvey.applyTheme(themeJson)
    newSurvey.data = prevData?.data
    newSurvey.currentPageNo = prevData?.data?.pageNo
    newSurvey.onComplete.add(() => saveSurveyData(newSurvey, surveyId, userId))
    setSurveyData(newSurvey)
  }, [json, surveyId, userId])

  if (loading) return <CircularProgressWithLabel />

  return (
    <Box sx={{ position: 'relative' }}>
      <Survey model={surveyData} />
      <ButtonDraftSurvey
        handleDraft={() => saveSurveyData(surveyData, surveyId, userId)}
      />
    </Box>
  )
}
