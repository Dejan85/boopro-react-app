import styled from "@emotion/styled";

export interface StylesPropsI {}

export const ButtonStyles = styled.button<StylesPropsI>`
  padding: var(--pd-5);
  cursor: pointer;
`;
