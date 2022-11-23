import styled from "@emotion/styled";

export interface StylesPropsI {
  gap?: string;
}

export const ContainerStyles = styled.div<StylesPropsI>`
  display: flex;
`;
export const ContainerColumnStyles = styled(ContainerStyles)`
  flex-direction: column;
  gap: ${({ gap }) => gap && gap};
`;

export const ContainerGrid = styled.div<StylesPropsI>`
  display: grid;
`;

export const ContainerCenterStyles = styled(ContainerStyles)`
  justify-content: center;
  align-items: center;
  height: 100%;
`;
