import { NavLink } from 'react-router-dom'
import { Episode, Location } from '../../store/useStore'
export const Item = ({ item }: { item: Episode | Location }) => {
  if ('episode' in item) {
    return (
      <NavLink state={item} to={`/episode/${item.id}`}>
        <h3>{item.episode}</h3>
        <h2>{item.name}</h2>
        <p>{item.air_date}</p>
        <hr />
      </NavLink>
    )
  } else {
    return (
      <NavLink state={item} to={`/location/${item.id}`}>
        <h3>{item.type}</h3>
        <h2>{item.name}</h2>
        <p>{item.dimension}</p>
        <hr />
      </NavLink>
    )
  }
}
