import styled from "styled-components";
import { Form } from "../../../../shared/styles/form";

export const FormContainer = styled(Form)`
  gap: 1.6em;
  width: 40em;
  padding: 3em 2em;
  .fields {
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1em;
  }

  .error {
    color: #fc0606;
  }
`;
