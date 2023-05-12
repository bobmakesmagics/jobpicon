import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ArrowSmallDownIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronRightIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any): string {
  return classes.filter(Boolean).join(' ')
}

export default function NormalDropdown({ onSortChange }: any): JSX.Element {
  const [selectedSort, setSelectedSort] = useState('Sort')

  const handleSortChange = (sortKey, sortLabel) => {
    onSortChange(sortKey)
    setSelectedSort(sortLabel)
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="whateverDiv inline-flex w-full justify-center rounded-md bg-custom px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ">
          {selectedSort}
          
          <ChevronDownIcon style={{marginTop:"2px"}} className="-mr-1 ml-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="ring-black absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleSortChange('title_asc', 'Title: A-Z')}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Title: A-Z
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleSortChange('title_desc', 'Title: Z-A')}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Title: Z-A
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() =>
                    handleSortChange('date_asc', 'Closing Date: Oldest')
                  }
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Closing Date: Oldest
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() =>
                    handleSortChange('date_desc', 'Closing Date: Newest')
                  }
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Closing Date: Newest
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() =>
                    handleSortChange('applicants_asc', 'Applicants: Fewest')
                  }
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Applicants: Fewest
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() =>
                    handleSortChange('applicants_desc', 'Applicants: Most')
                  }
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Applicants: Most
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
