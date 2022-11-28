import styled from "@emotion/styled";

export interface StylesPropsI {
  gap?: string;
}

export const MovieCardWrapper = styled.div<StylesPropsI>`
  display: flex;

  img {
    object-fit: cover;
  }
`;
