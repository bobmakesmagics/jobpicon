import { useRouter } from 'next/router'
import BookADemo from 'components/ImportantComponent/book_a_demo_button'

function AboveFooter(): JSX.Element {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <div className="above_footer_big_div">
      <div className="text_div">
        <p
          style={{ margin: '0px', textAlign: 'start' }}
          className="results_first_text"
        >
          Get started today
        </p>

        <p className="text_in_footer">
          Join others and hire successfully with Maron.
        </p>
      </div>
      <div className="button_divs">
        <div
          style={{
            borderRadius: '12px',
            fontWeight: 'bold',
            padding: '.9rem 1.2rem',
          }}
          className="book_demo_try_it_free cursor-pointer  rounded py-2 px-4 text-white"
          onClick={() => handleNavigation('/try-it-free')}
        >
          Try it free
        </div>
        <div
          style={{
            borderRadius: '12px',
            fontWeight: 'bold',
            padding: '1.0rem 1.0rem',
          }}
          className="book-demo cursor-pointer  rounded py-2 px-4 text-white"
          onClick={() => handleNavigation('/book-demo')}
        >
          Book a demo
        </div>
      </div>
    </div>
  )
}

export default AboveFooter
