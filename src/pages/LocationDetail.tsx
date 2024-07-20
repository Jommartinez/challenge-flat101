import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useStore, { Character, Location } from '../store/useStore'
import { Carousel } from '../components'

import './Detail.css'

export const LocationDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [infoLocation, setInfoLocation] = useState<Location>()
  const [characters, setCharacters] = useState<Character[]>([])

  const { fetchCharacters, characters: storeCharacters } = useStore()

  useEffect(() => {
    const data: Location = location.state as Location
    if (data) {
      setInfoLocation(data)
      fetchCharacters(data.residents)
      return
    } else {
      navigate('/location')
    }
  }, [location.state, fetchCharacters])

  useEffect(() => {
    if (infoLocation) {
      const charactersArray = Object.values(storeCharacters)
      const episodeCharacters = charactersArray.filter(character =>
        infoLocation.residents.includes(character.url),
      )
      const uniqueCharacters = Array.from(
        new Map(
          episodeCharacters.map(character => [character.id, character]),
        ).values(),
      )
      setCharacters(uniqueCharacters)
    }
  }, [infoLocation, storeCharacters])

  useEffect(() => {
    console.log('characters', characters)
  }, [characters])

  if (!infoLocation) {
    return null
  }

  return (
    <div className="detail">
      <div className="detail__title">{infoLocation.name}</div>
      <div className="detail__subtitle">{infoLocation.dimension}</div>
      <div className="detail__title-carousel">Habitantes</div>
      <Carousel characters={characters} />
    </div>
  )
}
