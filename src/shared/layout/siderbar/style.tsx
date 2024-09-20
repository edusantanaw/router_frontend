import { styled } from "styled-components";

export const SiderBarContainer = styled.div`
  width: 15%;
  height: 100vh;
  background-color: #272727;
  color: #fff;
`;

export const List = styled.ul`
  p {
    color: #fff;
    width: 100%;
    padding: 1em 2em;
    height: 100%;
    transition: 0.2s;
  }
  p:hover {
    background-color: #00000029;
  }

  li {
    width: 100%;
  }
`;

export const MenuTitle = styled.div`
  padding: 1.5em;
  text-align: center;
  border-bottom: 1px solid #c3c3c3;
  font-size: 1.06em;
`;
