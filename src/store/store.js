import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from '../features/movieSlice'
import genresReducer from '../features/genreSlice'

const store = configureStore({
   reducer: {
      movies: moviesReducer,
   },
})

export default store
