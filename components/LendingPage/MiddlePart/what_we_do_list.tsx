import { CheckIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface WhatWeDoListProps {
  title: string
  body: string
}

const items: WhatWeDoListProps[] = [
  {
    title: 'Invite team members',
    body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    title: 'Notifications',
    body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    title: 'List view',
    body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    title: 'Boards',
    body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    title: 'Keyboard shortcuts',
    body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    title: 'Reporting',
    body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    title: 'Calendars',
    body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    title: 'Mobile app',
    body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
]

function WhatWeDoList(): JSX.Element {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            style={{
              display: 'flex',
              gap: '5px',
            }}
            key={index}
            className="min-w-[260px] max-w-[300px] rounded-md bg-white p-4"
          >
            <div style={{ width: 'fit-content' }} className="text-green-500">
              <CheckIcon className="h-6 w-6" />
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <h3
                style={{ margin: '0px' }}
                className="gridListTitle ml-2 text-xl font-semibold"
              >
                {item.title}
              </h3>
              <p
                style={{ marginTop: '5px' }}
                className="gridListBody line-clamp-3 mt-4 text-gray-600"
              >
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatWeDoList
