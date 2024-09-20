import styled from "styled-components";

export const Title = styled.h2<{ $size?: string }>`
  color: #fff;
  font-size: ${(p) => p.$size ?? "2em"};
  letter-spacing: 2px;
  font-weight: 400;
`;
