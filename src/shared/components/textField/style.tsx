import styled from "styled-components";

export const TextFieldContainer = styled.div<{ $w?: string }>`
  width: ${(p) => p.$w ?? "10em"};
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`;

export const Input = styled.input<{ $w?: string }>`
  padding: 1.1em 1em;
  border: none;
  border-radius: 4px;
  width: ${(p) => p.$w ?? "10em"};
  outline: none;
  color: #fff;
  background-color: #69656561;
  border: 1px solid #c3c3c37d;
`;

export const FieldTitle = styled.label`
  font-weight: 300;
  font-size: 0.9em;
`;
