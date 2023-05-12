/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import React from 'react';

interface Page {
  name: string;
  href: string;
  current?: boolean;
}

interface Props {
  pages: Page[];
}

export default function BreadCrump({pages}: Props): JSX.Element {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link  href="/dashboard" className=" breadCrumpText opacity-80 hover:text-black hover:opacity-90">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page: Page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon className="breadCrumpTextA h-5 w-5 flex-shrink-0 opacity-80" aria-hidden="true" />
              <a
                href={page.href}
                className="breadCrumpTextA ml-4 text-sm font-medium opacity-80 hover:text-black hover:opacity-70"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}