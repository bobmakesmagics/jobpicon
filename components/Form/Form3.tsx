import React, { useContext, useState } from 'react'
import { StepContext, IStepContext } from 'components/Step/StepProvider'
import { clickedCancel, clickedNext } from 'utils/utils'
import { QualificationTags } from 'components/Tag/QualificationTags'
import { ScreeningQuestionsTag } from 'components/Tag/ScreeninQuestionsTag'
import { qualifications, screeningQuestions } from 'utils/lists'
import { selectJobs, addJob } from 'store/slices/jobSlice'
import { useDispatch, useSelector } from 'react-redux'

export function Form3() {
  const jobs = useSelector(selectJobs)
  const { currentStep, setCurrentStep, jobData, setJobData } =
    useContext<IStepContext>(StepContext)
  const [tags, setTags] = useState([...qualifications])
  const [screeningQuestionsArr, setScreeningQuestionsArr] = useState([])

  const submit = (e) => {
    e.preventDefault()
  }

  const toggleTagActiveStatus = (tags, id, activeStatus) => {
    const newTags = [...tags]
    if (![2, 6, 9, 10, 17, 18].includes(id)) {
      newTags[id - 1].active = activeStatus
    }
    return newTags
  }

  const removeScreeningQuestion = (questions, index) => {
    const newArr = [...questions]
    newArr.splice(index, 1)
    return newArr
  }

  const addScreeningQuestion = (questions, screeningQuestions, id) => {
    const updatedQuestions = [...questions]

    if (
      id === 2 ||
      id === 6 ||
      id === 9 ||
      id === 10 ||
      id === 17 ||
      id === 18
    ) {
      const updatedQuestion = handleSpecialQuestions(id)
      updatedQuestions.push(updatedQuestion)
    } else {
      updatedQuestions.push(screeningQuestions[id - 1])
    }

    return updatedQuestions
  }

  const clickledQualificationTag = (e, id, active, index, removeOrCreate) => {
    e.preventDefault()

    if (removeOrCreate === 'remove') {
      const newTags = toggleTagActiveStatus(tags, id, false)
      const newArr = removeScreeningQuestion(screeningQuestionsArr, index)

      setScreeningQuestionsArr(newArr)
      setTags(newTags)
    } else if (removeOrCreate === 'create') {
      const newTags = toggleTagActiveStatus(tags, id, true)
      const newArr = addScreeningQuestion(
        screeningQuestionsArr,
        screeningQuestions,
        id
      )

      setScreeningQuestionsArr(newArr)
      setTags(newTags)
    }
  }

  const handleSpecialQuestions = (id) => {
    // Add logic to handle the special cases for id 2, 6, 9, 10, 17, and 18
    // You can update the properties like leftSide, rightSide, or any other relevant properties for these cases

    const updatedQuestion = { ...screeningQuestions[id - 1] } // Clone the original question

    // Modify the updatedQuestion properties as needed
    // For example, if you need to add specific information to the name property:
    if (id === 2) {
      updatedQuestion.name =
        'Do you have the following license or certification: [Specific License/Certification]?'
      updatedQuestion.leftSide = 'License/Certification'
    }

    return updatedQuestion
  }

  console.log(jobs, 'jobs')
  console.log(jobData, 'jobData')

  return (
    <>
      {/* <Steps/> */}
      <div
        style={{
          background: 'white',
          border: '1px solid rgba(1,1,1,.16)',
          borderRadius: '0.8rem',
          padding: '20px',
        }}
        className={`form mx-auto max-w-4xl form-${
          currentStep === 3 ? 'active' : 'inactive'
        }`}
      >
        <form
          onSubmit={(e) => submit(e)}
          className="space-y-8 divide-y divide-gray-200"
        >
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-3">
              <div
                style={{ paddingBottom: '10px' }}
                className="sm:border-b sm:border-gray-200"
              >
                <h2
                  style={{ fontWeight: 'bold', padding: '0' }}
                  className="leading text-lg font-medium text-gray-900"
                >
                  2 of 6: Receive high-quality candidates
                </h2>
                {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
                </p> */}
              </div>
              <div
                style={{ marginTop: '40px' }}
                className="space-y-6 sm:space-y-7"
              >
                <div className="sm:col-span-6">
                  <label
                    htmlFor="about"
                    className="text-md block font-bold font-medium text-black-700"
                  >
                    Additional Qualification
                    <span style={{ color: 'rgba(1,1,1,0.7)' }}>*</span>
                  </label>
                  <p
                    style={{ marginBottom: '10px' }}
                    className="mt-1 text-sm text-gray-500"
                  >
                    {/* <span className="text-gray-700"> */}
                    Please provide additional qualifications for your
                    candidates.
                    {/* </span> */}
                  </p>
                  <div>
                    {screeningQuestionsArr.map((item, index) => {
                      return (
                        <ScreeningQuestionsTag
                          id={item?.id}
                          key={item?.id}
                          active={item?.active}
                          name={item?.name}
                          leftSide={item?.leftSide}
                          rightSide={item?.rightSide}
                          idealAnswer={item?.idealAnswer}
                          clickledQualificationTag={clickledQualificationTag}
                          index={index}
                        />
                      )
                    })}
                  </div>
                  <div>
                    <span className="mt-1 text-sm text-black-500">
                      Add more qualifications:
                    </span>
                    <div
                      style={{
                        display: 'flex',
                        rowGap: '3px',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                      }}
                      className="mt-1 flex space-y-1"
                    >
                      {tags.map((el) => {
                        return (
                          <button
                            onClick={(e) =>
                              clickledQualificationTag(
                                e,
                                el?.id,
                                el?.active,
                                0,
                                'create'
                              )
                            }
                            type="button"
                            key={el?.id}
                            disabled={el?.active}
                          >
                            <QualificationTags
                              active={el?.active}
                              name={el?.name}
                            />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={(e) => clickedCancel(e, setCurrentStep)}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Back
              </button>
              <button
                type="button"
                onClick={(e) => clickedNext(e, setCurrentStep)}
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
