import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, test, expect, vi } from 'vitest'
import { Item } from '../../../components'

vi.mock('react-router-dom', () => ({
  NavLink: ({ children }: any) => <div>{children}</div>,
}))

describe('Item Component', () => {
  const mockEpisode = {
    id: 28,
    name: 'The Ricklantis Mixup',
    air_date: 'September 10, 2017',
    episode: 'S03E07',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
    ],
    url: 'https://rickandmortyapi.com/api/episode/28',
    created: '2017-11-10T12:56:36.618Z',
  }

  const mockLocation = {
    id: 3,
    name: 'Citadel of Ricks',
    type: 'Space station',
    dimension: 'unknown',
    residents: [
      'https://rickandmortyapi.com/api/character/8',
      'https://rickandmortyapi.com/api/character/14',
    ],
    url: 'https://rickandmortyapi.com/api/location/3',
    created: '2017-11-10T13:08:13.191Z',
  }
  test('renders episode item correctly', () => {
    render(<Item item={mockEpisode} />)

    expect(screen.getByText('S03E07')).toBeInTheDocument()
    expect(screen.getByText('The Ricklantis Mixup')).toBeInTheDocument()
  })

  test('renders location item correctly', () => {
    render(<Item item={mockLocation} />)

    expect(screen.getByText('Space station')).toBeInTheDocument()
    expect(screen.getByText('Citadel of Ricks')).toBeInTheDocument()
    expect(screen.getByText('unknown')).toBeInTheDocument()
  })
})
