/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { job } from '../../utils/jobsMockData'
import React from 'react'

function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function getSectionTitle(key: string): string {
  const mapping = {
    onsiteRemote: 'Onsite-Remote',
    dateCreated: 'Date Posted',
  }
  return mapping[key] || capitalizeFirstLetter(key)
}

function getApplicantsRange(value: number): string {
  if (value >= 1 && value <= 50) {
    return '1-50'
  } else if (value >= 51 && value <= 200) {
    return '51-200'
  } else if (value >= 201 && value <= 500) {
    return '201-500'
  } else {
    return '500+'
  }
}

function getDateRangeLabel(date: Date): string {
  const now = new Date()
  const past24hours = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  const pastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const pastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

  if (date > past24hours) {
    return 'Last 24 hours'
  } else if (date > pastWeek) {
    return 'Past week'
  } else if (date > pastMonth) {
    return 'Past month'
  } else {
    return 'Anytime'
  }
}

interface JobPostFilterModalProps {
  visible: boolean
  onClose: () => void
}

export function JobPostFilterModal({ visible, onClose }: JobPostFilterModalProps): JSX.Element {
  const sections = Object.keys(job[0]).filter((key) => key !== 'id')

  const cancelButtonRef = useRef(null)

  const checkboxContainerRef = useRef(null)

  const [filterValues, setFilterValues] = useState({})

  const handleShowResult = () => {
    const filteredData = job.filter((job) => {
      return Object.entries(filterValues).every(
        ([key, values]: [string, string[]]) =>
          values.length === 0 || values.includes(job[key])
      )
    })
    console.log(filteredData)
  }

  const handleReset = () => {
    setFilterValues({})
    checkboxContainerRef.current
      .querySelectorAll('input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.checked = false
      })
  }

  return (
    <>
      {visible && (
        <Transition.Root show={visible} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-30"
            initialFocus={cancelButtonRef}
            onClose={onClose}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-30 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start ">
                        <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left ">
                          <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-bold leading-6 text-gray-900"
                            >
                              Filter
                            </Dialog.Title>
                            <button
                              onClick={onClose}
                              className=" text-base font-bold text-gray-500"
                            >
                              X
                            </button>
                          </div>

                          <div
                            className="h-96 overflow-visible overflow-y-scroll"
                            ref={checkboxContainerRef}
                          >
                            {sections.map((section) => {
                              let valuesArray = []

                              if (section === 'dateCreated') {
                                valuesArray = [
                                  'Anytime',
                                  'Past week',
                                  'Last 24 hours',
                                  'Past month',
                                ]
                              } else if (section === 'applicants') {
                                valuesArray = [
                                  '1-50',
                                  '51-200',
                                  '201-500',
                                  '500+',
                                ]
                              } else {
                                // Create a new Set object to store unique values for this section
                                const uniqueValues = new Set(
                                  job.map((item) => item[section])
                                )
                                // Convert the Set to an array
                                valuesArray = Array.from(uniqueValues)
                              }

                              return (
                                <div key={section}>
                                  <h2 className="pt-4 font-bold">
                                    {getSectionTitle(section)}
                                  </h2>
                                  <ul className="grid grid-cols-2 border-b-2 border-gray-200 py-2 text-sm ">
                                    {valuesArray.map((value) => (
                                      <li
                                        key={`${value}-${section}`}
                                        className="py-2"
                                      >
                                        <div>
                                          <input
                                            type="checkbox"
                                            id={`${value}-${section}`}
                                            className="form-checkbox h-5 w-5 border-gray-400 text-green-700 focus:ring-green-700"
                                            onChange={(e) => {
                                              const sectionValues =
                                                filterValues[section] || []
                                              const updatedValues = e.target
                                                .checked
                                                ? [...sectionValues, value]
                                                : sectionValues.filter(
                                                    (v) => v !== value
                                                  )
                                              setFilterValues({
                                                ...filterValues,
                                                [section]: updatedValues,
                                              })
                                            }}
                                          />
                                          <label
                                            htmlFor={`${value}-${section}`}
                                            className="px-2"
                                          >
                                            {section === 'dateCreated'
                                              ? getDateRangeLabel(value)
                                              : section === 'applicants'
                                              ? value
                                              : getSectionTitle(section) ===
                                                'Onsite-Remote'
                                              ? value
                                                  .split(/(?=[A-Z])/)
                                                  .join('-')
                                              : capitalizeFirstLetter(value)}
                                          </label>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleShowResult}
                      >
                        Show result
                      </button>

                      <button
                        onClick={handleReset}
                        className="pr-4 text-sm font-bold text-gray-500"
                      >
                        Reset
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  )
}
