import Header from '../Header'

import './index.css'

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="headings-container">
        <h1>Find The Job That Fits Your Life</h1>
        <p>
          Millions of people are searching for jobs, salary information company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <button className="find-btn">Find Jobs</button>
      </div>
    </div>
  )
}
export default Home
