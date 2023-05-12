import React, { createContext, useState } from 'react'

export interface IStepContext {
  currentStep: number
  setCurrentStep: (value: number) => void
  jobData: { [key: string]: FormDataEntryValue }
  setJobData: (value: { [key: string]: FormDataEntryValue }) => void
}

export const StepContext = createContext<IStepContext>({
  currentStep: 1,
  setCurrentStep: () => {},
  jobData: {},
  setJobData: () => {},
})

function StepProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [currentStep, setCurrentStep] = useState(1)
  const [jobData, setJobData] = useState({})

  return (
    <StepContext.Provider
      value={{ currentStep, setCurrentStep, jobData, setJobData }}
    >
      {children}
    </StepContext.Provider>
  )
}

export default StepProvider
