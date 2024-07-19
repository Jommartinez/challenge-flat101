import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

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
      <div>
        <p>Return</p>
        <p>{name}</p>
      </div>
      <Outlet />
    </>
  )
}
