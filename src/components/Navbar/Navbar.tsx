import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => `${isActive ? 'active' : ''}`}
            to="/episode"
          >
            Episodios
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `${isActive ? 'active' : ''}`}
            to="/location"
          >
            Localizaciones
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
