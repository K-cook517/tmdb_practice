import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenres } from '../features/genreSlice'
import { Link } from 'react-router-dom'

function GenreList() {
   const dispatch = useDispatch()
   const { genres, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchGenres())
   }, [dispatch])

   if (loading) return <p>로딩 중 ...</p>
   if (error) return <p>ERROR: {error}</p>

   return (
      <div style={{ padding: '20px' }}>
         <h1>장르별 영화 목록</h1>
         <ul>
            {movies.map((movie) => (
               <Link key={movie.id} to={`detail/${movie.id}`}>
                  <li>{genres.map((genre) => `${genre.name}`).join(', ')}</li>
               </Link>
            ))}
         </ul>
      </div>
   )
}

export default GenreList
