import { describe, test, expect, vi } from 'vitest'
import axios from '../../libs/axios'
import { fetchEpisodes } from '../../api'

vi.mock('../../libs/axios')

describe('fetchEpisodes', () => {
  test('fetches episodes successfully', async () => {
    const mockResponse = {
      data: {
        results: [
          { id: 1, name: 'Pilot' },
          { id: 2, name: 'Lawnmower Dog' },
        ],
        info: {
          next: 2,
          prev: null,
        },
      },
    }

    vi.mocked(axios.get).mockResolvedValue(mockResponse)

    const result = await fetchEpisodes(1, 'Pilot')

    expect(axios.get).toHaveBeenCalledWith('/episode?page=1&name=Pilot')

    expect(result).toEqual({
      episodes: mockResponse.data.results,
      currentPageEpisode: 1,
      nextPageEpisode: mockResponse.data.info.next,
      prevPageEpisode: mockResponse.data.info.prev,
    })
  })
})
