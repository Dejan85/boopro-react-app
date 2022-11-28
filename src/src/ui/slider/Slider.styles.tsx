import styled from "@emotion/styled";

export interface StylesPropsI {
  gap?: string;
}

export const SliderWrapper = styled.div<StylesPropsI>`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-auto-rows: 165px;
  grid-gap: var(--gap-20);
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;
