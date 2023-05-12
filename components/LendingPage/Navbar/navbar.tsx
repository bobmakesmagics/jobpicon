import { useRouter } from 'next/router'
import IconSvg from './iconSvg'

function Navbar(): JSX.Element {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <header className="bg-white px-6 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Icon and App Name */}
        <div className="flex items-center">
          <IconSvg />
          <div
            className="text-navy-blue ml-4 cursor-pointer text-xl font-bold"
            onClick={() => handleNavigation('/')}
          >
            Maron
          </div>
        </div>

        {/* Options */}
        <div
          style={{ marginRight: '100px', gap: '30px' }}
          className="hidden items-center space-x-6 md:flex"
        >
          <div className="hidden items-center space-x-6 md:flex">
            <div
              className="cursor-pointer hover:text-blue-700"
              onClick={() => handleNavigation('/product')}
            >
              Product
            </div>
            <div
              className="cursor-pointer hover:text-blue-700"
              onClick={() => handleNavigation('/pricing')}
            >
              Pricing
            </div>
            <div
              className="cursor-pointer hover:text-blue-700"
              onClick={() => handleNavigation('/careers')}
            >
              Careers
            </div>
            <div
              className="cursor-pointer hover:text-blue-700"
              onClick={() => handleNavigation('/contact')}
            >
              Contact Us
            </div>
            <div
              className="cursor-pointer hover:text-blue-700"
              onClick={() => handleNavigation('/resources')}
            >
              Resources
            </div>
          </div>

          {/* Border Line */}
          <div className="border-light-gray-2 mx-6 hidden h-6 border-l md:block" />

          {/* Log In and login a Demo Buttons */}
          <div className="flex items-center space-x-11">
            <div
              className="cursor-pointer text-gray-700 hover:text-blue-700"
              onClick={() => handleNavigation('/sign-in')}
            >
              Log In
            </div>
            <div
            style={{
              borderRadius: '12px',
              fontWeight: 'bold',
              padding: '.8rem 1.0rem',
            }}
            className="book-demo cursor-pointer  rounded py-2 px-4 text-white"
            onClick={() => handleNavigation('/book-demo')}
          >
            Book a demo
          </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
