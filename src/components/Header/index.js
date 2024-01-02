import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="image"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <ul className="component-container">
      <Link to="/" className="heading">
        Home
      </Link>
      <Link to="/about" className="heading">
        About
      </Link>
      <Link to="/contact" className="heading">
        Contact
      </Link>
    </ul>
  </div>
)

export default Header
