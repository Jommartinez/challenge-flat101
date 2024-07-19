import { describe, test, expect, vi } from 'vitest'
import axios from '../../libs/axios'
import { fetchLocations } from '../../api'

vi.mock('../../libs/axios')

describe('fetchEpisodes', () => {
  test('fetches episodes successfully', async () => {
    const mockResponse = {
      data: {
        results: [
          { id: 1, name: 'Earth' },
          { id: 2, name: 'Abadango' },
        ],
        info: {
          next: 2,
          prev: null,
        },
      },
    }

    vi.mocked(axios.get).mockResolvedValue(mockResponse)

    const result = await fetchLocations(1, 'Earth')

    expect(axios.get).toHaveBeenCalledWith('/location?page=1&name=Earth')

    expect(result).toEqual({
      locations: mockResponse.data.results,
      currentPageLocation: 1,
      nextPageLocation: mockResponse.data.info.next,
      prevPageLocation: mockResponse.data.info.prev,
    })
  })
})
