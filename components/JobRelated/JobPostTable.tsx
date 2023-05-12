import { job } from 'utils/jobsMockData';
import React from "react";

export function JobPostsTable(): JSX.Element {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  }

  return (
    <div className="mt-8">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
              Applicants
            </th>
            <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
              Title
            </th>
            <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
              Type
            </th>
            <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
              Status
            </th>
            <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
              Stage
            </th>
            <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
              Date Created
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {job.map((job) => (
            <tr key={job.id}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                {job.applicants}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div className="text-gray-900">{job.title}</div>
                <div className="text-gray-500">{job.location}</div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {job.type}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${job.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : job.status === 'Closed'
                      ? 'bg-pink-100 text-pink-800'
                      : job.status === 'Draft'
                        ? 'bg-gray-100 text-grey-800'
                        : ''
                    }`}
                >
                  {job.status}
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.stage}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {formatDate(job.dateCreated)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
