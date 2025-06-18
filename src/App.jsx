import { Route, Routes } from 'react-router-dom'
import MovieList from './components/MovieList.jsx'
import MovieDetail from './components/MovieDetail.jsx'
import NotFound from './components/NotFound'
import GenreList from './components/GenreList.jsx'

function App() {
   return (
      <Routes>
         <Route path="/" element={<MovieList />} />
         <Route path="/detail/:movieId" element={<MovieDetail />} />
         <Route path="/genre" element={<GenreList />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
