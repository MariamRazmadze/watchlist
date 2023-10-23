import styled from "styled-components";
import { WatchedMovieData } from "./Main";
import UserRatingLogo from "../../assets/userRating.svg";
import imdbRatingLogo from "../../assets/imdbRating.svg";
import { AiOutlineNumber } from "react-icons/ai";
import { TbTimeDuration45 } from "react-icons/tb";

interface WatchedSummaryProps {
  watched: WatchedMovieData[];
}

const average = (arr: number[]): number => {
  return arr.reduce((acc, cur) => acc + cur / arr.length, 0);
};

const Summary = styled.div`
  padding: 2.2rem 3.2rem 1.8rem 3.2rem;
  border-radius: 0.9rem;
  background-color: ${({ theme }) => theme.list};
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);
  h2 {
    text-transform: uppercase;
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
    color: ${({ theme }) => theme.accent};
  }
  div {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.6rem;
    font-weight: 600;
  }
  p {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export function WatchedSummary({ watched }: WatchedSummaryProps) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <Summary>
      <h2>Your Watchlist</h2>
      <div>
        <p>
          <span style={{ marginTop: "5px" }}>
            <AiOutlineNumber />
          </span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <img src={imdbRatingLogo} alt="imdb rating logo" />
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <img src={UserRatingLogo} alt="user rating logo" />
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span style={{ marginTop: "5px" }}>
            <TbTimeDuration45 />
          </span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </Summary>
  );
}
