import { useEffect } from 'react'
import useStore from '../store/useStore'
import { NavLink } from 'react-router-dom'

export const Location = () => {
  const { locations, fetchLocations } = useStore()
  useEffect(() => {
    fetchLocations()
  }, [fetchLocations])
  return (
    <div>
      {locations.map(location => (
        <NavLink
          state={location}
          to={`/location/${location.id}`}
          key={location.id}
        >
          <h3>{location.type}</h3>
          <h2>{location.name}</h2>
          <p>{location.dimension}</p>
          <hr />
        </NavLink>
      ))}
    </div>
  )
}
