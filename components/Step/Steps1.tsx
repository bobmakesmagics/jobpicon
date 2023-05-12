import React, { useContext } from 'react'

import { CheckIcon } from '@heroicons/react/24/solid'
import { StepContext } from './StepProvider'

const steps: { id: string; name: string; href: string }[] = [
  { id: '1', name: 'Job details', href: '#' },
  { id: '2', name: 'Application form', href: '#' },
  { id: '3', name: 'Additional Qualifications', href: '#' },
  { id: '4', name: 'Job Description', href: '#' },
  { id: '5', name: 'Hosting Sites', href: '#' },
  { id: '6', name: 'Preview', href: '#' },
]

export default function Steps(): JSX.Element {
  const { currentStep, setCurrentStep } = useContext(StepContext)

  const getStatus = (id: string) => {
    if (parseInt(id) < currentStep) {
      return 'complete'
    } else if (parseInt(id) === currentStep) {
      return 'current'
    } else {
      return 'upcoming'
    }
  }
  return (
    <nav
      style={{
        overflow: 'hidden',
        backgroundColor: 'white',
        margin:"20px",
        marginBottom: '16px',
        
      }}
      aria-label="Progress"
    >
      <ol
        role="list"
        className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
      >
        {steps.map((step, stepIdx) => {
          const status = getStatus(step.id)

          return (
            <li key={step.id} className="relative md:flex md:flex-1">
              {status === 'complete' ? (
                <a
                  href={step.href}
                  onClick={() => setCurrentStep(parseInt(step.id))}
                  className="group flex w-full items-center"
                >
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                      <CheckIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </a>
              ) : status === 'current' ? (
                <a
                  href={step.href}
                  className="flex items-center px-6 py-4 text-sm font-medium"
                  aria-current="step"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                    <span className="text-indigo-600">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-indigo-600">
                    {step.name}
                  </span>
                </a>
              ) : (
                <a href={step.href} className="group flex items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                      <span className="text-gray-500 group-hover:text-gray-900">
                        {step.id}
                      </span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </a>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  <div
                    className="absolute top-0 right-0 hidden h-full w-6 md:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
