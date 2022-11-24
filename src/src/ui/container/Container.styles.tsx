import styled from "@emotion/styled";

export interface StylesPropsI {
  gap?: string;
}

export const Container = styled.div<StylesPropsI>`
  display: flex;
`;
export const ContainerColumn = styled(Container)`
  flex-direction: column;
`;

export const GridContainer = styled.div<StylesPropsI>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 180px;
  grid-gap: 10px;

  /* @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  } */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 20% 30%;
  }
`;

export const MoviesContainer = styled(ContainerColumn)`
  background-color: var(--primary-color);
  min-height: 100%;
  padding: var(--pd-20);
  color: white;
  gap: var(--gap-50);
`;

export const Center = styled(Container)`
  justify-content: center;
  align-items: center;
  height: 100%;
`;
