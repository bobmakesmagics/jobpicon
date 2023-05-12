import { Fragment, useContext, useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useUser } from '@clerk/nextjs'
import TailwindD from 'components/Dashboard'
import React from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [openCreateJobCancelModal, setCreateJobCancelModal] = useState(false)

  return (
    <>
      <div>
        <TailwindD pageNum={0}>
          <p>Dashboard</p>
        </TailwindD>
      </div>
    </>
  )
}
