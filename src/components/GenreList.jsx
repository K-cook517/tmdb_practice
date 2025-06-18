import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenres } from '../features/movieSlice'
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
            {genres.map((genre) => (
               <li>{genre.name}</li>
            ))}
            <li>
               <Link to={`/`}>
                  <h3>현재 상영작</h3>
               </Link>
            </li>
         </ul>
      </div>
   )
}

export default GenreList
