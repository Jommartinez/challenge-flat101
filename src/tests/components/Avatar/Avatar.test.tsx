import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'
import { Avatar } from '../../../components'

const mockCharacter = {
  id: 2,
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  url: 'https://rickandmortyapi.com/api/character/2',
  created: '2017-11-04T18:50:21.651Z',
}

describe('Avatar Component', () => {
  test('renders the avatar with image and name', () => {
    render(<Avatar character={mockCharacter} />)

    const imageElement = screen.getByAltText(mockCharacter.name)
    const nameElement = screen.getByText(mockCharacter.name)

    expect(imageElement).toBeInTheDocument()
    expect(nameElement).toBeInTheDocument()

    expect(imageElement).toHaveAttribute('src', mockCharacter.image)
  })
})
