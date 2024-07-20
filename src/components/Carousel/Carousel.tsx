import { Character } from '../../store/useStore'
import { Avatar } from '../Avatar/Avatar'

import './Carousel.css'

export const Carousel = ({ characters }: { characters: Character[] }) => {
  return (
    <div className="carousel">
      {characters.map((character, index) => (
        <Avatar key={`${character.id}-${index}`} character={character} />
      ))}
    </div>
  )
}
