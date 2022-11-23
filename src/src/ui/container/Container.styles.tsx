import styled from "@emotion/styled";

export interface StylesPropsI {
  gap?: string;
  as?: "form";
}

export const Container = styled.div<StylesPropsI>`
  display: flex;
`;
export const ContainerColumn = styled(Container)`
  flex-direction: column;
`;

export const GridContainer = styled.div<StylesPropsI>`
  display: grid;
`;

export const Center = styled(Container)`
  justify-content: center;
  align-items: center;
  height: 100%;
`;
