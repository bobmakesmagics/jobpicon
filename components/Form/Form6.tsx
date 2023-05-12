import { useContext, useEffect, useRef, useState } from 'react'
import { StepContext, IStepContext } from 'components/Step/StepProvider';
import { clickedCancel } from 'utils/utils'
import React from 'react'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { SubmitConfirmationModal } from 'components/Modal/SubmitConfirmationModal'
import Image from 'next/image';

const mockDescription =
  'In ac arcu mattis tincidunt nunc elementum ultrices. Pretium dui id iaculis quam. Nulla pretium amet libero id in vel velit tincidunt. Nullam magna eros ac eu tincidunt. Lacus erat vel rhoncus pulvinar lacus porttitor montes amet. Sed pellentesque a consequat dolor. Adipiscing quisque faucibus odio cursus tortor lacinia. Eu quis pharetra nunc et neque turpis pulvinar ullamcorper. Turpis elit consequat sed lorem. Id diam nunc et augue tristique. Enim semper quis eget commodo arcu dolor orci. Amet accumsan habitant libero sed mattis vulputate dolor consequat. Aliquet quam a quis tempor ultrices urna. Tempor quis neque enim nunc aliquam egestas cras tempus. Adipiscing fermentum nunc potenti risus donec vitae nullam et. Maecenas hendrerit proin nunc est dolor nisl aliquet nulla. In suscipit nulla egestas enim mollis tempor. Condimentum quisque elementum eu senectus ultrices odio pharetra tellus. Donec ac quam rhoncus odio adipiscing habitant sed lacus. Vestibulum sem cras in mi ornare elit ultricies facilisis ac. Aliquet pharetra nunc adipiscing mauris porttitor neque pharetra ut. Lorem aliquam dignissim tellus nec. Odio urna amet ultricies nisl ut sit. Nullam enim rhoncus rhoncus semper at ut tincidunt libero. Nisl gravida varius lacus et dignissim quis cursus posuere. Habitant felis ullamcorper fermentum in. Ut sed a ut volutpat eleifend id facilisis. Ultrices tellus ultrices nisi cursus in auctor ut. Tortor sapien placerat netus sit et blandit. Id tortor ac tortor nisi egestas. Aliquet sit nibh facilisis luctus eget faucibus pellentesque sit. Quisque molestie ut consectetur pretium eget fermentum at ultricies. Velit condimentum ut amet a suscipit mattis. Lorem sagittis adipiscing tempor nam lectus eget vitae lorem. Commodo eget amet arcu at. A vel eget ullamcorper lectus euismod mattis. Suscipit urna nec feugiat tellus pretium nulla fusce. Diam maecenas morbi in et dictum massa at pulvinar. Enim nulla egestas sit eget aenean eget. Velit condimentum ut amet a suscipit mattis. Lorem sagittis adipiscing tempor nam lectus eget vitae lorem. Commodo eget amet arcu at. A vel eget ullamcorper lectus euismod mattis. Suscipit urna nec feugiat tellus pretium nulla fusce. Diam maecenas morbi in et dictum massa at pulvinar. Enim nulla egestas sit eget aenean eget.'

const skills = [
  'React',
  'HTML/CSS',
  'JavaScript',
  'Node',
  'Express',
  'SQL',
  'MongoDB',
  'Prisma',
  'TailwindCSS',
]
const jobBoards = [
  { img: '/images/linkedin-logo.png', name: 'Linkedin', kind: 'basic' },
  { img: '/images/indeed-logo.png', name: 'Indeed', kind: 'basic' },
  { img: '/images/wellfound-logo.png', name: 'Wellfound', kind: 'basic' },
]
const additionalQualifications = ['Background Check', 'Location', 'Visa Status']

const SkillTag = ({ skillName }) => {
  return <div className="skillTagDiv">{skillName}</div>
}

const JobBoardsTag = ({ jobBoard }) => {
  return (
    <div className="jobBoardTagDiv">
      <Image
        width={30}
        height={30}
        objectFit="contain"
        src={jobBoard?.img}
        alt="Job Board"
      />

      <p className="jobBoardP" style={{ margin: '0px' }}>
        {jobBoard?.name}
      </p>
    </div>
  )
}


export function Form6() {
  const { currentStep, setCurrentStep } = useContext<IStepContext>(StepContext);
  const [modalOpen, setModalOpen] = useState(false)

  const handlePencilSquareIconClick = (num: number) => {
    setCurrentStep(num)
  }

  return (
    <>
      <SubmitConfirmationModal open={modalOpen} setOpen={setModalOpen} />
      <div
        style={{
          background: 'white',
          border: '1px solid rgba(1,1,1,.16)',
          borderRadius: '0.8rem',
          padding: '30px 40px 30px 40px',
          maxWidth: '1400px', // Add max-width here
          minWidth: '900px', // Add a minimum width here
          margin: '0 auto', // Center the div
        }}
        className={`form max-w-10xl mx-auto form-${
          currentStep === 6 ? 'active' : 'inactive'
        }`}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
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
                  5 of 6: Preview.
                </h2>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '2%',
                  width: '100%',
                  minHeight: '900px',
                  height: 'fit-content',
                }}
              >
                <div
                  className="preview_divs"
                  style={{
                    width: '74%',
                    height: 'fit-content',
                    minHeight: '900px',
                  }}
                >
                  <h3 className="text-black hover-underline">
                    Job Description
                  </h3>
                  <PencilSquareIcon
                    className="icon text-gray bigPSI float-right"
                    onClick={() => handlePencilSquareIconClick(4)}
                  />
                  <div
                    className="preview_text"
                    style={{
                      width: '100%',
                      height: 'fit-content',
                      padding: '20px 0',
                    }}
                  >
                    {mockDescription}
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '35px',
                    width: '35%',
                    minHeight: '900px',
                    height: 'fit-content',
                  }}
                >
                  <div
                    className="preview_divs"
                    style={{
                      width: '100%',
                      height: 'fit-content',
                      minHeight: '150px',
                    }}
                  >
                    <h3 className="text-black hover-underline">Overview</h3>
                    <PencilSquareIcon
                      className="icon text-gray smallPSI float-right"
                      onClick={() => handlePencilSquareIconClick(1)}
                    />
                    <div
                      className="preview_text"
                      style={{
                        width: '100%',
                        height: 'fit-content',
                        padding: '20px 0 0',
                      }}
                    >
                      <div className="lines-container">
                        <span className="titleSF">Title:</span>{' '}
                        <span className="titleEqulas">Software Engineer</span>{' '}
                        <br />
                        <span className="titleSF">Company:</span>{' '}
                        <span className="titleEqulas">Maron</span> <br />
                        <span className="titleSF">Location:</span>{' '}
                        <span className="titleEqulas">United States</span>{' '}
                        <br />
                        <span className="titleSF">Job Type:</span>{' '}
                        <span className="titleEqulas">Full-time</span> <br />
                        <span className="titleSF">Wokrplace Type:</span>{' '}
                        <span className="titleEqulas">Remote</span> <br />
                      </div>
                    </div>
                  </div>
                  <div
                    className="preview_divs"
                    style={{
                      width: '100%',
                      height: 'fit-content',
                      minHeight: '150px',
                    }}
                  >
                    <h3 className="text-black hover-underline">Skills</h3>
                    <PencilSquareIcon
                      className="icon text-gray smallPSI float-right"
                      onClick={() => handlePencilSquareIconClick(2)}
                    />
                    <div
                      className="preview_text"
                      style={{
                        width: '100%',
                        height: 'fit-content',
                        padding: '20px 0 0',
                      }}
                    >
                      {skills.map((name) => (
                        <SkillTag key={name} skillName={name} />
                      ))}
                    </div>
                  </div>
                  <div
                    className="preview_divs"
                    style={{
                      width: '100%',
                      height: 'fit-content',
                      minHeight: '150px',
                    }}
                  >
                    <h3 className="text-black hover-underline">Job Board</h3>
                    <PencilSquareIcon
                      className="icon text-gray smallPSI float-right"
                      onClick={() => handlePencilSquareIconClick(5)}
                    />
                    <div
                      className="preview_text"
                      style={{
                        width: '100%',
                        height: 'fit-content',
                        padding: '20px 0 0',
                      }}
                    >
                      {jobBoards.map((jobBoard) => (
                        <JobBoardsTag key={jobBoard.name} jobBoard={jobBoard} />
                      ))}
                    </div>
                  </div>
                  <div
                    className="preview_divs"
                    style={{
                      width: '100%',
                      height: 'fit-content',
                      minHeight: '150px',
                    }}
                  >
                    <h3 className="text-black hover-underline">
                      Additional Qualifications
                    </h3>
                    <PencilSquareIcon
                      className="icon text-gray smallPSI float-right"
                      onClick={() => handlePencilSquareIconClick(3)}
                    />
                    <div
                      className="preview_text"
                      style={{
                        width: '100%',
                        height: 'fit-content',
                        padding: '20px 0 0',
                      }}
                    >
                      {additionalQualifications.map((el, index) => (
                        <p key={index} className="additionalQualificationP">{el}</p>
                      ))}
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
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}


