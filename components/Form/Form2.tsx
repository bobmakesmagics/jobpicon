import setInputHeight from 'utils/setInputHeight'
import { useContext, useEffect, useRef, useState, useCallback } from 'react'
import { StepContext, IStepContext } from 'components/Step/StepProvider'
import Tagify from '@yaireo/tagify'
import { Tag } from 'components/ImportantComponent/Tag'
import { clickedCancel, clickedNext } from 'utils/utils'
import { tagList } from 'utils/const'

// import Steps from 'components/Steps/Steps1';
import React from 'react'
import { selectJobs, addJob } from 'store/slices/jobSlice'
import { useDispatch, useSelector } from 'react-redux'

const settings: any = {
  whitelist: tagList,
  enforceWhitelist: true,
  editTags: 0,
  transformTag: function (tagData) {
    const foundTag = tagList.find(
      (whitelistTag) =>
        whitelistTag.toLowerCase() === tagData.value.toLowerCase()
    )

    if (foundTag) {
      tagData.value = foundTag
    }
  },

  dropdown: {
    classname: 'tags-look',
    enabled: 0,
    closeOnSelect: false,
  },
}

export function Form2() {
  const jobs = useSelector(selectJobs)
  const { currentStep, setCurrentStep, jobData, setJobData } =
    useContext<IStepContext>(StepContext)

  const dispatch = useDispatch()

  const inputAbout = useRef<HTMLTextAreaElement>(null)
  const typeRef = useRef<HTMLInputElement>(null)

  interface FormDataType {
    [key: string]: FormDataEntryValue
  }
  const jobBody: FormDataType = {}
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget as HTMLFormElement)
    formData.forEach((value, property: string) => (jobBody[property] = value))

    setJobData({ ...jobData, ...jobBody })
    dispatch(addJob({ ...jobData, ...jobBody }))
    clickedNext(event, setCurrentStep)
    //Form submission happens here
  }
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState([])
  const [focusAddSkill, setFocusAddSkill] = useState(false)

  const deleteTag = (e, tag, index) => {
    setTags([...tags.filter((t, i) => i !== index)])
  }

  const handleSelectOption = (tag) => {
    setTagInput(tag)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  const onChange = useCallback((e) => {
    console.log(e)
    console.log(
      'CHANGED:',
      e.detail.tagify.value, // Array where each tag includes tagify's (needed) extra properties
      e.detail.tagify.getCleanValue(), // Same as above, without the extra properties
      e.detail.value // a string representing the tags
    )
  }, [])

  const optionsSelected = (selectedOption, e) => {
    if (selectedOption && e.button === 0) {
      const lowerCaseTags = tags.map((tag) => tag.toLowerCase())
      if (lowerCaseTags.includes(selectedOption.toLowerCase())) {
        setTagInput('')
      } else {
        setTags([...tags, selectedOption])
        setTagInput('')
      }
    }
  }

  const onAddSkillFocus = () => {
    setFocusAddSkill(true)
  }

  useEffect(() => {
    if (typeRef.current) {
      const tagInput = new Tagify(typeRef.current, settings)
    }
  }, [focusAddSkill])

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
          currentStep === 2 ? 'active' : 'inactive'
        }`}
      >
        <form
          onSubmit={handleSubmit}
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
                  1 of 6: Tell us about the role
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
                    className="text-md inline-block font-bold font-medium text-gray-700"
                  >
                    Pitch<span style={{ color: 'gray' }}>*</span>
                  </label>
                  <p
                    style={{ marginBottom: '10px' }}
                    className="mt-1 text-sm text-gray-500"
                  >
                    What is your pitch for this job.
                  </p>
                  <div className="mt-1">
                    <textarea
                      onChange={(event) => setInputHeight(event, '100px')}
                      id="about"
                      name="about"
                      rows={3}
                      className="block h-auto w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      defaultValue={jobData.about as string}
                    />
                  </div>
                </div>
              </div>

              <div
                style={{ marginTop: '40px' }}
                className="space-y-6 sm:space-y-7"
              >
                <div style={{}} className="sm:col-span-6">
                  <label
                    htmlFor="skills"
                    className="text-md inline-block font-bold text-gray-700"
                  >
                    Skills
                  </label>
                  <p
                    style={{ marginBottom: '10px' }}
                    className="mt-1 text-sm text-gray-500"
                  >
                    Add skill keywords to make your job more visible to the
                    right candidates.
                  </p>
                  <div
                    style={{
                      gap: '6px',
                    }}
                  >
                    <div className="tagBigDiv flex flex-wrap items-start">
                      {tags?.map((tag, index) => {
                        return (
                          <button
                            key={index}
                            type="button"
                            onClick={(e) => deleteTag(e, tag, index)}
                          >
                            <Tag tag={tag} index={index} />
                          </button>
                        )
                      })}
                      <input
                        type="text"
                        id="skills"
                        ref={typeRef}
                        name="skills"
                        defaultValue={jobData.skills as string}
                        className="customTag"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              {/* <div><h2>Preview</h2></div> */}
              {/* <div> */}
              <button
                type="button"
                onClick={(e) => clickedCancel(e, setCurrentStep)}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Back
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Next
              </button>
              {/* </div> */}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
