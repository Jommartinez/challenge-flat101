import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__list">
        <NavLink
          className={({ isActive }) =>
            `navbar__item ${isActive ? 'active' : ''}`
          }
          to="/episode"
        >
          Episodios
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `navbar__item ${isActive ? 'active' : ''}`
          }
          to="/location"
        >
          Localizaciones
        </NavLink>
      </div>
    </nav>
  )
}
