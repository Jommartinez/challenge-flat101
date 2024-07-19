interface InputSearchProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  localSearchTerm: string
}

export const InputSearch = ({
  handleSearch,
  localSearchTerm,
}: InputSearchProps) => {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      value={localSearchTerm}
      onChange={handleSearch}
    />
  )
}
