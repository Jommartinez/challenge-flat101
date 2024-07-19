import { Character } from '../../store/useStore'
import { Avatar } from '../Avatar/Avatar'

export const Carousel = ({ characters }: { characters: Character[] }) => {
  return (
    <div>
      {characters.map((character, index) => (
        <Avatar key={`${character.id}-${index}`} character={character} />
      ))}
    </div>
  )
}
