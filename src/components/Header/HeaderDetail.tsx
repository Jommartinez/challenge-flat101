import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { Logo } from '../Logo/Logo'

export const HeaderDetail = ({ name }: { name: string }) => {
  const navigate = useNavigate()
  return (
    <header>
      <Logo />
      <div>
        <button role="button" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <p>{name}</p>
      </div>
    </header>
  )
}
