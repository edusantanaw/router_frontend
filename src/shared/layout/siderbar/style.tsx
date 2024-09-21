import { styled } from "styled-components";

export const SiderBarContainer = styled.div`
  width: 13em;
  height: 100vh;
  background-color: #272727;
  color: #fff;
  position: relative;
  z-index: 100;
  @media (max-width: 1050px) {
    width: 12em;
  }

  @media (max-width: 700px) {
    position: fixed;
    background-color: transparent;
    .menu {
      display: none;
      background-color: #272727;
      height: 100vh;
    }
    .menu.show {
      display: block;
    }
  }

  .open {
    position: fixed;
    left: 1em;
    top: 1em;
    position: fixed;
  }

  .hamburger {
    display: none;
    font-size: 1.7em;
    cursor: pointer;

    @media (max-width: 700px) {
      display: block;
    }
  }

  .close {
    background-color: #2727276e;
    width: 100%;
    height: 100vh;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
  }

  .show {
    @media (max-width: 700px) {
      display: block;
    }
  }
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
  display: flex;
  align-items: center;
  gap: 1em;
`;
