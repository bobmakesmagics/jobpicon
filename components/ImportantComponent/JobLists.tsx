/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'
import { UserGroupIcon } from '@heroicons/react/24/outline'

interface Position {
  id: number
  title: string
  type: string
  location: string
  department: string
  closeDate: string
  closeDateFull: string
  applicants: number
}

const positions: Position[] = [
  {
    id: 1,
    title: 'Back End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
    applicants: 300,
  },
  {
    id: 2,
    title: 'Front End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
    applicants: 300,
  },
  {
    id: 3,
    title: 'User Interface Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
    applicants: 300,
  },
]

function sortPositions(positions: Position[], sortKey: string): Position[] {
  switch (sortKey) {
    case 'title_asc':
      return positions.sort((a, b) => a.title.localeCompare(b.title))
    case 'title_desc':
      return positions.sort((a, b) => b.title.localeCompare(a.title))
    case 'date_asc':
      return positions.sort(
        (a, b) =>
          new Date(a.closeDate).getTime() - new Date(b.closeDate).getTime()
      )
    case 'date_desc':
      return positions.sort(
        (a, b) =>
          new Date(b.closeDate).getTime() - new Date(a.closeDate).getTime()
      )
    case 'applicants_desc':
      return positions.sort((a, b) => b.applicants - a.applicants)
    case 'applicants_asc':
      return positions.sort((a, b) => a.applicants - b.applicants)
    default:
      return positions
  }
}



export default function JobLists({ searchTerm, sortKey }: any): JSX.Element {
  // Filter positions based on the search term
  // Sort the filtered positions based on the sortKey

  const filteredPositions = positions.filter((position) =>
    position.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedPositions = sortPositions(filteredPositions, sortKey)

  return (
    <div
      style={{ border: '.6px solid var(--border)' }}
      className="overflow-hidden bg-white shadow sm:rounded-md"
    >
      <ul role="list" className="divide-y divide-gray-200">
        {filteredPositions.map((position) => (
          <li key={position.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-maron-blue truncate text-sm font-medium">
                    {position.title}
                  </p>

                  <div className="ml-2 flex flex-shrink-0">
                    <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {position.type}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex sm:flex-wrap">
                    <p className="flex items-center text-sm text-gray-500">
                      <UsersIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.department}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <MapPinIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.location}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <UserGroupIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.applicants} applicants
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>
                      Closing on{' '}
                      <time dateTime={position.closeDate}>
                        {position.closeDateFull}
                      </time>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
