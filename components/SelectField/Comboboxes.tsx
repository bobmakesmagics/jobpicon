// CustomCombobox.js
import React, { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

interface PeopleType {
  id: number
  name: string
}

interface CustomComboboxProps {
  leftSide: string
  type: string
}

const people: PeopleType[] = [
  { id: 1, name: 'Leslie Alexander' },
  // More users...
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function CustomCombobox({ leftSide, type }: CustomComboboxProps) {
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState()

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ color: '#00000099', fontSize: '13px' }}>{leftSide}*</span>
      <Combobox
        as="div"
        value={selectedPerson}
        onChange={setSelectedPerson}
        className="mt-1"
      >
        <div className="relative">
          <Combobox.Input
            className="custom-width block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(person: PeopleType) => person?.name}
            style={{
              height: '32px',
              fontSize: '13px',
              fontWeight: '480',
              paddingRight: '2.5rem',
            }}
            placeholder={leftSide}
          />

          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>

          {filteredPeople.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  value={person}
                  className={({ active }) =>
                    classNames(
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                    )
                  }
                >
                  {({ active, selected }) => (
                    <>
                      <span
                        className={classNames(
                          'block truncate',
                          selected && 'font-semibold'
                        )}
                      >
                        {person.name}
                      </span>

                      {selected && (
                        <span
                          className={classNames(
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                            active ? 'text-white' : 'text-indigo-600'
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
    </div>
  )
}
