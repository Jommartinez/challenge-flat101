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
      placeholder="Search..."
      value={localSearchTerm}
      onChange={handleSearch}
    />
  )
}
