import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
   },
})

//상영 목록

export const getMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/now_playing', {
      params: {
         language: 'ko-KR',
         page: page,
         region: 'KR',
      },
   })
   return response
}

//장르별 구분
// https://api.themoviedb.org/3/genre/movie/list?language=ko
export const getGenres = async (page = 1) => {
   const response = await tmdbApi.get('/genre/movie/list', {
      params: {
         language: 'ko-KR',
      },
   })
   return response
}

//상세정보

export const getMovieDetails = async (movieId) => {
   const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: {
         language: 'ko-KR',
      },
   })
   return response
}

export default tmdbApi
