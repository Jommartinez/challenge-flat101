import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useStore from '../../store/useStore'
import { HeaderMain } from '../Header/HeaderMain'

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
      <HeaderMain
        handleSearch={handleSearch}
        localSearchTerm={localSearchTerm}
      />

      <Outlet />
    </>
  )
}
