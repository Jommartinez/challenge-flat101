import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { Episode, EpisodeDetail, Location, LocationDetail } from './pages'
import { LayoutDetail } from './components/Layout/LayoutDetail'

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutDetail />}>
          <Route path="/episode/:id" element={<EpisodeDetail />} />
          <Route path="/location/:id" element={<LocationDetail />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/episode" />} />
          <Route path="/episode" element={<Episode />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<Navigate to="/episode" />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
