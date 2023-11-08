type RatingProps = {
  Source: string;
  Value: string;
};

export type MovieProps = {
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Rating?: RatingProps[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
  Poster?: string;
};

export type MovieStoreType = {
  isLoading: boolean;
  movie: MovieProps;
  error: string;
  favoriteMovies: string[];
};
