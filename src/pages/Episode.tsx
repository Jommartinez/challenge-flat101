import { useEffect } from 'react'
import useStore from '../store/useStore'
import { ListItems, Paginate } from '../components'

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
      <ListItems items={episodes} />
      <Paginate
        onClickPrev={handlePrevPage}
        onClickNext={handleNextPage}
        disabledPrev={!prevPageEpisode}
        disabledNext={!nextPageEpisode}
      />
    </div>
  )
}
