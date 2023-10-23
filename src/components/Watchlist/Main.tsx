import { ReactNode } from "react";

import styled from "styled-components";
interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return <StyledBody>{children}</StyledBody>;
}
export interface MovieData {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface WatchedMovieData {
  imdbID: string;
  title: string | undefined;
  year: string | undefined;
  poster: string | undefined;
  runtime: number;
  imdbRating: number;
  userRating: number;
}

const StyledBody = styled.main`
  height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
`;
