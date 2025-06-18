import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getGenres } from '../api/tmdbApi'

export const fetchGenres = createAsyncThunk('', async () => {
   const response = await getGenres()
   return response.data.results
})

const genreSlice = createSlice({
   name: 'genres',
   initialState: {
      genres: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchGenres.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchGenres.fulfilled, (state, action) => {
            state.loading = false
            state.genres = action.payload
         })
         .addCase(fetchGenres.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default genreSlice.reducer
