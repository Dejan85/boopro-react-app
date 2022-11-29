import styled from "@emotion/styled";

export interface StylesPropsI {
  gap?: string;
}

export const MovieCardWrapper = styled.div<StylesPropsI>`
  display: flex;
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const Title = styled.div`
  position: absolute;
  bottom: 10px;
  padding: 5px;
  background: rgba(0, 0, 0, 0.6);
`;
