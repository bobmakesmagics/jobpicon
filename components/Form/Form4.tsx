import { useContext, useState } from 'react'
import { StepContext, IStepContext } from 'components/Step/StepProvider';
import { clickedCancel, clickedNext } from 'utils/utils'
import { qualifications, screeningQuestions } from 'utils/lists'
import RichTextEditor from '../RichTextEditor'

import React from 'react'
import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'

import Modal from 'components/Modal/JobDescriptionModal'

export function Form4() {
  const { currentStep, setCurrentStep } = useContext<IStepContext>(StepContext);
  const [open, setOpen] = useState([false, 0])
  const [isModalOpen, setIsModalOpen] = useState(false)

  // CKEditor
  const [isEditing, setIsEditing] = useState(false)
  const [paragraphContent, setParagraphContent] = useState(
    'Your initial paragraph content'
  )
  const [tempContent, setTempContent] = useState(paragraphContent)

  const handleEditButtonClick = () => {
    setIsEditing(true)
    setTempContent(paragraphContent)
  }

  const handleSaveChanges = () => {
    setIsEditing(false)
    setParagraphContent(tempContent)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }
  // CK Editor Stops here

  const handleButtonClick = () => {
    setIsModalOpen(true)
  }


  return (
    <>
      {open && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
      <div
        style={{
          background: 'white',
          border: '1px solid rgba(1,1,1,.16)',
          borderRadius: '0.8rem',
          padding: '30px 40px 30px 40px',
          maxWidth: '1400px', 
          margin: '0 auto', 
        }}
        className={`form max-w-8xl mx-auto form-${
          currentStep === 4 ? 'active' : 'inactive'
        }`}
      >
        <form className="space-y-8 divide-y divide-gray-200">
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
                  3 of 6: Maron, Job Description.
                </h2>
              </div>
              <div
                style={{
                  marginTop: '40px',
                  width: '100%',
                  minHeight: '600px',
                  height: 'fit-content',
                  borderRadius: '1.5rem',
                  padding: '50px',
                  border: '1px solid #D1D5DB',
                }}
                className="space-y-6 sm:space-y-7"
              >
                <div
                  style={{
                    width: '100%',
                    height: 'fit-content',
                    padding: '10px 0px',
                    borderBottom: '1px solid #D1D5DB',
                    display: 'flex',

                    justifyContent: 'space-between',

                    alignItems: 'center',
                    gap: '15px',
                  }}
                >
                  <h3 style={{ fontWeight: 'bold' }}>Job Description</h3>

                  <div
                    style={{
                      alignItems: 'center',
                      display: 'flex',
                      gap: '15px',
                    }}
                  >
                    {isEditing ? (
                      <>
                        <button
                          type="button"
                          onClick={handleCancel}
                          className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={handleSaveChanges}
                          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Save Changes
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          style={{ width: '31px', height: '31px' }}
                          className="w-30 h-30 flex items-center justify-center rounded-full bg-white bg-opacity-20 p-1 text-gray-300 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          onClick={handleEditButtonClick}
                        >
                          <span className="sr-only">Edit Square</span>
                          <PencilSquareIcon
                            className="h-6 w-6 text-indigo-500"
                            aria-hidden="true"
                          />
                        </button>

                        <button
                          type="button"
                          style={{ width: '31px', height: '31px' }}
                          className="w-30 h-30 flex items-center justify-center rounded-full bg-white bg-opacity-20 p-1 text-gray-300 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          onClick={handleButtonClick}
                        >
                          <span className="sr-only">Settings</span>
                          <AdjustmentsHorizontalIcon
                            className="h-6 w-6 text-indigo-500"
                            aria-hidden="true"
                          />
                        </button>

                        <button
                          type="button"
                          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Update text
                          <ArrowPathIcon
                            className="ml-2 -mr-1 h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                {isEditing ? (
                  <RichTextEditor
                    data={tempContent}
                    onChange={(data) => setTempContent(data)}
                  />
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: paragraphContent }}></p>
                )}
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={(e) => clickedCancel(e, setCurrentStep)}
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
