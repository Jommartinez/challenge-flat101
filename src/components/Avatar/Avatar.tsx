import { Character } from '../../store/useStore'

import './Avatar.css'

export const Avatar = ({ character }: { character: Character }) => {
  return (
    <div className="avatar">
      <img
        className="avatar__image"
        src={character.image}
        alt={character.name}
      />
      <p className="avatar__title">{character.name}</p>
    </div>
  )
}
