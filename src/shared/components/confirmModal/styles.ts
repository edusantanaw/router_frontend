import styled from "styled-components";

export const ModalContent = styled.div`
  margin-inline: auto;
  align-self: center;
  height: 13em;
  background-color: #2b2a2a;
  box-shadow: 1px 1px 5px 1px #b3afb23e;
  display: flex;
  flex-direction: column;
  padding: 2em;
  align-items: center;
  justify-content: center;
  gap: 2em;
  border-radius: 10px;
  .actions {
    display: flex;
    gap: 1em;
  }

  p {
    color: #fff;
    font-size: 1.2em;
    font-weight: 400;
  }
`;
