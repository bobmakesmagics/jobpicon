import GridList from './GridList'

function CustomersResults(): JSX.Element {
  return (
    <div className="customersResults">
      <p className="results_first_text">Our customers see results 🚀</p>

      <div className="daddy_div_of_big_blue">
        <div className="small_daddy_of_big_blue">
          <p className="big_blue_percentage">94%</p>
          <p>
            Collaborate better <br /> with their team
          </p>
        </div>
        <div className="small_daddy_of_big_blue">
          <p className="big_blue_percentage">97%</p>
          <p>
            See an increase in <br /> qualified candidates
          </p>
        </div>{' '}
        <div className="small_daddy_of_big_blue">
          <p className="big_blue_percentage">89%</p>
          <p>
            Say their hiring <br /> process is faster
          </p>
        </div>
      </div>
      <GridList />
    </div>
  )
}

export default CustomersResults
