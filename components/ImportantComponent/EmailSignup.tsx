// components/EmailSignup.tsx
import { useState } from 'react';
import { useApi } from 'hooks/useApi';
import { ArrowPathIcon, CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import React from "react";

interface WaitingListResponse {
  id: number;
  email: string;
}

export const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const { response, callApi } = useApi<WaitingListResponse>();
  const isLoading = response.isLoading;
  const isSuccessful = response.data !== null && !response.error;
  const isDuplicate = response.error === 'Request failed with status code 409';


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callApi('waiting-list', 'POST', { email });
    setEmail('');
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="mt-12 sm:flex sm:w-full sm:max-w-lg">
      <div className="min-w-0 flex-1">
        <label htmlFor="hero-email" className="sr-only">
          Email address
        </label>
        <input
          id="hero-email"
          type="email"
          className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-3">
        <button
          type="submit"
          className={`block w-full rounded-md border border-transparent px-5 py-3 text-base font-medium shadow focus:outline-none focus:ring-2 focus:ring-offset-2 sm:px-10 ${
            isLoading
              ? 'bg-gray-300 text-gray-500'
              : isSuccessful
              ? 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500'
              : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <ArrowPathIcon className="animate-spin h-7 w-7 mx-auto" />
          ) : isSuccessful ? (
            <CheckIcon className="h-7 w-7 mx-auto" />
          ) : (
            'Notify me'
          )}
        </button>
      </div>
    </form>
    {isDuplicate && (
      <div className="mt-4 text-red-600 flex items-center">
        <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
        <span>Email already exists in the waiting list.</span>
      </div>
    )}
    </>
  );
};

