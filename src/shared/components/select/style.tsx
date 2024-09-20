import styled from "styled-components";

export const SelectContainer = styled.div<{ $w?: string }>`
  position: relative;
  width: ${(p) => p.$w ?? "10em"};
  .options {
    position: absolute;
    z-index: 1;
    background: #69656561;
    width: 100%;
    margin-top: 0.4em;
    border-radius: 5px;
    border: 1px solid #c3c3c37d;
    backdrop-filter: blur(100px);
    li {
      padding: 0.8em;
      cursor: pointer;
      transition: 0.16s;
      &:hover {
        background-color: #11111152;
      }
    }

    span {
      font-weight: 400;
      font-size: 0.9em;
    }
  }
`;
