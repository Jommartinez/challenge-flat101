import { Episode, Location } from '../../store/useStore'
import { Item } from '../Item/Item'
import './ListItems.css'

export const ListItems = ({ items }: { items: Episode[] | Location[] }) => {
  return (
    <div className="list-item">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}
