import React, { useState } from 'react'

const tabs = [
  { name: 'Simple', href: '#', id: 0 },
  { name: 'Detailed', href: '#', id: 1 },
  { name: 'Compare', href: '#', id: 2 },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs(): JSX.Element {
  const [currentTab, setCurrentTab] = useState(0)

  const handleTabClick = (tabId: any) => {
    setCurrentTab(tabId)
  }
  return (
    <div className="mt-0 mb-12 flex w-full justify-center">
      <div className="hidden sm:flex">
        <nav className="isolate flex rounded-lg" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              onClick={() => handleTabClick(tab.id)}
              className={classNames(
                tab.id === currentTab
                  ? 'border-b-2 border-white font-bold text-white'
                  : 'font-semibold text-white hover:text-gray-200',
                'group relative min-w-[120px] flex-1 cursor-pointer overflow-hidden whitespace-nowrap py-4 px-4 text-center font-display text-base font-medium hover:bg-gray-800 focus:z-10 sm:text-lg'
              )}
              aria-current={tab.id === currentTab ? 'page' : undefined}
            >
              <span>{tab.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
