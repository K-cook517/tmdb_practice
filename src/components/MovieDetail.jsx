import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchMovieDetails } from '../features/movieSlice'

function MovieDetail() {
   const { movieId } = useParams()
   const dispatch = useDispatch()
   const { movieDetails, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      if (movieId) {
         dispatch(fetchMovieDetails(movieId))
      }
   }, [dispatch, movieId])

   if (loading) return <p>로딩 중 ...</p>
   if (error) return <p>ERROR: {error}</p>

   return (
      <div style={{ padding: '20px' }}>
         {movieDetails && (
            <div>
               <div>
                  <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt={movieDetails.title} width="270" />
               </div>
               <div>
                  <h2>{movieDetails.title}</h2>
                  <h3>줄거리</h3>
                  <p>{movieDetails.overview}</p>
                  <h3>장르</h3>
                  <p>{movieDetails.genres.map((genre) => `${genre.name}`).join(', ')}</p>
                  <h3>개봉일</h3>
                  <p>{movieDetails.release_date}</p>
                  <h3>평점</h3>
                  <p>{movieDetails.vote_average}</p>
               </div>
            </div>
         )}
      </div>
   )
}

export default MovieDetail
