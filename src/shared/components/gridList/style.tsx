import styled from "styled-components";

export const GridListContainer = styled.div`
  .header {
    border-radius: 5px 5px 0px 0px;
    border: 1px solid #9c9c9c;
    display: flex;
    background-color: #09012052;
  }

  .data {
    border: 1px solid #c3c3c3;
    display: flex;
    flex-direction: column;
  }

  .field {
    display: flex;
  }

  .data li {
    border-right: 1px solid #9c9c9c;
    border-bottom: 1px solid #9c9c9c;
  }
  .data li:last-child {
    border-bottom: none;
  }

  .field li:last-child {
    border: none;
  }

  .header li + li {
    border-left: 1px solid #c3c3c3;
  }
`;

export const Header = styled.li<{ $w?: string }>`
  width: ${(p) => p?.$w ?? "20%"};
  padding: 0.5em;
  text-align: center;
  text-transform: uppercase;
  color: #b6b6b6;
`;

export const GridItemList = styled(Header)`
  text-transform: lowercase;
  color: #cccbcb;
  text-align: center;
`;

export const GridListField = styled.li``;
