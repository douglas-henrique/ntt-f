import React from "react";
import styles from "./styles.module.scss";
import { Input, Button } from "@ui5/webcomponents-react";
import { SubmitHandler, useForm } from "react-hook-form";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMovies } from "../../hooks/useMovies";
import { useDispatch } from "react-redux";
import { setCurrentMovie } from "../../redux/movies";

type Inputs = {
  movieTitle: string;
  exampleRequired: string;
};

const searchMovieSchema = z.object({
  movieTitle: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" }),
});

export const SearchInput: React.FC = () => {
  const { getMovieByTitle } = useMovies();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(searchMovieSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = ({ movieTitle }) => {
    getMovieByTitle(movieTitle);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
        <Input
          {...register("movieTitle")}
          className={styles.searchInput}
          placeholder="Search by title"
        />
        {errors.movieTitle && <span>{errors.movieTitle.message}</span>}
        <Button
          type="Submit"
          design="Emphasized"
          className={styles.searchButton}
        >
          Search
        </Button>
        <Button
          design="Attention"
          onClick={() => {
            reset();
            dispatch(setCurrentMovie({}));
          }}
        >
          Reset
        </Button>
      </form>
    </div>
  );
};
