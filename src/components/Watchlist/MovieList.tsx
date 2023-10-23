import { Movie } from "./Movie";
import { MovieData } from "./Main";
import { StyledListMovies } from "./List";

interface MovieListProps {
  movies: MovieData[];
  onSelectMovie: (id: string) => void;
}

export function MovieList({ movies, onSelectMovie }: MovieListProps) {
  return (
    <StyledListMovies>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </StyledListMovies>
  );
}
