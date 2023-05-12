import Pagination from 'components/ImportantComponent/Pagination'
import ThreeDots from 'components/Modal/threeDots'

/* This example requires Tailwind CSS v2.0+ */
const people = [
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
    rank: 4,
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
    rank: 5,
  },
]

export default function NormalList() {
  return (
    <div className="">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div
              className=" shadow md:rounded-lg"
              style={{ border: '.7px solid #d1d5db' }}
            >
              <table
                className="min-w-full divide-y divide-gray-300"
                style={{ border: '.7px solid #d1d5db' }}
              >
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Experience
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Education
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap px-7 py-4 text-sm text-gray-500">
                        <div
                          style={{ fontSize: '17px' }}
                          className="text-gray-900"
                        >
                          {person?.rank}
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{person?.title}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {' '}
                          {person.yearsOfExperience} years
                        </div>
                      </td>{' '}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900"> {person.degree}</div>
                      </td>{' '}
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <ThreeDots />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
      <Pagination/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
