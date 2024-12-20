import './index.css'

const Header = () => {
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="header-logo"
      />
      <div className="header-heading-container">
        <p className="spacing">Home</p>
        <p>Jobs</p>
      </div>
      <button className="logout-btn">Logout</button>
    </div>
  )
}
export default Header
