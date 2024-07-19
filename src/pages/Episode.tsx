import { useEffect } from 'react'
import useStore from '../store/useStore'
import { NavLink } from 'react-router-dom'

export const Episode = () => {
  const {
    episodes,
    fetchEpisodes,
    currentPageEpisode,
    nextPageEpisode,
    prevPageEpisode,
  } = useStore()
  useEffect(() => {
    fetchEpisodes()
  }, [fetchEpisodes])

  const handlePrevPage = () => {
    if (prevPageEpisode) {
      fetchEpisodes(currentPageEpisode - 1)
    }
  }

  const handleNextPage = () => {
    if (nextPageEpisode) {
      fetchEpisodes(currentPageEpisode + 1)
    }
  }

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
      <div>
        <button onClick={handlePrevPage} disabled={!prevPageEpisode}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!nextPageEpisode}>
          Next
        </button>
      </div>
    </div>
  )
}
