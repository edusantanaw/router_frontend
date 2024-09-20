import styled from "styled-components";
import { Container } from "../../shared/styles/container";

export const CustomerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icons {
    align-items: center;
    gap: 1em;
    align-self: center;
    li {
      all: unset;
      margin-left: 1em;
      font-size: 1em;
      cursor: pointer;
    }
  }
`;
