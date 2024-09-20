import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .close_bg {
    position: absolute;
    z-index: -1;
    background-color: #00000083;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  }
`;
