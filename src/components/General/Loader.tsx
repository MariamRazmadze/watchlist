import styled from "styled-components";

export function Loader() {
  return <StyledLoader>Loading...</StyledLoader>;
}

const StyledLoader = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 600;
  margin: 4.8rem;
`;
