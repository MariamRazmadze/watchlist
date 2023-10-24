import styled from "styled-components";
const StyledSearch = styled.input`
  justify-self: center;
  border: none;
  padding: 1.1rem 1.6rem;
  font-size: 1.8rem;
  border-radius: 0.7rem;
  width: 40rem;
  transition: all 0.3s;
  color: ${({ theme }) => theme.text};
  background-color: #ff7575;
  &::placeholder {
    color: ${({ theme }) => theme.textDark};
  }
  &:focus {
    outline: none;
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  @media screen and (max-width: 768px) {
    width: auto;
    max-width: 200px;
    font-size: 16px;
  }
`;

interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ query, setQuery }: SearchProps) {
  return (
    <StyledSearch
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
