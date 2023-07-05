import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-img"
      />
      <h1 className="logo-name">Wave</h1>
    </div>

    <ul className="nav-list">
      <li className="list-item">
        <Link to="/" className="link-list">
          Home
        </Link>
      </li>
      <li className="list-item">
        <Link to="/about" className="link-list">
          About
        </Link>
      </li>
      <li className="list-item">
        <Link to="/contact" className="link-list">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
