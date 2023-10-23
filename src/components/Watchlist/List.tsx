import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  overflow-x: hidden;
  overflow-y: auto;
  img {
    width: 100%;
    grid-row: 1 / -1;
  }
  h3 {
    font-size: 1.8rem;
  }
  div {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }
  p {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  li {
    position: relative;
    display: grid;
    grid-template-columns: 4rem 1fr;
    grid-template-rows: auto auto;
    column-gap: 2.4rem;
    font-size: 1.6rem;
    align-items: center;
    padding: 1.6rem 3.2rem;
    border-bottom: 1px solid ${({ theme }) => theme.list};
  }
`;

export const StyledListMovies = styled(List)`
  li {
    cursor: pointer;
    transition: all 0.3s;
  }
  li:hover {
    background-color: ${({ theme }) => theme.list};
  }
`;
