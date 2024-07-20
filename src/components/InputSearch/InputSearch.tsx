import { Search } from 'lucide-react'
import './InputSearch.css'

interface InputSearchProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  localSearchTerm: string
}

export const InputSearch = ({
  handleSearch,
  localSearchTerm,
}: InputSearchProps) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Buscar..."
        value={localSearchTerm}
        onChange={handleSearch}
      />
      <Search className="search__icon" size={24} color="#42B4CA" />
    </div>
  )
}
