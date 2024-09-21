import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  padding: 2em 4em;
  font-weight: 500;
  @media (max-width: 1050px) {
    padding: 1.5em;
  }

  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    padding-top: 4em;
    width: 100%;
  }
`;
