import styled from "@emotion/styled";

interface InputI {
  error?: any;
}

export const Input = styled.input<InputI>`
  padding: var(--pd-5);

  border: ${({ error }) => {
    return error && "1px solid red";
  }};

  &::placeholder {
    color: ${({ error }) => {
      return error && "red";
    }};
  }
`;
