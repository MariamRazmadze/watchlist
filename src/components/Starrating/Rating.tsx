import StarRating from "./StarRating";
import { useState } from "react";

export default function Rating() {
  const [movieRating, setMovieRating] = useState(1);
  return (
    <div>
      <StarRating
        color="#853553"
        size={32}
        maxRating={10}
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
