import { useRouter } from 'next/router'
import BalloonAnimation from 'components/BallonAnimation/BalloonAnimation'
import BookADemo from 'components/ImportantComponent/book_a_demo_button'

function LendingPageFirstPart(): JSX.Element {
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
      <BalloonAnimation numberOfBalloons={10} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <p className="bigTextIntelligentRecruitment">
          Intelligent recruitment & <br /> employer branding ATS{' '}
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
          <p className="middle-p">
            The new way to attract, nurture and hire top talent. Grow faster by{' '}
            <br /> focusing on what matters the most &#8212;{' '}
            <strong>your time and resources</strong>
          </p>
          <BookADemo handleNavigation={handleNavigation} />
        </div>
      </div>
      <p className="bottom-p">
        Loved by <strong>users</strong> and <strong>organizations</strong> all
        over the world, from <br /> startups to enterprise and acrooss all
        markets 🚀
      </p>
      <div></div>
    </div>
  )
}

export default LendingPageFirstPart
