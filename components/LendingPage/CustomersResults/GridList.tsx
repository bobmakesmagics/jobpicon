import React from 'react'

function GridList(): JSX.Element {
  return (
    <div
      style={{ marginTop: '45px', display: 'flex', justifyContent: 'center' }}
      className="container mx-auto px-4"
    >
      <div className="grid_list grid grid-cols-1 md:grid-cols-3">
        <div className="list_indiv_div h-[240px] w-[309px] bg-white ">
          <div className="circle_blue1 frozenFruit"></div>
          <h3 className="black_p text-xl font-semibold">Quick onboarding</h3>
          <p className="black_p mt-4 text-gray-600">
            Your personal account manager will help you onboard your team and
            get started in no time.
          </p>
        </div>{' '}
        {/* Blue #3B82F6*/}
        <div className="list_indiv_div blue_list h-[240px] w-[309px]  ">
          <div className="circle_white1 frozenFruit"></div>
          <h3 className="blue_p text-xl font-semibold">Live chat support</h3>
          <p className="blue_p mt-4 text-gray-600">
            We’re here for you every step of the way. Our average response time
            is 3 minutes
          </p>
        </div>{' '}
        <div className="list_indiv_div h-[240px] w-[309px] bg-white ">
          <div className="circle_blue2 frozenFruit"></div>
          <h3 className="black_p text-xl font-semibold">Enterprise ready</h3>
          <p className="black_p mt-4 text-gray-600">
            Stable and reliable solutions for your company. Audit logs, SSO,
            requisition flows and much more.
          </p>
        </div>{' '}
        {/* Blue */}
        <div className="list_indiv_div blue_list h-[240px] w-[309px]">
          <div className="circle_white2 frozenFruit"></div>
          <h3 className="blue_p text-xl font-semibold">
            Developer-friendly APIs
          </h3>
          <p className="blue_p mt-4 text-gray-600">
            Use our open API to integrate with external tools or fully customize
            your career site.
          </p>
        </div>{' '}
        <div className="list_indiv_div h-[240px] w-[309px] bg-white">
          <div className="circle_blue3 frozenFruit"></div>
          <h3 className="black_p text-xl font-semibold">Proven concept</h3>
          <p className="black_p mt-4 text-gray-600">
            Over 115,000 users in 95 different countries. The career sites are
            visited by over 7 million candidates each month.
          </p>
        </div>{' '}
        {/* Blue */}
        <div className="list_indiv_div blue_list h-[240px] w-[309px] ">
          <div className="circle_white3 frozenFruit"></div>
          <h3 className="blue_p text-xl font-semibold">
            Security and regulations
          </h3>
          <p className="blue_p mt-4 text-gray-600">
            We make sure you and your data stay safe. GDPR, SSL, data encryption
            and more.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GridList
