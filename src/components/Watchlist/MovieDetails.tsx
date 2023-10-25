import { useState, useEffect } from "react";
import { Loader } from "../General/Loader";
import { GoBackButton, StyledAddButton } from "../General/Buttons";
import { WatchedMovieData } from "./Main";
import { IoMdArrowBack } from "react-icons/io";
import StarRating from "../Starrating/StarRating";
import { KEY } from "../../App";
import { useKey } from "../../customHooks/useKey";
import {
  StyledDetails,
  DetailsOverview,
  RatingContainer,
} from "./StyledDetails";

interface MovieDetailsProps {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: WatchedMovieData) => void;
  watched: WatchedMovieData[];
}

interface Movie {
  Title?: string;
  Year?: string;
  Poster?: string;
  Runtime?: string;
  imdbRating?: string;
  Plot?: string;
  Released?: string;
  Actors?: string;
  Director?: string;
  Genre?: string;
}

export function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}: MovieDetailsProps) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState<number>(0);
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserrating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie || {};

  function handleAdd() {
    const runtimeValue = runtime ? Number(runtime.split(" ").at(0)) : 0;
    const newWatchedMovie: WatchedMovieData = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: runtimeValue,
      userRating,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useKey("Escape", onCloseMovie);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Watchlist | ${title}`;

      return function () {
        document.title = "Watchlist";
      };
    },
    [title]
  );

  return (
    <StyledDetails>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <GoBackButton onClick={onCloseMovie}>
              <IoMdArrowBack />
            </GoBackButton>
            <img src={poster} alt={title} />
            <DetailsOverview>
              <h2>{title}</h2>
              <p>
                {released}&bull;{runtime}
              </p>
              <p>{genre}</p>
              <p>{year}</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#5799EF"
                  stroke="#5799EF"
                  width="18"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {imdbRating} IMDB rating
              </p>
            </DetailsOverview>
            <section>
              <RatingContainer>
                {!isWatched ? (
                  <>
                    <StarRating
                      maxRating={10}
                      size={24}
                      color="#5799EF"
                      onSetRating={setUserRating}
                    />

                    {userRating > 0 && (
                      <StyledAddButton onClick={handleAdd}>
                        +Add to list
                      </StyledAddButton>
                    )}
                  </>
                ) : (
                  <p>You already rated this movie {watchedUserrating}</p>
                )}
              </RatingContainer>
              <p>
                <em>{plot}</em>
              </p>
              <p>Starring {actors}</p>
              <p>Directed by {director}</p>
            </section>
          </header>
        </>
      )}
    </StyledDetails>
  );
}
