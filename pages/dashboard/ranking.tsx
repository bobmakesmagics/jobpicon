import BreadCrump from 'components/ImportantComponent/BreadCrump'
import Dropdown from 'components/ImportantComponent/Dropdown'
import Pagination from 'components/ImportantComponent/Pagination'
import GridListR from 'components/RankingPage/GridListR'
import NormalList from 'components/RankingPage/NormalList'
import {
  QuestionMarkCircleIcon,
  QueueListIcon,
} from '@heroicons/react/24/outline'
import JobPosts from 'components/JobRelated/JobPostDashBoard'
import TailwindD from 'components/Dashboard'
import React from 'react'

const pages = [
  { name: 'Posted Jobs', href: '/dashboard/job-posts', current: false },
  { name: 'Backend Developer', href: '#', current: false },
  { name: 'Ranking', href: '#', current: false },

]

const peopleForGridList = [
  {
    id: 1,
    name: 'Yavuz Abasiyanik',
    location: 'United States',
    email: 'abasiyanikyavuz@gmail.com',
    skills: ['Python', 'AWS', 'JAVA', 'SQL'],
    yearsOfExperience: 12,
    degree: 'Bachelor',
    title: 'Data Engineer',
    tags: ['Best portfolio'],
    telephone: '+1-202-555-0170',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rank: 1,
  },
  {
    id: 2,
    name: 'Yavuz Abasiyanik',
    location: 'United States',
    email: 'abasiyanikyavuz@gmail.com',
    skills: ['Python', 'AWS', 'JAVA', 'SQL'],
    yearsOfExperience: 12,
    degree: 'Bachelor',
    title: 'Data Engineer',
    tags: ['Best portfolio'],
    telephone: '+1-202-555-0170',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rank: 2,
  },
  {
    id: 3,
    name: 'Yavuz Abasiyanik',
    location: 'United States',
    email: 'abasiyanikyavuz@gmail.com',
    skills: ['Python', 'AWS', 'JAVA', 'SQL'],
    yearsOfExperience: 12,
    degree: 'Bachelor',
    title: 'Data Engineer',
    tags: ['Best portfolio'],
    telephone: '+1-202-555-0170',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rank: 3,
  },
  {
    id: 4,
    name: 'Yavuz Abasiyanik',
    location: 'United States',
    email: 'abasiyanikyavuz@gmail.com',
    skills: ['Python', 'AWS', 'JAVA', 'SQL'],
    yearsOfExperience: 12,
    degree: 'Bachelor',
    title: 'Data Engineer',
    tags: ['Best portfolio'],
    telephone: '+1-202-555-0170',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rank: 4,
  },
]

export default function JobPost() {
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

            <div className="header_of_ranking">
              <h3 style={{ fontSize: '23px' }}>Top Applicants</h3>
              <div className="flex items-center " style={{ gap: '21px' }}>
                <QuestionMarkCircleIcon className="h-7 w-7 text-gray-500" />
                <Dropdown />
              </div>
            </div>
            <div className="grid_list">
              <GridListR people={peopleForGridList} />
            </div>
            <div className="normal_list">
              <NormalList />
            </div>
          </div>
        </main>
      </TailwindD>
    </>
  )
}
