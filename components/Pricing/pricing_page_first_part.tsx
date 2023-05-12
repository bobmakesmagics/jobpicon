// import BalloonAnimation from 'components/BallonAnimation/BalloonAnimation'
// import BookADemo from 'components/ImportantComponents/book_a_demo_button'
import { useRouter } from 'next/router'

export default function PricingPageFirstPart(): JSX.Element {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        gap: '30px',
      }}
      className="center-texts flex h-full items-center p-11 text-center"
    >
      {/* <BalloonAnimation numberOfBalloons={10} /> */}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
        <p className="bigTextInPricing">
          One plan, all features, unlimited users
        </p>
        <div
          className="center-texts flex h-full items-center text-center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            justifyContent: '',
          }}
        >
          <p className="middle_p_in_pricing">
            Everything you need, nothing you don&apos;t. Pick a plan that best suits your business.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  )
}
