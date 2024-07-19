import { useEffect } from 'react'
import useStore from '../store/useStore'
import { ListItems, Paginate } from '../components'

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
      <ListItems items={locations} />
      <Paginate
        onClickPrev={handlePrevPage}
        onClickNext={handleNextPage}
        disabledPrev={!prevPageLocation}
        disabledNext={!nextPageLocation}
      />
    </div>
  )
}
