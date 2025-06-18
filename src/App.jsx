import { Route, Routes } from 'react-router-dom'
import MovieList from './components/MovieList.jsx'
import MovieDetail from './components/MovieDetail.jsx'
import NotFound from './components/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<MovieList />} />
         <Route path="/detail/:movieId" element={<MovieDetail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
