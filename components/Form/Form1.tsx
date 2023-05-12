import { Transition } from '@headlessui/react'
import { Fragment, useContext, useRef } from 'react'
import { StepContext, IStepContext } from 'components/Step/StepProvider'
import Steps from 'components/Step/Steps1'
import Steps2 from 'components/Step/Steps2'
import { clickedCancel, clickedNext } from 'utils/utils'
import { SelectField } from 'components/ImportantComponent/Fields'
import FieldSelect from 'components/SelectField/SelectField'
import WorkPlaceType from 'components/SelectField/WorkplaceTypeSelectField'
import React from 'react'
import CitySelect from 'components/SelectField/CitySelect'
import StateSelect from 'components/SelectField/StateSelect'
import CountrySelect from 'components/SelectField/CountrySelect'

interface FormDataType {
  [key: string]: string
}

export function Form1() {
  const { currentStep, setCurrentStep, jobData, setJobData } =
    useContext<IStepContext>(StepContext)
  // const dispatch = useDispatch()

  const inputJobTitle = useRef<HTMLInputElement>(null)
  const inputMinSalary = useRef<HTMLInputElement>(null)
  const inputMaxSalary = useRef<HTMLInputElement>(null)

  const formData: FormDataType = { jobTitle: '', minSalary: '', maxSalary: '' }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    formData.jobTitle = inputJobTitle?.current?.value || ''
    formData.minSalary = inputMinSalary?.current?.value || ''
    formData.maxSalary = inputMaxSalary?.current?.value || ''
    setJobData(formData)
    clickedNext(event, setCurrentStep)
  }

  return (
    <>
      <div
        style={{
          background: 'white',
          border: '1px solid rgba(1,1,1,.16)',
          borderRadius: '0.8rem',
          padding: '20px',
        }}
        className={`form mx-auto max-w-7xl form-${
          currentStep === 1 ? 'active' : 'inactive'
        }`}
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-8 sm:space-y-5">
            <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-3">
              <div>
                <h3
                  style={{ fontWeight: 'bold', padding: '0' }}
                  className="leading text-lg font-medium text-gray-900"
                >
                  Hire top talent, quickly with ease
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  #1 in improving the quality of hires
                </p>
              </div>
              <div className="space-y-6 sm:space-y-5">
                {/* Job Title */}
                <div>
                  <label
                    htmlFor="job-title"
                    className="block cursor-pointer text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="job-title"
                    id="job-title"
                    ref={inputJobTitle}
                    defaultValue={jobData.jobTitle}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Salary */}
                <div className="flex items-start space-x-4">
                  <div className="w-1/2">
                    <label
                      htmlFor="min-salary"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Minimum Salary
                    </label>
                    <input
                      type="number"
                      id="min-salary"
                      name="min-salary"
                      ref={inputMinSalary}
                      defaultValue={jobData.minSalary}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="max-salary"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Maximum Salary
                    </label>
                    <input
                      type="number"
                      id="max-salary"
                      name="max-salary"
                      ref={inputMaxSalary}
                      defaultValue={jobData.maxSalary}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Workplace Type and Job Type */}
                <div className="flex items-start space-x-4">
                  <div className="w-1/2">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Workplace Type
                    </label>
                    <div className="mt-1" style={{ width: '100%' }}>
                      <WorkPlaceType />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Job Type
                    </label>
                    <div className="mt-1" style={{ width: '100%' }}>
                      <FieldSelect />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <div
                    className="flex
               
                items-start space-x-4"
                  >
                    <div className="w-1/2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        City
                      </label>
                      <div className="mt-1" style={{ width: '100%' }}>
                        <CitySelect />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        State
                      </label>
                      <div className="mt-1" style={{ width: '100%' }}>
                        <StateSelect />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Country
                    </label>
                    <div className="mt-1" style={{ width: '100%' }}>
                      <CountrySelect />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
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
