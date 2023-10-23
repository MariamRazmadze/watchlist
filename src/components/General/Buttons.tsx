import styled from "styled-components";

export const ToggleButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 2.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.background};
  color: white;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoBackButton = styled.button`
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  height: 3.2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  color: ${({ theme }) => theme.box};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
  font-family: sans-serif;
  font-size: 2.4rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAddButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 10rem;
  font-size: 1.4rem;
  padding: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #4ec35f;
  }
`;

export const StyledDeleteButton = styled.button`
  position: absolute;
  right: 2.4rem;

  height: 1.8rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.red};
  color: var(--color-background-900);
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.darkRed};
  }
`;
