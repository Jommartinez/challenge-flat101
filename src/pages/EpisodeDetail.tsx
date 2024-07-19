import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useStore, { Character, Episode } from '../store/useStore'
import { Carousel, Form } from '../components'

export const EpisodeDetail = () => {
  const location = useLocation()
  const [infoEpisode, setInfoEpisode] = useState<Episode>()
  const [characters, setCharacters] = useState<Character[]>([])

  const { fetchCharacters, characters: storeCharacters } = useStore()

  useEffect(() => {
    const data: Episode = location.state as Episode
    if (data) {
      setInfoEpisode(data)
      fetchCharacters(data.characters)
      return
    }
  }, [location.state, fetchCharacters])

  useEffect(() => {
    if (infoEpisode) {
      const charactersArray = Object.values(storeCharacters)
      const episodeCharacters = charactersArray.filter(character =>
        infoEpisode.characters.includes(character.url),
      )
      setCharacters(episodeCharacters)
    }
  }, [infoEpisode, storeCharacters])

  if (!infoEpisode) {
    return null
  }

  return (
    <>
      <div>
        {infoEpisode.episode}: {infoEpisode.name}
      </div>
      <div>{infoEpisode.air_date}</div>
      <div>Personajes</div>
      <Carousel characters={characters} />
      <Form />
    </>
  )
}
