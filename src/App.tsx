import GlobalStyles from "./components/General/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Watchlist/Main";
import { WatchedMovieData } from "./components/Watchlist/Main";
import { useState } from "react";
import { WatchedMovieList } from "./components/Watchlist/WatchedMovieList";
import { WatchedSummary } from "./components/Watchlist/WatchedSummary";
import { MovieList } from "./components/Watchlist/MovieList";
import { Box } from "./components/Watchlist/Box";
import { Loader } from "./components/General/Loader";
import { ErrorMessage } from "./components/General/ErrorMessage";
import { MovieDetails } from "./components/Watchlist/MovieDetails";
import { useMovies } from "./customHooks/useMovies";
import { useLocalStorage } from "./customHooks/useLocalStorage";

const defaultTheme = {
  primary: " #f56565;",
  accent: "#3bb54a",
  red: " #fa5252;",
  darkRed: "#e03131;",
  userRating: "#5799EF",
  imdbRating: "#F5C518",
  text: "#fbf2f2",
  textDark: "#7d7d7d",
  background: "#212529",
  box: "#2b3035;",
  list: "#343a40;",
};

export const KEY = "4a044080";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorage<WatchedMovieData[]>(
    [],
    "watched"
  );
  function handleSelectMovie(id: string): void {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie(): void {
    setSelectedId(null);
  }

  function handleAddWatched(movie: WatchedMovieData): void {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatched(id: string): void {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

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
