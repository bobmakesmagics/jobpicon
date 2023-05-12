// @ts-nocheck
import React, { createContext, useState } from 'react'

interface IJobSitesContext {
  jobLists: any
  setJobLists: (value: any) => void
}

export const JobSitesContext = createContext<Partial<IJobSitesContext>>()

function JobSitesProvider({ children }) {
  const [jobLists, setJobLists] = useState([
    {
      id: 1,
      name: 'LinkedIn',
      imageUrl: '/images/linkedin_logo.png',
      description:
        'A professional networking platform where users can connect with others and find jobs.',
      userCount: 'Over 774 million users',
      website: 'https://www.linkedin.com',
      selected: false,
    },
    {
      id: 2,
      name: 'Indeed',
      imageUrl: '/images/indeed_logo.webp',
      description:
        'A job search engine that allows users to find and apply for jobs from various employers.',
      userCount: 'Over 250 million users',
      website: 'https://www.indeed.com',
      selected: false,
    },
    {
      id: 3,
      name: 'Wellfound',
      imageUrl: '/images/wellfound_logo.webp',
      description:
        'A platform focused on connecting startups with talented job seekers.',
      userCount: 'Over 2.5 million users',
      website: 'https://www.wellfound.com',
      selected: false,
    },
  ])

  return (
    <JobSitesContext.Provider value={{ jobLists, setJobLists }}>
      {children}
    </JobSitesContext.Provider>
  )
}

export default JobSitesProvider
