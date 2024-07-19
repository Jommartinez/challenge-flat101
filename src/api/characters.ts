import axios from '../libs/axios'

export const fetchCharacters = async (urls: string[]) => {
  try {
    const urlsFilter = [...new Set(urls)]
    const ids = urlsFilter.map(url => url.split('/').pop()).join(',')
    const response = await axios.get(`/character/${ids}`)
    return Array.isArray(response.data) ? response.data : [response.data]
  } catch (error) {
    console.error('Error fetching characters', error)
    throw error
  }
}
