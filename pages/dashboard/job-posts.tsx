import BreadCrump from 'components/ImportantComponent/BreadCrump'
import Dropwdown from 'components/ImportantComponent/Dropdown'
import JobLists from 'components/ImportantComponent/JobLists'
import { JobPostSort } from 'components/JobRelated/JobPostSort'
import {
  MagnifyingGlassIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import JobPosts from 'components/JobRelated/JobPostDashBoard'
import Dashboard from 'components/Dashboard'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import JobPostFilterModal from 'components/Modal/JobDescriptionModal'
import NormalDropdown from 'components/ImportantComponent/NormalDropdown'

const pages = [
  { name: 'Posted Jobs', href: '/dashboard/job-posts', current: false },
]

export default function JobPost() {
  const [modalVisible, setModalVisible] = useState(false)
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const searchInputRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortKey, setSortKey] = useState('') // Add this line to handle the sortKey state

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSortChange = (newSortKey) => {
    setSortKey(newSortKey)
  }

  const handleSearchClick = () => {
    setIsSearchVisible(true)
  }
  const handleOnClose = () => setModalVisible(false)
  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target)
    ) {
      setIsSearchVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <Dashboard pageNum={1}>
        <main
          style={{
            background: 'whitesmoke',
            height: 'fit-content',
            minHeight: '100%',
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
              <h3 style={{ fontSize: '23px' }}>Posted Jobs</h3>
              <div className="flex items-center" style={{ gap: '10px' }}>
                <div className={`relative ${isSearchVisible ? 'w-32' : 'w-0'}`}>
                  {isSearchVisible && (
                    <input
                      style={{
                        border: '1.3px solid rgb(210 214 220 / 1)',
                        height: '40px',
                      }}
                      className={`rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 ${
                        isSearchVisible ? 'w-32' : ''
                      }`}
                      ref={searchInputRef}
                      type="text"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Search..."
                    />
                  )}
                </div>
                <button
                  style={{}}
                  className={`bg-whitesmoke text-black inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    isSearchVisible ? 'hidden' : ''
                  }`}
                  onClick={handleSearchClick}
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
                <NormalDropdown onSortChange={handleSortChange} />
                <button
                  style={{ height: '42px' }}
                  className="whateverDiv inline-flex items-center justify-center rounded-md border bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm  focus:outline-none "
                  onClick={() => setModalVisible(true)}
                >
                  Filter
                </button>
              </div>
            </div>
            <div className="normal_list">
              <JobLists searchTerm={searchTerm} sortKey={sortKey} />
            </div>
          </div>
        </main>
      </Dashboard>
      <JobPostFilterModal onClose={handleOnClose} isOpen={modalVisible} />
    </>
  )
}
