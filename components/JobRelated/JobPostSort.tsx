import { useState } from 'react';
import { job } from 'utils/jobsMockData';
import React from "react";

interface SortOptionProps {
  label: string;
  value: string;
}

const sortOptions: SortOptionProps[] = [
  { label: 'Sort by', value: '' },
  { label: 'Title: Alphabetical (A-Z)', value: 'title_asc' },
  { label: 'Title: Alphabetical (Z-A)', value: 'title_desc' },
  { label: 'Date Created: Oldest to newest', value: 'date_asc' },
  { label: 'Date Created: Newest to oldest', value: 'date_desc' },
  { label: 'Applicants: Largest to smallest', value: 'applicants_desc' },
  { label: 'Applicants: Smallest to largest', value: 'applicants_asc' },
];

function sortJobs(jobs: any[], sortValue: string) {
  const [sortBy, sortOrder] = sortValue.split('_');
  return jobs.slice().sort((a, b) => {
    if (sortBy === 'title') {
      const compare = a.title.localeCompare(b.title);
      return sortOrder === 'asc' ? compare : -compare;
    } else if (sortBy === 'date') {
      const compare = new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime();
      return sortOrder === 'asc' ? compare : -compare;
    } else if (sortBy === 'applicants') {
      const compare = a.applicants - b.applicants;
      return sortOrder === 'asc' ? compare : -compare;
    }
    return 0;
  });
}

export function JobPostSort() {
  const [sortValue, setSortValue] = useState(sortOptions[0].value);

  return (
    <div className="relative inline-block mt-2 w-40 origin-top-right rounded-md bg-white" >
      <select
        className="block appearance-none w-full bg-white  px-4 py-2 pr-8 rounded  leading-tight focus:outline-none text-gray-500"
        value={sortValue}
        onChange={(e) => setSortValue(e.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value} className="bg-white">
            {option.label}
          </option>
        ))}
      </select>
      
    </div>
  );
}
