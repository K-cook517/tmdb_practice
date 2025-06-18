import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../features/movieSlice'
import { Link } from 'react-router-dom'
import { fetchGenres } from '../features/genreSlice'

function MovieList() {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchMovies())
   }, [dispatch])

   if (loading) return <p>로딩 중 ...</p>
   if (error) return <p>ERROR: {error}</p>

   return (
      <div style={{ padding: '20px' }}>
         <h1>현재 상영 영화 목록</h1>
         <ul>
            {movies.map((movie) => (
               <Link key={movie.id} to={`detail/${movie.id}`}>
                  <li>{movie.title}</li>
               </Link>
            ))}
            <li>
               <Link to={`genre`}>
                  <h3>장르 목록</h3>
               </Link>
            </li>
         </ul>
      </div>
   )
}

export default MovieList
