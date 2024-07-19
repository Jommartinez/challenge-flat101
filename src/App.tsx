import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { Episode, EpisodeDetail, Location, LocationDetail } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/episode" />} />
          <Route path="/episode" element={<Episode />} />
          <Route path="/episode/:id" element={<EpisodeDetail />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/:id" element={<LocationDetail />} />
          <Route path="*" element={<Navigate to="/episode" />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
