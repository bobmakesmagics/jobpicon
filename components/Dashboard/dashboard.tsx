// @ts-nocheck
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  BellIcon,
  FolderIcon,
  HomeIcon,
  Cog6ToothIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useUser } from '@clerk/nextjs'
import { CreateJobCancelModal } from 'components/Modal/CreateJobCancelModal'
import React from 'react'
import { useRouter } from 'next/router'
import { UserButton, OrganizationSwitcher } from '@clerk/clerk-react'
import { PlusIcon } from '@heroicons/react/24/outline'
import Sidebar from 'components/Modal/Sidebar'
import { ModeButton } from './ModeButton'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard({ pageNum, children }: { pageNum: number, children: React.ReactNode }): JSX.Element {
  const { isLoaded, isSignedIn, user } = useUser()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarShow, setSidebarShow] = useState(false)
  const [openCreateJobCancelModal, setCreateJobCancelModal] = useState([
    false,
    '',
  ])
  const [navigation, setNavigationArr] = useState([
    { name: 'Home', icon: HomeIcon, href: '/dashboard' },
    { name: 'Job Posts', icon: UsersIcon, href: '/dashboard/job-posts' },
    {
      name: 'Create Project',
      icon: FolderIcon,
      href: '/dashboard/create-job',
    },
  ])
  const router = useRouter()
  const [userNavigation, setUserNavigation] = useState([
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ])

  if (!isLoaded || !isSignedIn) {
    return null
  }

  const changePage = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    index
  ) => {
    e.preventDefault()

    if (pageNum === 2 && index !== 2) {
      setCreateJobCancelModal([true, href])
    } else {
      router.push(href)
    }
  }

  const handleNewJobClick = () => {
    router.push('/dashboard/create-job')
  }

  return (
    <>
      <CreateJobCancelModal
        openCreateJobCancelModal={openCreateJobCancelModal}
        setCreateJobCancelModal={setCreateJobCancelModal}
      />
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-20">
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo={'translate-x-0'}
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex max-w-[16rem] flex-1 flex-col bg-gray-800 pb-4 pt-5">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <Sidebar
                    navigation={navigation}
                    pageNum={pageNum}
                    changePage={changePage}
                    sidebarOpen={sidebarOpen}
                    handleSideBarOpen={setSidebarOpen}
                  />
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="hidden md:block">
          <Sidebar
            navigation={navigation}
            pageNum={pageNum}
            changePage={changePage}
            sidebarOpen={sidebarOpen || sidebarShow}
            handleSidebarShow={setSidebarShow}
          />
        </div>

        {/* NAVBAR */}
        <div
          className={classNames(
            'flex h-[100vh] flex-col',
            !sidebarShow ? 'md:pl-16' : 'md:pl-64'
          )}
        >
          <div className="bg-g sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow dark:bg-black-900">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            {!sidebarShow && (
              <button
                onClick={() => setSidebarShow(true)}
                className="hidden border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:block"
              >
                <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
            <div className="flex flex-1 justify-between px-4">
              <div></div>
              <div className="ml-4 flex items-center space-x-4 md:ml-6">
                {pageNum !== 2 && (
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleNewJobClick}
                      className="bg-custom relative inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <PlusIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span>New Job</span>
                    </button>
                  </div>
                )}
                {/* <ModeButton /> */}
                <button
                  type="button"
                  style={{ width: '31px', height: '31px' }}
                  className="w-30 h-30 flex items-center justify-center rounded-full bg-white bg-opacity-20 p-1 text-gray-300 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <UserButton afterSignOutUrl="/" className="h-10 w-10" />
              </div>
            </div>
          </div>
          <div className="main-panel-bg flex-1">{children}</div>
        </div>
      </div>
    </>
  )
}
