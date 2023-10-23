import GlobalStyles from "./components/General/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Header/Navbar";
import Main, { MovieData } from "./components/Watchlist/Main";
import { WatchedMovieData } from "./components/Watchlist/Main";
import { useState, useEffect } from "react";
import { WatchedMovieList } from "./components/Watchlist/WatchedMovieList";
import { WatchedSummary } from "./components/Watchlist/WatchedSummary";
import { MovieList } from "./components/Watchlist/MovieList";
import { Box } from "./components/Watchlist/Box";
import { Loader } from "./components/General/Loader";
import { ErrorMessage } from "./components/General/ErrorMessage";
import { MovieDetails } from "./components/Watchlist/MovieDetails";

const defaultTheme = {
  primary: " #f56565;",
  accent: "#3bb54a",
  red: " #fa5252;",
  darkRed: "#e03131;",
  userRating: "#5799EF",
  imdbRating: "#F5C518",
  text: "#fbf2f2;",
  textDark: " #595959;",
  background: "#212529",
  box: "#2b3035;",
  list: "#343a40;",
};

export const KEY = "4a044080";

export default function App() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [watched, setWatched] = useState<WatchedMovieData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handleSelectMovie(id: string): void {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie(): void {
    setSelectedId(null);
  }

  function handleAddWatched(movie: WatchedMovieData): void {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id: string): void {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Something went wrong");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          const error = err as Error;
          if (error.name !== "AbortError") {
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <Main>
        <Box height="30vh">
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box height="70vh">
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </ThemeProvider>
  );
}
