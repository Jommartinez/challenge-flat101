import { Character } from '../../store/useStore'

export const Avatar = ({ character }: { character: Character }) => {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </div>
  )
}
