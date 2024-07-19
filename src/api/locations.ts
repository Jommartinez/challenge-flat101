import axios from '../libs/axios'

export const fetchLocations = async (page = 1, searchTerm = '') => {
  try {
    const response = await axios.get(
      `/location?page=${page}&name=${searchTerm}`,
    )
    return {
      locations: response.data.results,
      currentPageLocation: page,
      nextPageLocation: response.data.info.next,
      prevPageLocation: response.data.info.prev,
    }
  } catch (error) {
    console.error('Error fetching locations', error)
    throw error
  }
}
