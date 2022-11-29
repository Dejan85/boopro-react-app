import styled from "@emotion/styled";

export interface StylesPropsI {
  gap?: string;
}

export const PaginationWrapper = styled.div<StylesPropsI>`
  display: flex;
  align-self: center;
`;
