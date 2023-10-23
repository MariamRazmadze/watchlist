import styled from "styled-components";

interface ErrorMessageProps {
  message: string;
}

const StyledError = styled.p`
  text-align: center;
  font-size: 2rem;
  padding: 4.8rem;
  color: red;
`;

export function ErrorMessage({ message }: ErrorMessageProps) {
  return <StyledError>{message}</StyledError>;
}
