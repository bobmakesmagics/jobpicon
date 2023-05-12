import React, { useState, Fragment, useMemo } from 'react';

import { JobPostFilterModal } from 'components/Modal/JobPostFilterModal';
import { JobPostsTable } from './JobPostTable';
import { JobPostSort } from './JobPostSort';
import { JobPostSearch } from './JobPostSearch';

export default function JobPosts(): JSX.Element {

  const [modalVisible, setModalVisible] = useState(false);

  const handleOnClose = () => setModalVisible(false)


  return (
    <div
      style={{
        background: 'white',
        border: '1px solid rgba(1,1,1,.16)',
        borderRadius: '0.8rem',
        padding: '50px',
      }}
      className="px-4 sm:px-6 max-w-full lg:px-8"
    >
      <div className="mb-2">

        <div className="flex items-center justify-between">
          {/* <div>
            <h1 className="text-xl font-semibold text-gray-900">Job Openings</h1>
          </div> */}
           <JobPostSearch />
          <div className="mt-4 mb-4 flex justify-self-auto space-x-4">
          
            <JobPostSort />
            <div className="flex">
              <button
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                onClick={() => setModalVisible(true)}
              >
                Filter
              </button>
              <JobPostFilterModal
                onClose={handleOnClose}
                visible={modalVisible}
              />

            </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Job
          </button>
        </div>

      </div>
      <JobPostsTable />
     

    </div>
  )
}