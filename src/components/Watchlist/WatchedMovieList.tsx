import { WatchedMovie } from "./WatchedMovie";
import { WatchedMovieData } from "./Main";

import { List } from "./List";

interface WatchedMovieListProps {
  watched: WatchedMovieData[];
  onDeleteWatched: (id: string) => void;
}

export function WatchedMovieList({
  watched,
  onDeleteWatched,
}: WatchedMovieListProps) {
  return (
    <List>
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </List>
  );
}
