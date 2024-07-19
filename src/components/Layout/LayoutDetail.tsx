import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { HeaderDetail } from '../Header/HeaderDetail'

export const LayoutDetail = () => {
  const [name, setName] = useState('')
  const location = useLocation()

  useEffect(() => {
    const data = location.state
    if (data) {
      setName(data.name)
      return
    }
  }, [location.state])

  return (
    <>
      <HeaderDetail name={name} />
      <Outlet />
    </>
  )
}
