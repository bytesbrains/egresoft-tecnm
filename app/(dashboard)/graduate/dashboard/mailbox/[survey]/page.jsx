'use client'

import { useEffect, useState } from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.min.css'
import { themeJson } from '@/utils/survey-theme'

const fetchSurvey = async () => {
  try {
    const response = await fetch('http://localhost:3000/data.json')
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export default function SurveyComponent() {
  const [json, setJson] = useState({})

  useEffect(() => {
    const getData = async () => setJson(await fetchSurvey())
    getData()
  }, [])

  const survey = new Model(json)
  survey.applyTheme(themeJson)
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3))
  })
  return <Survey model={survey} />
}

// import { useEffect, useState } from 'react'
// import { Paper, Button, Box } from '@mui/material'
// import CircularProgress from '@mui/material/CircularProgress'

// const fetchSurvey = async () => {
//   try{
//     const response = await fetch('http://localhost:3000/data.json')
//     const data = await response.json()
//     return data
//   }catch(e){
//     console.error(e)
//   }

// }

// export default function Survey({ params }) {
//   const { survey } = params
//   const [data,setData] = useState()

//   useEffect(()=>{
//     const getData = async () => setData(await fetchSurvey())
//     getData()
//   },[])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const data = new FormData(e.currentTarget)
//     for (const [name, value] of data) {
//       console.log(name, ':', value)
//     }
//   }

//   if(data === undefined) return (
//     <Box component='div' sx={{display:'flex', minHeight:'200px', alignItems:'center', justifyContent:'center'}}>
//       <CircularProgress/>
//       </Box>
//   )

//   return (
//     <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
//       <Paper component='form' sx={{display:'flex', alignItems:'center', flexDirection:'column',maxWidth:'800px', padding:'25px', mb:'30px'}} elevation={4} onSubmit={handleSubmit}>
//       {data?.map((survey) => (
//         <div key={survey.section}>
//           <h2
//             style={{
//               display: 'flex',
//               textAlign: 'center',
//               flexDirection: 'column'
//             }}
//           >
//             {survey.section}
//             <span>{survey.section_title}</span>
//           </h2>
//           {survey.questions.map(({id, question, type, options})=>{
//             if(type === 'text') return (
//               <OpenQuestion key={question+id} question={question} type={type}/>
//             )
//             if(type === 'radio') return (
//               <MultipleChoiceQuestion key={question+id} question={question} type={type} options={options} />
//             )
//           })
//         }
//         </div>
//       ))}
//       <Button type='submit' variant="contained" color='secondary'>Mandar informacion</Button>
//     </Paper>
//     </div>
//   )
// }

// const MultipleChoiceQuestion = ({question,type, options }) => {
//   return (
//     <div>
//       <h3>{question}</h3>
//       {options.map((option, index) => (
//         <div key={`${question+type+index}`}>
//           <input
//             type={type}
//             id={`option-${index}`}
//             name={question}
//             value={option}
//           />
//           <label htmlFor={`option-${index}`}>{option}</label>
//         </div>
//       ))}
//     </div>
//   )
// }

// const OpenQuestion = ({question, type}) => {
//   return (
//     <div>
//       <h3>{question}</h3>
//         <div>
//           <input
//             type={type}
//             id='option-1'
//             name={question}
//           />
//         </div>
//     </div>
//   )
// }
