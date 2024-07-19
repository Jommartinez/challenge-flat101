import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useStore, { Character, Location } from '../store/useStore'

export const LocationDetail = () => {
  const location = useLocation()
  const [infoLocation, setInfoLocation] = useState<Location>()
  const [characters, setCharacters] = useState<Character[]>([])

  const { fetchCharacters, characters: storeCharacters } = useStore()

  useEffect(() => {
    const data: Location = location.state as Location
    if (data) {
      setInfoLocation(data)
      fetchCharacters(data.residents)
      return
    }
  }, [location.state, fetchCharacters])

  useEffect(() => {
    if (infoLocation) {
      const charactersArray = Object.values(storeCharacters)
      const episodeCharacters = charactersArray.filter(character =>
        infoLocation.residents.includes(character.url),
      )
      setCharacters(episodeCharacters)
    }
  }, [infoLocation, storeCharacters])

  if (!infoLocation) {
    return null
  }

  return (
    <>
      <div>{infoLocation.name}</div>
      <div>{infoLocation.dimension}</div>
      <div>Habitantes</div>
      <div>
        {characters.map((character, index) => (
          <div key={`${character.id}-${index}`}>
            <img src={character.image} alt={character.name} />

            <p>Name: {character.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}
