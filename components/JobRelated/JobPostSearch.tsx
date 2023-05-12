import { useState } from 'react';
import { job } from 'utils/jobsMockData';
import React from "react";

export function JobPostSearch(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(e: any) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="relative inline-block mt-2 w-40 origin-top-right rounded-md pr-8 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}
