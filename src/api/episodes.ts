import axios from '../libs/axios'

export const fetchEpisodes = async (page = 1, searchTerm = '') => {
  try {
    const response = await axios.get(`/episode?page=${page}&name=${searchTerm}`)
    return {
      episodes: response.data.results,
      currentPageEpisode: page,
      nextPageEpisode: response.data.info.next,
      prevPageEpisode: response.data.info.prev,
    }
  } catch (error) {
    console.error('Error fetching episodes', error)
    throw error
  }
}
