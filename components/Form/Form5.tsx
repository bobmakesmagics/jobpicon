import { useContext, useEffect, useRef, useState } from 'react'
import { StepContext, IStepContext } from 'components/Step/StepProvider';
import { clickedCancel, clickedNext } from 'utils/utils'

import { JobSitesContext } from 'components/Context/JobSitesContext'
import clsx from 'clsx'
import React from 'react'

import PromoteCard from 'components/ImportantComponent/PromoteCard'

export function Form5() {
  const { jobLists, setJobLists } = useContext(JobSitesContext)
  const { currentStep, setCurrentStep } = useContext<IStepContext>(StepContext);

  const toggleSelected = (id) => {
    const updatedJobLists = jobLists.map((job) => {
      if (job.id === id) {
        return { ...job, selected: !job.selected }
      }
      return job
    })

    setJobLists(updatedJobLists)
  }

  return (
    <>
      <div
        style={{
          width: '100%', // Add this line
          background: 'white',
          border: '1px solid rgba(1,1,1,.16)',
          borderRadius: '0.8rem',
          padding: '30px 40px 30px 40px',
          maxWidth: '1250px', // Update this line
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
        }}
        className={`form mx-auto form-${
          currentStep === 5 ? 'active' : 'inactive'
        }`}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-8 divide-y divide-gray-200"
          style={{ width: '100%' }} // Add this line
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
                  4 of 6: The sites to host on.
                </h2>
              </div>

              <ul role="list" className="cards-container">
                {jobLists.map((item) => (
                  <PromoteCard
                    key={item.id}
                    onToggle={toggleSelected}
                    {...item}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={(e) => clickedCancel(e, setCurrentStep)}
                className="focus rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none
                focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Back
              </button>
              <button
                type="button"
                onClick={(e) => clickedNext(e, setCurrentStep)}
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
