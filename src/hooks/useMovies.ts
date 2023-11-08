import { axiosInstance } from "../global/axios";
import axios, { AxiosError } from "axios";
import { MovieProps } from "../redux/types";
import { useDispatch } from "react-redux";
import { setCurrentMovie, setError, setIsLoading } from "../redux/movies";

export const useMovies = () => {
  const dispatch = useDispatch();

  const getMovieByTitle = async (movieTitle: string) => {
    dispatch(setIsLoading(true));

    try {
      const { data } = await axiosInstance.get<MovieProps>(`/${movieTitle}`);
      dispatch(setCurrentMovie(data));
    } catch (error) {
      dispatch(setIsLoading(false));
      if (axios.isAxiosError(error)) {
        const e = error as AxiosError;
        dispatch(setError(e.response?.data));
      }
    }
  };

  return { getMovieByTitle };
};
