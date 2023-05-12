import React, { useState } from 'react'
// import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const Button = (): JSX.Element => {
  //   const { theme, setTheme } = useTheme()
  const [theme, setTheme] = useState('')

  return (
    <button
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      style={{ width: '31px', height: '31px' }}
      className="w-30 h-30 flex items-center justify-center rounded-full bg-white bg-opacity-20 p-1 text-gray-300 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default Button
