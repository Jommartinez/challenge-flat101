import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink
          className={({ isActive }) => `${isActive ? 'active' : ''}`}
          to="/episode"
        >
          Episodios
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) => `${isActive ? 'active' : ''}`}
          to="/location"
        >
          Localizaciones
        </NavLink>
      </div>
    </nav>
  )
}
