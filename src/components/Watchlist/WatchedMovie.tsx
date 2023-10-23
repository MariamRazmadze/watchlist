import { WatchedMovieData } from "./Main";
import { StyledDeleteButton } from "../General/Buttons";
import UserRatingLogo from "../../assets/userRating.svg";
import imdbRatingLogo from "../../assets/imdbRating.svg";
import { TbTimeDuration45 } from "react-icons/tb";
interface WatchedMovieProps {
  movie: WatchedMovieData;
  onDeleteWatched: (id: string) => void;
}

export function WatchedMovie({ movie, onDeleteWatched }: WatchedMovieProps) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <img src={imdbRatingLogo} alt="imdb rating logo" />
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <img src={UserRatingLogo} alt="user rating logo" />
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span style={{ marginTop: "5px" }}>
            <TbTimeDuration45 />
          </span>
          <span>{movie.runtime} min</span>
        </p>
        <StyledDeleteButton onClick={() => onDeleteWatched(movie.imdbID)}>
          X
        </StyledDeleteButton>
      </div>
    </li>
  );
}
