import Steps from 'components/Step/Steps1';
import JobDescriptionGoalsProvider from 'components/Context/JobDescriptionGoalsContext';
import JobSitesProvider from 'components/Context/JobSitesContext';
import { CreateJob } from 'components/JobRelated/CreateJob';
import StepProvider from 'components/Step/StepProvider';
import React from 'react';
import { useState } from 'react';
import TailwindD from 'components/Dashboard';

export default function Home() {
  const [currentStepDashBoard, setCurrentStepDashBoard] = useState(1)

  return (
    <>
      <StepProvider>
        <JobSitesProvider>
          <JobDescriptionGoalsProvider>
            <div>
              <TailwindD pageNum={2}>
                <main
                  style={{
                    background: 'whitesmoke',
                    height: '100%',
                    minHeight: '93.4vh',
                  }}
                  className="flex flex-1 flex-col"
                >
                  <Steps />
                  <div
                    className={`${
                      currentStepDashBoard === 1 ? 'flex' : ''
                    } py-6`}
                  >
                    <div className="mx-auto max-w-full px-4 sm:px-6 md:px-8">
                      <CreateJob
                        setCurrentStepDashBoard={setCurrentStepDashBoard}
                      />
                    </div>
                  </div>
                </main>
              </TailwindD>
            </div>
          </JobDescriptionGoalsProvider>
        </JobSitesProvider>
      </StepProvider>
    </>
  )
}
