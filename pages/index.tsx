import Footer from 'components/Footer/footer'
import { CallToAction } from 'components/ImportantComponent/CallToAction'
import { Faqs } from 'components/ImportantComponent/Faqs'
import { Header } from 'components/ImportantComponent/Header'
import { Hero } from 'components/ImportantComponent/Hero'
import { Pricing } from 'components/ImportantComponent/Pricing'
import { PrimaryFeatures } from 'components/PrimaryFeatures'
import { SecondaryFeatures } from 'components/SecondaryFeatures'
import { Testimonials } from 'components/Testimonials'
import Head from 'next/head'
import React from 'react'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Maron AI</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
{
  /* <Head>
        <title>Maron - Intelligent Job Matching</title>
        <meta
          name="description"
          content="Empowering teams, one match at a time. Currently in stealth mode. "
        />
      </Head>
      <div className="bg-white">
        <main>
          <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div>
                <div>
                  <img
                    className="h-11 w-auto"
                    src="/images/mmj_logo.png"
                    alt="Maron"
                  />
                </div>
                <div className="mt-20">
                  <div>
                    <a href="#" className="inline-flex space-x-4">
                      <span className="rounded bg-blue-50 px-2.5 py-1 text-sm font-semibold text-blue-500">
                        What's new
                      </span>
                      <span className="inline-flex items-center space-x-1 text-sm font-medium text-blue-500">
                        <span>Just shipped version 0.1.0 beta</span>
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="mt-6 sm:max-w-xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                      Intelligent Job Matching
                    </h1>
                    <p className="mt-6 text-xl text-gray-500">
                      Empowering teams, one match at a time. Enter your email
                      below to get notified when spots open up.
                    </p>
                  </div>
                  <EmailSignup />
                  <div className="mt-6">
                    <div className="inline-flex items-center divide-x divide-gray-300">
                      <div className="flex flex-shrink-0 pr-5">
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                        <span className="font-medium text-gray-900">
                          Rated 5 stars
                        </span>{' '}
                        by over{' '}
                        <span className="font-medium text-blue-500">
                          21 beta users
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="hidden sm:block">
                  <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full"></div>
                  <svg
                    className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                    width="404"
                    height="392"
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="404"
                      height="392"
                      fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    />
                  </svg>
                </div>
                <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                  <img
                    className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                    src="/images/dashboard-mockup.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-20">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
              <div className="relative sm:py-16 lg:py-0">
                <div
                  aria-hidden="true"
                  className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
                >
                  <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"></div>
                  <svg
                    className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                    width="404"
                    height="392"
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="404"
                      height="392"
                      fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                    />
                  </svg>
                </div>
                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                  <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-blue-500 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-blue-600 opacity-90"></div>
                    <div className="relative px-8">
                      <div>
                        <img
                          className="h-12"
                          src="/images/abpoll_logo_light.png"
                          alt="ABpoll"
                        />
                      </div>
                      <blockquote className="mt-8">
                        <div className="relative text-lg font-medium text-white md:flex-grow">
                          <svg
                            className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-blue-400"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="relative">
                            I recently tried Maron's beta service and
                            found it helpful in creating a clear job
                            description. They also helped me post the job on
                            multiple recruiting websites which made it easier to
                            find candidates. Their algorithm helped me sort
                            through the applicants and find the right fit for my
                            team. Overall, I think Maron is a useful tool
                            for streamlining the hiring process.
                          </p>
                        </div>

                        <footer className="mt-4">
                          <p className="text-base font-semibold text-blue-200">
                            Sarah Williams, CTO at ABpoll
                          </p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                <div className="pt-12 sm:pt-16 lg:pt-20">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Leading the charge in intelligent job matching
                  </h2>
                  <div className="mt-6 space-y-6 text-gray-500">
                    <p className="text-lg">
                      At Maron, we understand that finding the right
                      candidate can be a daunting task. That's why we've
                      developed a proprietary matching model that sets us apart
                      from the competition. Our model takes into account a
                      variety of factors, including skills, experience, and
                      qualifications, to ensure that we return the best
                      applicant for the job.
                    </p>
                    <p className="text-base leading-7">
                      Our algorithm is constantly learning and adapting to
                      better match candidates to job openings. We believe in
                      empowering teams to find the perfect fit, and that's
                      exactly what we do. Unlike traditional keyword-matching
                      methods, our model ensures that you find the candidate
                      that not only has the right qualifications, but also the
                      right fit for your team.
                    </p>
                    <p className="text-base leading-7">
                      So if you're tired of sifting through resumes and
                      struggling to find the perfect candidate, look no further.
                      Maron is leading the charge in intelligent job
                      matching and we're here to help you build the best team
                      possible. Sign up for our beta notification and be the
                      first to experience the future of hiring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>

        <footer className="mt-24 bg-gray-900 sm:mt-12">
          <div className="mx-auto max-w-md overflow-hidden py-12 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <p className="mt-8 text-center text-base text-gray-400">
              &copy; 2023 Maron, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div> */
}
