import { NavLink } from 'react-router-dom'
import { Episode, Location } from '../../store/useStore'

import './Item.css'
export const Item = ({ item }: { item: Episode | Location }) => {
  if ('episode' in item) {
    return (
      <NavLink
        className="item"
        data-testid="episode"
        state={item}
        to={`/episode/${item.id}`}
      >
        <h3 className="item__subtitle">{item.episode}</h3>
        <h2 className="item__title">{item.name}</h2>
        <p className="item__detail">{item.air_date}</p>
      </NavLink>
    )
  } else {
    return (
      <NavLink
        className="item"
        data-testid="location"
        state={item}
        to={`/location/${item.id}`}
      >
        <h3 className="item__subtitle">{item.type}</h3>
        <h2 className="item__title">{item.name}</h2>
        <p className="item__detail">{item.dimension}</p>
      </NavLink>
    )
  }
}
