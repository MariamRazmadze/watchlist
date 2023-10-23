import { useState, ReactNode } from "react";
import { ToggleButton } from "../General/Buttons";
import styled from "styled-components";

interface ListBoxProps {
  children: ReactNode;
  height: string;
}

interface StylefBoxProps {
  height: string;
}

const StyledBox = styled.div<StylefBoxProps>`
  width: 60vw;
  background-color: ${({ theme }) => theme.box};
  border-radius: 0.9rem;
  overflow: auto;
  max-height: ${({ height }) => height};
  position: relative;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export function Box({ children, height }: ListBoxProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <StyledBox height={height}>
      <ToggleButton onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? <PlusMinus>-</PlusMinus> : <PlusMinus>+</PlusMinus>}
      </ToggleButton>
      {isOpen && children}
    </StyledBox>
  );
}

const PlusMinus = styled.p`
  font-weight: 400;
  padding-bottom: 3px;
`;
