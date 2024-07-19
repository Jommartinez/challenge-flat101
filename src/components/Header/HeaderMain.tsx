import { InputSearch } from '../InputSearch/InputSearch'
import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'

interface HeaderMainProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  localSearchTerm: string
}

export const HeaderMain = ({
  handleSearch,
  localSearchTerm,
}: HeaderMainProps) => {
  return (
    <header>
      <Logo />
      <div>
        <InputSearch
          handleSearch={handleSearch}
          localSearchTerm={localSearchTerm}
        />
        <Navbar />
      </div>
    </header>
  )
}
