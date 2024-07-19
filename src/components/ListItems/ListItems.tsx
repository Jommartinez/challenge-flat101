import { Episode, Location } from '../../store/useStore'
import { Item } from '../Item/Item'

export const ListItems = ({ items }: { items: Episode[] | Location[] }) => {
  return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}
