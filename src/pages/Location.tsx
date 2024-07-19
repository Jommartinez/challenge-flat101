import { useEffect } from 'react'
import useStore from '../store/useStore'
import { NavLink } from 'react-router-dom'

export const Location = () => {
  const {
    locations,
    fetchLocations,
    currentPageLocation,
    nextPageLocation,
    prevPageLocation,
  } = useStore()
  useEffect(() => {
    fetchLocations()
  }, [fetchLocations])

  const handlePrevPage = () => {
    if (prevPageLocation) {
      fetchLocations(currentPageLocation - 1)
    }
  }

  const handleNextPage = () => {
    if (nextPageLocation) {
      fetchLocations(currentPageLocation + 1)
    }
  }
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
      <div>
        <button onClick={handlePrevPage} disabled={!prevPageLocation}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!nextPageLocation}>
          Next
        </button>
      </div>
    </div>
  )
}
