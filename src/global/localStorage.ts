const saveToLocalStorage = (movies: string[]) => {
  try {
    const serialisedState = JSON.stringify(movies);
    localStorage.setItem("movieLocalStorage", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};
const loadMoviesFromLocalStorage = () => {
  try {
    const movies = localStorage.getItem("movieLocalStorage");
    if (movies === null) return undefined;
    return JSON.parse(movies);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

const setFavorite = (imdbID: string) => {
  const movies = loadMoviesFromLocalStorage();
  if (movies === undefined) {
    const newMovies = [imdbID];
    saveToLocalStorage(newMovies);
  } else {
    if (movies.includes(imdbID)) {
      const movieIndex = movies.indexOf(imdbID);
      movies.splice(movieIndex, 1);
      saveToLocalStorage(movies);
    } else {
      movies.push(imdbID);
      saveToLocalStorage(movies);
    }
  }
};

export { setFavorite, loadMoviesFromLocalStorage };
