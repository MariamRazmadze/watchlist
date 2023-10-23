import styled from "styled-components";
import Search from "./Search";
import WatchlistLogo from "../../assets/logo.svg";
import { MovieData } from "../Watchlist/Main";

interface NavbarProps {
  movies: MovieData[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
export default function Navbar({ movies, query, setQuery }: NavbarProps) {
  return (
    <StyledNavbar>
      <Logo>
        <img src={WatchlistLogo} alt="logo" />
        <h1>Watchlist</h1>
      </Logo>
      <Search query={query} setQuery={setQuery} />
      <NumResults>
        Found <strong>{movies.length}</strong> results
      </NumResults>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 7.2rem;
  padding: 0 3.2rem;
  background-color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    grid-template-columns: 1fr 1fr;
  }
`;

const NumResults = styled.p`
  justify-self: end;
  font-size: 2rem;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 16px;
      font-weight: 500;
    }
    img {
      width: 22px;
    }
  }
`;
