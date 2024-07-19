import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import useStore from '../../store/useStore'

export const Layout = () => {
  const { pathname } = useLocation()
  const {
    setSearchTermEpisode,
    setSearchTermLocation,
    fetchEpisodes,
    fetchLocations,
  } = useStore()

  const [localSearchTerm, setLocalSearchTerm] = useState('')

  useEffect(() => {
    if (pathname === '/episode') {
      fetchEpisodes(1, localSearchTerm)
    } else if (pathname === '/location') {
      fetchLocations(1, localSearchTerm)
    }
  }, [localSearchTerm, pathname, fetchEpisodes, fetchLocations])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setLocalSearchTerm(term)

    if (pathname === '/episode') {
      setSearchTermEpisode(term)
    } else if (pathname === '/location') {
      setSearchTermLocation(term)
    }
  }

  return (
    <>
      <div>
        <Navbar />
        <input
          type="text"
          placeholder="Search..."
          value={localSearchTerm}
          onChange={handleSearch}
        />
      </div>
      <Outlet />
    </>
  )
}
