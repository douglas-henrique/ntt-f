import { configureStore } from "@reduxjs/toolkit";
import movie from "../redux/movies";

export default configureStore({
  reducer: {
    movie,
  },
});
