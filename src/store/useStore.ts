import { create } from 'zustand'
import axios from 'axios'

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

interface StoreState {
  episodes: Episode[]
  currentPageEpisode: number
  nextPageEpisode: string | null
  prevPageEpisode: string | null
  locations: Location[]
  currentPageLocation: number
  nextPageLocation: string | null
  prevPageLocation: string | null
  characters: Character[]
  searchTermEpisode: string
  searchTermLocation: string
  fetchEpisodes: (page?: number, name?: string) => Promise<void>
  fetchLocations: (page?: number, name?: string) => Promise<void>
  fetchCharacters: (urls: string[]) => Promise<void>
  setSearchTermEpisode: (searchTerm: string) => void
  setSearchTermLocation: (searchTerm: string) => void
}

const useStore = create<StoreState>(set => ({
  episodes: [],
  currentPageEpisode: 1,
  nextPageEpisode: null,
  prevPageEpisode: null,
  locations: [],
  currentPageLocation: 1,
  nextPageLocation: null,
  prevPageLocation: null,
  characters: [],
  searchTermEpisode: '',
  searchTermLocation: '',
  fetchEpisodes: async (page = 1, searchTerm = '') => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${page}&name=${searchTerm}`,
      )
      set({
        episodes: response.data.results,
        currentPageEpisode: page,
        nextPageEpisode: response.data.info.next,
        prevPageEpisode: response.data.info.prev,
      })
    } catch (error) {
      console.error('Error fetching list episodes', error)
    }
  },
  fetchLocations: async (page = 1, searchTerm = '') => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location?page=${page}&name=${searchTerm}`,
      )
      set({
        locations: response.data.results,
        currentPageLocation: page,
        nextPageLocation: response.data.info.next,
        prevPageLocation: response.data.info.prev,
      })
    } catch (error) {
      console.error('Error fetching list locations', error)
    }
  },
  fetchCharacters: async (urls: string[]) => {
    try {
      const urlsFilter = [...new Set(urls)]
      const ids = urlsFilter.map(url => url.split('/').pop()).join(',')
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${ids}`,
      )
      const characters = Array.isArray(response.data)
        ? response.data
        : [response.data]

      set(state => ({
        characters: { ...state.characters, ...characters },
      }))
    } catch (error) {
      console.error('Error fetching list characters', error)
    }
  },
  setSearchTermEpisode: (searchTerm: string) =>
    set({ searchTermEpisode: searchTerm }),
  setSearchTermLocation: (searchTerm: string) =>
    set({ searchTermLocation: searchTerm }),
}))

export default useStore
