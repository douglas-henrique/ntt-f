import React from "react";
import styles from "./styles.module.scss";
import {
  Button,
  RatingIndicator,
  Text,
  BusyIndicator,
} from "@ui5/webcomponents-react";
import { useDispatch, useSelector } from "react-redux";
import { MovieStoreType } from "../../redux/types";
import { setFavoriteMovie } from "../../redux/movies";

export const MovieInformations: React.FC = () => {
  const { movie, isLoading, favoriteMovies }: MovieStoreType = useSelector(
    ({ movie }) => movie
  );

  const dispatch = useDispatch();

  if (isLoading) return <BusyIndicator />;

  return movie.Title ? (
    <div className={styles.container}>
      <div className={styles.informations}>
        <h2 className={styles.title}>{movie.Title}</h2>
        <Text className={styles.description}>{movie.Plot}</Text>
        <Text className={styles.actors}>{movie.Actors}</Text>
        <div className={styles.rating}>
          <span>
            <RatingIndicator value={Number(movie.imdbRating) || 0} />
          </span>
          <small>(IMDb Rating)</small>
        </div>
        <Button
          design={"Emphasized"}
          onClick={() => dispatch(setFavoriteMovie(movie.imdbID))}
          className={styles.favoriteButton}
        >
          {movie.imdbID && favoriteMovies.includes(movie.imdbID)
            ? "Favorited movie"
            : "Favorite"}
        </Button>
      </div>
      <div className={styles.poster}>
        <img src={movie.Poster} alt={`${movie.Title} poster image`} />
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <h2 className={styles.customPlaceHolder}>
        Search something like "the avengers"...
      </h2>
    </div>
  );
};
