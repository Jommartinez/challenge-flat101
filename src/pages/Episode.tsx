import { useEffect } from 'react'
import useStore from '../store/useStore'
import { NavLink } from 'react-router-dom'

export const Episode = () => {
  const { episodes, fetchEpisodes } = useStore()
  useEffect(() => {
    fetchEpisodes()
  }, [fetchEpisodes])

  return (
    <div>
      {episodes.map(episode => (
        <NavLink state={episode} to={`/episode/${episode.id}`} key={episode.id}>
          <h3>{episode.episode}</h3>
          <h2>{episode.name}</h2>
          <p>{episode.air_date}</p>
          <hr />
        </NavLink>
      ))}
    </div>
  )
}
