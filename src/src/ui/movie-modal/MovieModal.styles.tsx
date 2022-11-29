import styled from "@emotion/styled";

export interface StylesPropsI {
  gap?: string;
}

export const MovieModalWrapper = styled.div<StylesPropsI>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

export const MovieModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  background: var(--primary-color);
  color: white;
  padding: var(--pd-20);
  gap: var(--gap-20);
`;

export const Title = styled.h4``;
export const Overview = styled.p``;
export const Vote = styled.p``;
