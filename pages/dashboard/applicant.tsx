import BreadCrump from 'components/ImportantComponent/BreadCrump'
import Dropwdown from 'components/ImportantComponent/Dropdown'
import AreYouSure from 'components/Modal/AreYouSureModal'
import ThreeDots from 'components/Modal/threeDots'
import TailwindD from 'components/Dashboard'
import {
  ArrowUpRightIcon,
  EnvelopeIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'

const pages = [
  { name: 'Posted Jobs', href: '/dashboard/job-posts', current: false },
  { name: 'Nero', href: '#', current: false },
]

const skills = [
  'React',
  'HTML/CSS',
  'JavaScript',
  'Node',
  'Express',
  'SQL',
  'MongoDB',
  'Prisma',
  'React',
  'HTML/CSS',
  'JavaScript',
  'Node',
  'Express',
  'SQL',
  'MongoDB',
  'Prisma',
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

const SkillTag = ({ skillName }) => {
  return <div className="skillTagDiv">{skillName}</div>
}

export default function Applicant() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <TailwindD pageNum={1}>
        <main
          style={{
            background: 'whitesmoke',
            height: 'fit-content',
            minHeight: '93.4vh',
          }}
          className="flex flex-1 flex-col"
        >
          <div
            style={{
              padding: '50px 90px',
            }}
          >
            <div>
              <BreadCrump pages={pages} />
            </div>

            <div className="header_of_indivapplicant">
              <div className="big_div_left_applicant">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    padding: '30px 30px 20px',
                    borderBottom: '.6px solid #d1d5db',
                  }}
                >
                  <div className="flex items-center space-x-5">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          className="h-16 w-16 rounded-full"
                          src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                          alt=""
                        />
                        <span
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">
                        Ricardo Cooper
                      </h1>
                      <p className="text-sm font-medium text-gray-500">
                        Applied for{' '}
                        <a href="#" className="text-gray-900">
                          Front End Developer
                        </a>{' '}
                        on <time dateTime="2020-08-25">August 25, 2020</time>
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'center',
                    }}
                  >
                    <EnvelopeIcon
                      style={{ cursor: 'pointer' }}
                      className="h-5 w-5 rounded-full  text-gray-400 hover:text-gray-600 "
                      aria-hidden="true"
                    />
                    <TrashIcon
                      style={{ cursor: 'pointer' }}
                      className="h-5 w-5 rounded-full text-gray-400 hover:text-gray-600"
                      aria-hidden="true"
                      onClick={() => setShowModal(true)}
                    />

                    <ThreeDots />
                  </div>
                </div>
                <div
                  style={{ padding: '24px 30px' }}
                  className="px-5 py-5 sm:px-6"
                >
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Application for
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        Backend Developer
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        ricardocooper@example.com
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Salary expectation
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Phone
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        +1 555-555-5555
                      </dd>
                    </div>
                  </dl>
                  <div
                    style={{ flexDirection: 'column', gap: '15px' }}
                    className="big_div_of_s_w"
                  >
                    <h3 className="text-black w-fit ">
                      Maron&apos;s Opinion on Ricardo
                    </h3>

                    <div style={{ margin: '0' }} className="big_div_of_s_w">
                      <div className="strength_weaknesses">
                        <p className="tag-h1">Strength</p>
                        <p className="tag-p">
                          Opinion of MaronOpinion of MaronOpinion of
                          MaronOpinion of MaronOpinion of MaronOpinion of
                          MaronOpinion of Maron
                        </p>
                      </div>
                      <div className="strength_weaknesses">
                        <p className="tag-h1">Weakness</p>
                        <p className="tag-p">
                          Opinion of MaronOpinion of MaronOpinion of
                          MaronOpinion of MaronOpinion of MaronOpinion of
                          MaronOpinion of Maron
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: 'fit-content',
                      minHeight: '150px',
                      marginTop: '30px',
                    }}
                  >
                    <h3 className="text-black hover-underline">Skills</h3>
                    <div
                      style={{
                        width: '100%',
                        height: 'fit-content',
                        padding: '10px 0 0',
                      }}
                    >
                      {skills.map((name) => (
                        <SkillTag key={name} skillName={name} />
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: 'fit-content',
                      minHeight: '150px',
                      marginTop: '30px',
                    }}
                  >
                    <h3 className="text-black hover-underline">Cover Letter</h3>
                    <p
                      style={{
                        marginTop: '10px',
                        color: '#0f172a',
                        fontSize: '14px',
                      }}
                    >
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: '30%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '35px',
                }}
              >
                <div className="big_div_right_applicant justify-stretch mt-6 space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
                  <div className="big_div_right_applicant_small">
                    <h3
                      style={{ height: 'fit-content', fontSize: '18px' }}
                      className="text-black hover-underline mr-2 inline-block"
                    >
                      Information
                    </h3>
                    <span
                      style={{ height: 'fit-content' }}
                      className="inline-block h-auto rounded bg-green-500 px-2 py-1 text-sm text-white"
                    >
                      98% Match
                    </span>
                  </div>
                  <div className="right_below_div_applicant">
                    <dl className="grid grid-cols-1 gap-x-1 gap-y-4 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Rank
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">1th</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Years of Experience
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">12 years</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Education
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          Bachelor&apos;s Degree
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Location
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          United States
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div style={{ margin: '0' }} className="flex_list_div">
                    <div className="justify-stretch flex justify-between ">
                      <button
                        style={{ width: '49%' }}
                        type="button"
                        className="buttonn inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                      >
                        Portfolio{' '}
                        <ArrowUpRightIcon
                          style={{ marginLeft: '3px', strokeWidth: '2' }}
                          className="h-4 w-4"
                        />
                      </button>

                      <button
                        style={{ width: '49%' }}
                        type="button"
                        className="buttonn inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                      >
                        Linkedin{' '}
                        <ArrowUpRightIcon
                          style={{ marginLeft: '3px', strokeWidth: '2' }}
                          className="h-4 w-4"
                        />
                      </button>
                    </div>
                    <div className="justify-stretch flex flex-col">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Advance to offer
                      </button>
                    </div>
                  </div>
                </div>
                <div className="big_div_right_applicant justify-stretch mt-6 space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
                  <div className="big_div_right_applicant_small">
                    <h3
                      style={{ height: 'fit-content', fontSize: '18px' }}
                      className="text-black hover-underline mr-2 inline-block"
                    >
                      Comment
                    </h3>
                  </div>
                  <div style={{ margin: '0', padding: '10px 23px 25px' }}>
                    <p
                      style={{
                        marginTop: '10px',
                        color: '#0f172a',
                        fontSize: '14px',
                      }}
                    >
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {showModal && (
          <AreYouSure
            leftButton="Cancel"
            rightButton="Disqualify"
            title="Disqualify Applicant"
            message="Are you sure you want to disqualify this candidate? They will be removed from the rankings and tagged 'Rejected' in the job page."
            onClose={() => setShowModal(false)}
          />
        )}
      </TailwindD>
    </>
  )
}
