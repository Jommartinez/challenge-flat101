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
  locations: Location[]
  characters: Character[]
  fetchEpisodes: () => Promise<void>
  fetchLocations: () => Promise<void>
  fetchCharacters: (urls: string[]) => Promise<void>
}

const useStore = create<StoreState>(set => ({
  episodes: [],
  locations: [],
  characters: [],
  fetchEpisodes: async () => {
    try {
      const response = await axios.get(
        'https://rickandmortyapi.com/api/episode',
      )
      set({ episodes: response.data.results })
    } catch (error) {
      console.error('Error fetching list episodes', error)
    }
  },
  fetchLocations: async () => {
    try {
      const response = await axios.get(
        'https://rickandmortyapi.com/api/location',
      )
      set({ locations: response.data.results })
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
}))

export default useStore
