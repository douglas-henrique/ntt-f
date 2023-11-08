import { createSlice } from "@reduxjs/toolkit";
import { MovieStoreType } from "../types";
import {
  loadMoviesFromLocalStorage,
  setFavorite,
} from "../../global/localStorage";

const favoriteMovies = loadMoviesFromLocalStorage();

const initialState = {
  isLoading: false,
  movie: {},
  error: {},
  favoriteMovies: favoriteMovies,
} as MovieStoreType;

export const counterSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCurrentMovie: (state, action) => {
      state.movie = action.payload;
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetCurrentMovie: (state) => {
      state.movie = initialState.movie;
      state.isLoading = false;
    },
    setFavoriteMovie: (state, action) => {
      state.isLoading = false;
      setFavorite(action.payload);
      const favoriteMovies = loadMoviesFromLocalStorage();
      state.favoriteMovies =  
        favoriteMovies === undefined
          ? initialState.favoriteMovies
          : favoriteMovies;
    },
  },
});

export const {
  setCurrentMovie,
  setIsLoading,
  resetCurrentMovie,
  setError,
  setFavoriteMovie,
} = counterSlice.actions;

export default counterSlice.reducer;
