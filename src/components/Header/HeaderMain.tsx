import { InputSearch } from '../InputSearch/InputSearch'
import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'

import './Header.css'

interface HeaderMainProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  localSearchTerm: string
}

export const HeaderMain = ({
  handleSearch,
  localSearchTerm,
}: HeaderMainProps) => {
  return (
    <header className="header">
      <Logo />
      <div className="header__box">
        <InputSearch
          handleSearch={handleSearch}
          localSearchTerm={localSearchTerm}
        />
        <Navbar />
      </div>
    </header>
  )
}
