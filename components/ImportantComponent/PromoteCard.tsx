import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'

function PromoteCard({ onToggle, ...item }: any) {
  return (
    <li
      style={item?.selected ? { borderBottom: '8px solid #3b82f6' } : {}}
      className="card"
    >
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <img src={item?.imageUrl} alt={`${item?.name} logo`} />
        <h3>{item?.name}</h3>
        <p className="card_basic_p">Basic</p>
      </div>

      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '100%', // Add a fixed width here
        }}
      >
        <h3>About</h3>
        <p style={{ width: '96%' }}>
          {item?.description} {item?.userCount}.
        </p>

        <div
          style={{
            margin: '15px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {' '}
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: 'fit-content' }} className="text-green-400">
              <CheckIcon className="h-5 w-5" />
            </div>
            <p
              className=""
              style={{
                fontSize: '14px',
                margin: '0px',
                color: 'rgba(1,1,1,.75)',
              }}
            >
              Some texttext tex ttext text
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: 'fit-content' }} className="text-green-400">
              <CheckIcon className="h-5 w-5" />
            </div>
            <p
              className=""
              style={{
                fontSize: '14px',
                margin: '0px',
                color: 'rgba(1,1,1,.75)',
              }}
            >
              Some texttext tex ttext text
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: 'fit-content' }} className="text-green-400">
              <CheckIcon className="h-5 w-5" />
            </div>
            <p
              className=""
              style={{
                fontSize: '14px',
                margin: '0px',
                color: 'rgba(1,1,1,.75)',
              }}
            >
              Some texttext tex ttext text
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: 'fit-content' }} className="text-green-400">
              <CheckIcon className="h-5 w-5" />
            </div>
            <p
              className=""
              style={{
                fontSize: '14px',
                margin: '0px',
                color: 'rgba(1,1,1,.75)',
              }}
            >
              Some texttext tex ttext text
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: 'fit-content' }} className="text-green-400">
              <CheckIcon className="h-5 w-5" />
            </div>
            <p
              className=""
              style={{
                fontSize: '14px',
                margin: '0px',
                color: 'rgba(1,1,1,.75)',
              }}
            >
              Some texttext tex ttext text
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '48%',
        }}
      >
        <h3>Price</h3>
        <p
          className=""
          style={{
            fontSize: '14px',
            margin: '0px',
            color: 'rgba(1,1,1,.75)',
          }}
        >
          {item?.name} is one of the <strong>free</strong> options in Maron
        </p>
        <p
          className=""
          style={{
            fontSize: '21px',
            fontWeight: 'bold',
            marginTop: '30px',
            color: 'rgba(1,1,1,.75)',
          }}
        >
          Free
        </p>
        {!item?.selected && (
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => onToggle(item.id)}
          >
            Select
          </button>
        )}
        {item?.selected && (
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => onToggle(item.id)}
          >
            Selected
            <CheckBadgeIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
    </li>
  )
}

export default PromoteCard
