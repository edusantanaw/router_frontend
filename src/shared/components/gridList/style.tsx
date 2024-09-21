import styled from "styled-components";

export const GridListContainer = styled.div`
  overflow: auto;
  .grid_content {
    .header {
      border-radius: 5px 5px 0px 0px;
      border: 1px solid #9c9c9c;
      display: flex;
      background-color: #00000052;
    }

    .data {
      border: 1px solid #c3c3c3;
      display: flex;
      flex-direction: column;
    }

    .field {
      display: flex;
      border-bottom: 1px solid #9c9c9c;
    }

    @media (max-width: 900px) {
      width: 70em;
      max-height: 100%;
      overflow: auto;
    }
  }
`;

export const Header = styled.li<{ $w?: string }>`
  width: ${(p) => p?.$w ?? "20%"};
  padding: 1em 0.5em;
  text-align: center;
  text-transform: uppercase;
  color: #b6b6b6;
`;

export const GridItemList = styled.div<{ $w?: string }>`
  width: ${(p) => p?.$w ?? "20%"};
  padding: 0.5em;
  color: #b6b6b6;
  text-transform: lowercase;
  text-align: center;
  font-weight: 400;
`;
