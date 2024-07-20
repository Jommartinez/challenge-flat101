import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { Logo } from '../Logo/Logo'
import './Header.css'

export const HeaderDetail = ({ name }: { name: string }) => {
  const navigate = useNavigate()
  return (
    <header className="header">
      <Logo />
      <div className="header__box-secondary">
        <button
          className="header__arrow"
          role="button"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
        </button>
        <h1 className="header__title">{name}</h1>
      </div>
    </header>
  )
}
