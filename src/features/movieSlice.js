import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovieDetails, getMovies, getGenres } from '../api/tmdbApi'

export const fetchMovies = createAsyncThunk('', async () => {
   const response = await getMovies()
   return response.data.results
})
export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   return response.data
})
export const fetchGenres = createAsyncThunk('', async () => {
   const response = await getGenres()
   return response.data.results
})

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [],
      genres: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetails = action.payload
         })
         .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieSlice.reducer
