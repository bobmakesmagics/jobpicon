import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

import ThreeDots from 'components/Modal/threeDots'

export default function GridListR({ people }: any): JSX.Element {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {people.map((person) => (
        <li
            style={{border:".7px solid #d1d5db"}}
          key={person.email}
          className="relative col-span-1 flex flex-col rounded-lg bg-white text-center shadow"
        >
          <p
            className="absolute top-0 left-0 rounded-tl-lg px-3 py-2 text-xs font-medium text-gray-600"
            style={{ fontSize: '19px', margin: '7px' }}
          >
            {person.rank}
          </p>

          {/* Add the ThreeDots component */}
          <div style={{margin:"7px"}} className="absolute top-0 right-0 p-1">
            <ThreeDots  />
          </div>

          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src={person.image}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {person.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.location}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  {person.degree}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="grid_list_bottom_part">
              <div>
                <h3 className="mt-6 text-sm font-medium text-gray-900">
                  {person.yearsOfExperience} years{' '}
                  <span
                    style={{ width: '1px', height: '16px', color: '#D1D5DB' }}
                  >
                    |
                  </span>{' '}
                  <span className="ptag" style={{ fontSize: '13px' }}>
                    {person.title}
                  </span>
                </h3>
              </div>
              <button className="call_button">Call</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
