import styled from "styled-components";

export const Button = styled.button<{ $w?: string }>`
  width: ${(p) => p.$w ?? "11em"};
  background-color: #86027b;
  padding: 1.3em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  transition: 0.2s;
  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(1.01);
    opacity: 1;
  }
`;
