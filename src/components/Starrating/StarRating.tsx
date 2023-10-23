import styled from "styled-components";
import Star from "./Star";
import { useState } from "react";

interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
  messages?: string[];
  defaultRating?: number;
  onSetRating?: (rating: number) => void | undefined;
}

export default function StarRating({
  maxRating = 3,
  color = "#000133",
  size = 24,
  defaultRating = 0,
  onSetRating,
}: StarRatingProps): JSX.Element {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating: number) {
    setRating(rating);
    if (onSetRating) {
      onSetRating(rating);
    }
  }

  return (
    <Container>
      <StarContainer>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </StarContainer>
      {/* <Text color={color} size={size}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </Text> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StarContainer = styled.div`
  display: flex;
`;

// const Text = styled.p<{ color: string; size: number }>`
//   line-height: "1";
//   margin: 0;
//   color: ${(props) => props.color};
//   font-size: ${(props) => props.size / 1.5}px;
// `;
