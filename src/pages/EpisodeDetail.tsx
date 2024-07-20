import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useStore, { Character, Episode } from '../store/useStore'
import { Carousel, Form } from '../components'

import './Detail.css'

export const EpisodeDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [infoEpisode, setInfoEpisode] = useState<Episode>()
  const [characters, setCharacters] = useState<Character[]>([])

  const { fetchCharacters, characters: storeCharacters } = useStore()

  useEffect(() => {
    const data: Episode = location.state as Episode
    if (data) {
      setInfoEpisode(data)
      fetchCharacters(data.characters)
      return
    } else {
      navigate('/episode')
    }
  }, [location.state, fetchCharacters])

  useEffect(() => {
    if (infoEpisode) {
      const charactersArray = Object.values(storeCharacters)
      const episodeCharacters = charactersArray.filter(character =>
        infoEpisode.characters.includes(character.url),
      )
      const uniqueCharacters = Array.from(
        new Map(
          episodeCharacters.map(character => [character.id, character]),
        ).values(),
      )
      setCharacters(uniqueCharacters)
    }
  }, [infoEpisode, storeCharacters])

  if (!infoEpisode) {
    return null
  }

  return (
    <div className="detail">
      <div className="detail__title">
        {infoEpisode.episode}: {infoEpisode.name}
      </div>
      <div className="detail__subtitle">{infoEpisode.air_date}</div>
      <div className="detail__title-carousel">Personajes</div>
      <Carousel characters={characters} />
      <Form />
    </div>
  )
}
