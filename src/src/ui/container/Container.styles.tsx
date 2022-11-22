import styled from "@emotion/styled";

export interface StylesPropsI {}

export const ContainerStyles = styled.div<StylesPropsI>`
  display: flex;
`;
export const ContainerColumnStyles = styled(ContainerStyles)`
  flex-direction: column;
`;

export const ContainerGrid = styled.div<StylesPropsI>`
  display: grid;
`;
